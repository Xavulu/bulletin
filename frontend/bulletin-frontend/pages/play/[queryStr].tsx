import { useRouter } from 'next/router';
import { waker } from '../../utils/wake_up';
import { setGlobalState, useGlobalState } from '../../utils/global_state/global';
import { AudioResponse, audioResponseFailure } from '../../utils/model_helpers/audio_response';
import { getEntryController } from '../../utils/controller/entryController';
import { useEffect, useState } from "react";
import { 
    FormErrorMessage, 
    FormLabel, 
    FormControl, 
    Input, 
    Button,  
    Box, 
    Textarea, 
    Tooltip, 
    InputGroup, 
    InputLeftElement, 
    Text, 
    Flex, 
    Heading, 
     
    
} from "@chakra-ui/react";
import NotFound from '../../components/fourohfour';



const SinglePostViewByID = () => {
    const [val, setVal] = useState<AudioResponse>();
    const singleEntryControllerInterface = async (id: string) => {
        const value = await getEntryController(id); 
        setVal(value);
    };
    
        
    const router = useRouter();
    const { queryStr } = router.query;
    let id = "";
    if (queryStr === undefined){
        return (
            <NotFound/>
        )
    } 

    if (Array.isArray(queryStr)){
        id = queryStr[0];
    } else {
        id = queryStr;
    } 

    useEffect(() => {
        singleEntryControllerInterface(id);
    }, []);

    if (audioResponseFailure(val) === true || val === undefined){
        return (
            <NotFound/>
        )
    }

    return (
        <div>
            
        </div>
    );
}

export default SinglePostViewByID;