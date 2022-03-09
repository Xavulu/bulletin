import uploadEntryController from "../utils/controller/uploadController";
import { uploadSchema} from "../utils/model_helpers/audio_upload_schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormErrorMessage, FormLabel, FormControl, Input, Button } from "@chakra-ui/react";


/*
    _name: string; 
    _description: string; 
    _image: string; 
    _source: string; 
    _audio: string;
    _title: string; 
*/

const PostFormView = () => {

    

    return (
        <>
            <div>
                <form>
                    
                </form>
            </div>
        </>
    )
}

export default PostFormView;