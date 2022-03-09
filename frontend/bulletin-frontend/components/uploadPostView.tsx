import uploadEntryController from "../utils/controller/uploadController";
import { uploadSchema} from "../utils/model_helpers/audio_upload_schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormErrorMessage, FormLabel, FormControl, Input, Button } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";

/*
    _name: string; 
    _description: string; 
    _image: string; 
    _source: string; 
    _audio: string;
    _title: string; 
*/

interface MyFormInputs { 
    name : string; 
    description : string; 
    image: string;
    source: string;
    audio: string;
    title: string;
}

const PostFormView = () => {
    const {
        register, 
        handleSubmit, 
        watch, 
        formState: { errors },
    } = useForm<MyFormInputs>();
    

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