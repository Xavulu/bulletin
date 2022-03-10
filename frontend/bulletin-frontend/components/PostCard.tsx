import { ArrowDownIcon, ArrowUpIcon, LinkIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { 
    Box, 
    Flex, 
    Heading, 
    Image,  
    HStack,
    Text, 
    Button, 
    Badge
} from "@chakra-ui/react";
import { AudioResponse } from "../utils/model_helpers/audio_response";
import Link from 'next/link';


const PostCard = ({
    post
    }: {post: AudioResponse}
    ) => {
    
        const altText: string = `picture for ${post.title}`;
    return (
        
            <Flex
                maxWidth="700px"
                w={[300,450,600]}
                borderWidth={.5} 
                borderRadius={6} 
                rounded="lg"
                minHeight="125px"
                maxHeight="125px"
            >
                <Box width='125px'>
                    <Image 
                        src={post.image} 
                        fallbackSrc='https://via.placeholder.com/150'
                        alt={altText}
                    />
                </Box>
                <Flex ml={4} direction='column' w="max">
                    <div>
                        <h2>
                            <Box flex="1" text-align="left">
                                <Heading size="xs">
                                    <Text> 
                                        { post.title }
                                    </Text>
                                </Heading>
                                <Flex direction="column">
                                    <Text 
                                        fontSize="sm"
                                        mr={4}
                                        isTruncated
                                    >
                                        { post.name }
                                    </Text>
                                </Flex>
                                <Flex direction="column">
                                    <HStack>
                                        <Box>
                                            <Button 
                                                size="xs"
                                                _hover={{ 
                                                    color: "pink.300"
                                                }}
                                            >
                                                <HStack>
                                                    <Box>
                                                        <a href={ post.source }>
                                                            view source
                                                        </a>
                                                    </Box>
                                                    <Box>
                                                        <ExternalLinkIcon/>
                                                    </Box>
                                                </HStack>
                                            </Button>
                                        </Box>
                                        <Box>
                                            <Button 
                                                size="xs"
                                                _hover={{ 
                                                    color: "pink.300"
                                                }}
                                            >
                                                <HStack>
                                                    <Box>
                                                        <Link href={ post.link! }>
                                                            track link
                                                        </Link>
                                                    </Box>
                                                    <Box>
                                                        <LinkIcon/>
                                                    </Box>
                                                </HStack>
                                            </Button>
                                        </Box>
                                    </HStack>
                                    <HStack>
                                        <Box>
                                            <Badge colorScheme="blue">
                                                { post.upvotes } upvotes
                                            </Badge>
                                        </Box>
                                        <Box>

                                        </Box>
                                        <Box>
                                            <Badge colorScheme="red">
                                                { post.downvotes } downvotes
                                            </Badge>
                                        </Box>
                                    </HStack>
                                </Flex>
                            </Box>
                        </h2>
                    </div>
                </Flex>
                
            </Flex>
        
    )
}

export default PostCard;