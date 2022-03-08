import {AudioResponse, audioResponseFailure} from "../utils/model_helpers/audio_response"; 
import { getEntryController } from "../utils/controller/entryController";
import { useEffect, useState } from "react";

export const SinglePostView =  (id: string) => {
    const [val, setVal] = useState<AudioResponse>();
    const singleEntryControllerInterface = async () => {
        const value = await getEntryController(id); 
        setVal(value);
    };
    useEffect(() => {
        singleEntryControllerInterface();
    }, [])

    if (audioResponseFailure(val) === true){
        return (
            <>
            
            </>
        )
    }

    return (
        <>
        
        </>
    )
}
