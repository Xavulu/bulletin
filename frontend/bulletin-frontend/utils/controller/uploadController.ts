import { updateList } from "./ListStreamController";
import { AudioResponse } from "../model_helpers/audio_response";
import { Ok, Err, Result } from "ts-results"; 
import AudioUpload from "../model_helpers/audio_upload_class";
import ky from "ky";

const uploader = async (upload: AudioUpload): Promise<Result<AudioResponse, Error>> => {
    let res: AudioResponse = {
        id: "",
        name: "",
        description: "",
        title: "",
        image: "",
        upvotes: 0,
        downvotes: 0,
        source: "",
        audio: "",
        translation: [],
        validUpload: false
    }; 
        await ky.post(
            'https://onramp-bulletin.herokuapp.com/api/submit', 
            {json: {
                name: upload.getName(), 
                description: upload.getDescription(), 
                image: upload.getImage(), 
                source: upload.getSource(), 
                audio: upload.getAudio(), 
                title: upload.getTitle(),
            }}).json<AudioResponse>().then(success => {
                res = success;
            }).catch(error => {
                console.log("caught error while trying to upload:\n"); 
                console.log(error); 
                return new Err(new Error("failed to upload entry"));
            }); 
    return Ok(res);
}

const uploadEntryController = async (
    name: string,
    description: string, 
    image: string, 
    source: string, 
    audio: string, 
    title: string): Promise<Result<boolean, Error>> => {
        let upload =  new AudioUpload(name, description, image, source, audio, title);
        if(upload.validate() === false) {
            return new Err(new Error('missing fields'));
            
        }
        const post: Result<AudioResponse, Error> = await uploader(upload);
        if (post.err){
            return new Err(new Error(post.val.message));
            
        }
        const updateListResult: boolean = updateList(post.val);
        return Ok(updateListResult);
}

export default uploadEntryController;