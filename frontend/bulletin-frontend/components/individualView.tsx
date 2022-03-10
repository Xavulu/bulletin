import {AudioResponse, audioResponseFailure} from "../utils/model_helpers/audio_response"; 
import { getEntryController } from "../utils/controller/entryController";
import { useEffect, useState } from "react";
import { setGlobalState, useGlobalState } from '../utils/global_state/global';
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
    Image, 
    Accordion, 
    AccordionButton, 
    AccordionIcon, 
    AccordionItem,
    AccordionPanel, 
    Spacer
} from "@chakra-ui/react";
import { PlayList } from "../utils/playlist/circular_playlist"
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { PlaylistController } from '../utils/controller/ListStreamController';
import NotFound from './fourohfour';



export const SinglePostView =  (props: { id: string}) => {
    const [playlist, setPlaylist] = useGlobalState("playlist");
    const refreshList: PlayList = PlaylistController()
    const [language, setLanguage] = useGlobalState("language");
    const [single, setSingle] = useState<boolean>(false);
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
            <NotFound/>
        )
    }

    const addHistory = () => {
        playlist.addToHistory(val.id); 
        setPlaylist(playlist);
    };

    let nextTrack = playlist.getNext(val.id); 
    let prevTrack = playlist.getPrev(val.id); 
    let nextlink = "";
    let prevLink = ""; 


    if (nextTrack === undefined || prevTrack === undefined){
        setPlaylist(refreshList);
        nextTrack = playlist.getNext(val.id); 
        prevTrack = playlist.getPrev(val.id); 
        if (nextTrack === undefined || prevTrack === undefined){
            setSingle(true);
        } 
    } else {
        nextlink = `/play/${nextTrack}`; 
        prevLink = `/play/${prevTrack}`;
    }
    console.log(nextlink, prevLink);


    return (
        <>
            <Flex
            maxWidth="700px"
            width="100%"
            rounded="lg"
        >
            <Box
                width="125px"
            >
                <Image 
                    boxSize="125px"
                    src={val.image}>
                </Image>
            </Box>
            <Flex 
                ml={4}
                direction="column"
                width="100%"
            >
                <div>
                    <Accordion
                        allowToggle
                        
                    >
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box
                                        flex="1"
                                        textAlign="left"
                                    >
                                        <Heading
                                            size="sm"
                                        >
                                            {val.title}
                                        </Heading>
                                    </Box>
                                    <AccordionIcon/>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel 
                                pb={4} 
                                m={4}
                            >
                                <Text
                                    fontSize={["sm", "md", "lg"]}
                                >
                                    nothing here yet
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
                <Flex
                    direction="column"
                >
                    <Text
                        fontSize={["sm", "md", "lg"]}
                    >
                        {val.name}
                    </Text>
                    <Spacer/>
                    <Text
                        mr={4}
                        as="i"
                    >

                    </Text>
                </Flex>
                <div
                    style={{ 
                        marginRight: "4px",
                        marginBottom: "4px",
                        marginTop: "auto"
                    }}
                >
                    <audio 
                        style={{ 
                            width: "100%"
                        }}
                        controls
                    >
                        <source src={val.audio} type="audio/mpeg"></source>
                    </audio>
                </div>
            </Flex>
        </Flex>
        </>
    )
}
