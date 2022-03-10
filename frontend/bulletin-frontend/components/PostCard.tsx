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
    LinkOverlay, 
    Spacer
} from "@chakra-ui/react";
import { AudioResponse } from "../utils/model_helpers/audio_response";

const PostCard = ({
    post
    }: {post: AudioResponse}
    ) => {
    
        const altText: string = `picture for ${post.title}`;
    return (
        <>
            <Flex
                maxWidth="500px"
                w={[300,400,500]}
                border="1px"
                rounded="lg"
            >
                <Box>
                    { post.name }
                </Box>
            </Flex>
        </>
    )
}

export default PostCard;