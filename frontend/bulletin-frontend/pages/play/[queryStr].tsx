import { useRouter } from 'next/router';
import { setGlobalState, useGlobalState, langmap } from '../../utils/global_state/global';
import { AudioResponse } from '../../utils/model_helpers/audio_response';
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
    Image
     
    
} from "@chakra-ui/react";
import NotFound from '../../components/fourohfour';
import { PlayList } from "../../utils/playlist/circular_playlist"
import { PlaylistController } from '../../utils/controller/ListStreamController';
import { SinglePostView } from '../../components/individualView';



const SinglePostViewByID = () => {
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
    return (
        <SinglePostView 
            id={id}
        />
    );
}

export default SinglePostViewByID;