import {AudioResponse, audioResponseFailure} from "../utils/model_helpers/audio_response"; 
import { getEntryController } from "../utils/controller/entryController";
import { useEffect, useState } from "react";
import { setGlobalState, useGlobalState } from '../utils/global_state/global';
import { 
    Button,  
    Box, 
    Text, 
    Flex, 
    Heading, 
    Image, 
    Accordion, 
    AccordionButton, 
    AccordionIcon, 
    AccordionItem,
    AccordionPanel, 
    Spacer, 
    Center, 
    HStack, 
    ButtonGroup, 
    IconButton, 
    Link
} from "@chakra-ui/react";
import { PlayList } from "../utils/playlist/circular_playlist"
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { PlaylistController } from '../utils/controller/ListStreamController';
import NotFound from './fourohfour';
import { 
    AddIcon, 
    MinusIcon
} from '@chakra-ui/icons';
import { voteForPostController, Direction } from '../utils/controller/voteController';



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
            <div>
                loading.....
            </div>
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

    const downvote = () => {
        let res = voteForPostController(val.id, Direction.DOWN);
        console.log(res);
    }

    const upvote = () => {
        let res = voteForPostController(val.id, Direction.UP);
        console.log(res);
    }


    return (
        <Flex
            alignItems="center"
            height="100vh"
            flexDir="column"
            align="center"
            justify="center"
            
        >
        <Box>
            <Flex
            maxWidth="500px"
            width="100%"
            rounded="lg"
            border="1px"
        >
            <Box
                width="125px"
            >
                <Image 
                    boxSize="125px"
                    src={val.image}>
                </Image>
                <ButtonGroup size='sm' isAttached variant='outline'>
                <IconButton aria-label='Add to friends' 
                    onClick={() => upvote()}
                >
                    <AddIcon/>
                </IconButton>
                <IconButton aria-label='Add to friends'
                    onClick={() => downvote()}
                >
                    <MinusIcon/>
                </IconButton>
            </ButtonGroup>
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
                                    {val.description}
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
                    <audio style={{
                         width: '100%',


                        }} controls
                        src={val.audio}
                        >
                        
                    </audio>
                    <ButtonGroup size='sm' isAttached variant='outline'>
                <Button aria-label='Add to friends' 
                    
                >
                    <Link href={nextlink}>next track</Link>
                </Button>
                <Button aria-label='Add to friends'
                    
                >
                    <Link href={prevLink}>prev track</Link>
                </Button>
            </ButtonGroup>
                </div>
            </Flex>
            
        </Flex>
        </Box>
        </Flex>
    )
}
