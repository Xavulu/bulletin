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
import HeaderView from "./headerView";
import {LinkIcon, ArrowForwardIcon } from '@chakra-ui/icons';



const NotFound = ( ) => {

    return (
        <>
        <Flex
            direction="column"
            alignItems="center"
            justifyContent="flex-start"
            height="100vh"
        >
            <Flex
                justify-content="center"
                alignItems="center"
                height="100vh"
            >
                <Heading
                    fontSize="10vw"
                    
                >
                    404
                </Heading>
            </Flex>
            <Text>
                something went wrong...
            </Text>
            <Flex as="footer" py="8rem">
        
            </Flex>

        </Flex>
            
        </>


    )

}



export default NotFound;