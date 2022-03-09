import {AudioResponse, audioResponseFailure} from "../utils/model_helpers/audio_response"; 
import { getEntryController } from "../utils/controller/entryController";
import { useEffect, useState } from "react";

export const SinglePostView =  (props: { id: string; }) => {
    const [val, setVal] = useState<AudioResponse>();
    const singleEntryControllerInterface = async () => {
        const value = await getEntryController(props.id); 
        setVal(value);
    };
    useEffect(() => {
        singleEntryControllerInterface();
    }, [])
        
    if (audioResponseFailure(val) === true || val === undefined){
        return (
            <>
                <div>
                    this post does not exist unfortunately....
                </div>
            </>
        )
    }

    return (
        <>
            <div>
                worked
            </div>
        </>
    )
}
