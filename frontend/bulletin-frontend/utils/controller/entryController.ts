import { AudioResponse } from "../model_helpers/audio_response";
import { Ok, Err, Result } from "ts-results"; 
import ky from 'ky';

const fetcher = async (id: string): Promise<Result<AudioResponse, Error>> => {
    const url: string = `https://onramp-bulletin.herokuapp.com/api/single/${id}`; 
    let entry: AudioResponse = {
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
    const res = await ky.get(url)
        .json<AudioResponse>()
        .then(success => {
            entry = success;
        })
        .catch(error => {
            console.log("failed to get entry error:\n");
            console.log(error.toString); 
            return new Err(new Error("failed to fetch entry"));
        });
    return Ok(entry);
}


export const getEntryController = async (id: string): Promise<AudioResponse> => {
    const entryFetcher: Result<AudioResponse, Error> = await fetcher(id);
    if (entryFetcher.err){
        const failed: AudioResponse = {
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
        return failed;
    }
    return entryFetcher.val;
}