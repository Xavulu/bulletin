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
import { PlayList } from "../../utils/playlist/circular_playlist"



const SinglePostViewByID = () => {
    const [val, setVal] = useState<AudioResponse>();
    const [playlist, setPlaylist] = useGlobalState("playlist");
    const [single, setSingle] = useState<boolean>(false);
    
        
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


    const track = playlist.getEntry(id); 
    if ( track === undefined){
        return (
            <NotFound/>
        )
    }

    const nextTrack = playlist.getNext(track.id);
    const prevTrack = playlist.getPrev(track.id);

    if (nextTrack === undefined || prevTrack === undefined || playlist.isEmpty()){
        setSingle(true);
    }

    


    return (
        <div>
            
        </div>
    );
}

export default SinglePostViewByID;