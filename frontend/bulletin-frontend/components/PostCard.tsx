import { ArrowDownIcon, ArrowUpIcon, LinkIcon } from "@chakra-ui/icons";
import { 
    Box, 
    Flex, 
    Grid, 
    Accordion, 
    AccordionItem, 
    AccordionButton,
    AccordionPanel,
    Badge, 
    Heading, 
    Image, 
    Center, 
    HStack,
    Text, 
    Avatar, 
    LinkBox, 
    LinkOverlay
} from "@chakra-ui/react";
import { AudioResponse } from "../utils/model_helpers/audio_response";

const PostCard = ({
    post
    }: {post: AudioResponse}
    ) => {
    
        const altText: string = `picture for ${post.title}`;
    return (
        <>
            <Box
                maxW="sm" 
                borderWidth={.5}
                borderRadius={6}
                boxShadow="md"
                pb="2"
                height="80px"
            >
                <HStack spacing={1}>
                    <Box >
                        <Text fontSize="xs">
                            {post.title}
                        </Text>
                    </Box>
                </HStack>
            </Box>
        </>
    )
}

export default PostCard;