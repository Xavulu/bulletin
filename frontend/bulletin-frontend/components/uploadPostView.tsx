import uploadEntryController from "../utils/controller/uploadController";
import { uploadSchema } from "../utils/model_helpers/audio_upload_schema";
import { zodResolver } from "@hookform/resolvers/zod";
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
} from "@chakra-ui/react";
import { useForm, SubmitHandler, Resolver } from "react-hook-form";
import { useState, useEffect } from "react";
import { AddIcon, LinkIcon} from '@chakra-ui/icons';

interface MyFormInputs { 
    name : string; 
    description : string; 
    image: string;
    source: string;
    audio: string;
    title: string;
}

const PostFormView = () => {
    const {
        register, 
        handleSubmit,  
        reset,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm<MyFormInputs>({
        resolver: zodResolver(uploadSchema),
        defaultValues: { 
            name : "",
            description : "",
            image: "",
            source: "",
            audio: "",
            title: "",
        },
    });

    const uploadControllerInterface = async (data: MyFormInputs): Promise<Error | undefined> => {
        
        const res = await uploadEntryController(data.name, data.description, data.image, data.source, data.audio, data.title);
        if (res.err){
            
            return new Error(res.val.message)
        }
        return undefined;
    }
    
    const formSubmitHandler: SubmitHandler<MyFormInputs> = (data: MyFormInputs) => {
        console.log(data);
        const up = uploadControllerInterface(data);
        if (up !== undefined){
            console.log(up);
        }
        console.log("success");
        reset();
    };
    
    return (
        <>
            <Flex width="full" align="center" justifyContent="center">
                <Box p={8} maxWidth="500px" borderWidth={.5} borderRadius={6} boxShadow="md">
                <Box my={4}>
                
                <div>
                    <form onSubmit={handleSubmit(formSubmitHandler)}>

                        <FormControl id="name" isInvalid={!!errors?.name} pb={2}>
                            <FormLabel htmlFor="name">
                                <Flex>
                                    <Text fontSize="sm"> name </Text>
                                    <Text fontSize="xs" color="red.500">*</Text>
                                </Flex>
                            </FormLabel>
                            <Tooltip 
                                label="the podcast/artist name" 
                                hasArrow
                            >
                            <InputGroup>
                                <InputLeftElement pointerEvents="none"> 
                                    <AddIcon color="gray.300"/>  
                                </InputLeftElement>
                                <Input
                                    placeholder="podcast/artist name" 
                                    _placeholder={ { color: "pink.300" } }
                                    {...register ('name', {required: true})}
                                    aria-label="name input field"
                                    size="sm"
                                    variant="flushed"
                                    focusBorderColor="pink.300"
                                /> 
                            </InputGroup>
                            
                            </Tooltip>
                            <FormErrorMessage>
                                {errors.name && <span>  {errors.name.message} </span>}
                            </FormErrorMessage>
                        </FormControl> 

                        <FormControl id="title" isInvalid={!!errors?.title} pb={2}>
                            <FormLabel htmlFor="title">
                                <Flex>
                                    <Text fontSize="sm"> title </Text>
                                    <Text fontSize="xs" color="red.500">*</Text>
                                </Flex>
                            </FormLabel>
                            <Tooltip 
                                label="the title of the podcast episode/song name"
                                hasArrow 
                            >
                            <InputGroup>
                                <InputLeftElement pointerEvents="none"> 
                                    <AddIcon color="gray.300"/>  
                                </InputLeftElement>
                                <Input
                                    placeholder="episode/song title"
                                    _placeholder={ { color: "pink.300" } }
                                    {...register('title', {required: true})}
                                    aria-label="title input field"
                                    size="sm"
                                    variant="flushed"
                                    focusBorderColor="pink.300"
                                />
                            </InputGroup>
                            </Tooltip>
                            <FormErrorMessage>
                                {errors.title && <span> {errors.title.message} </span> }
                            </FormErrorMessage>
                        </FormControl>

                        <FormControl id="image" isInvalid={!!errors?.image} pb={2}>
                            <FormLabel htmlFor="image">
                                <Flex>
                                    <Text fontSize="sm"> image </Text>
                                    <Text fontSize="xs" color="red.500">*</Text>
                                </Flex>
                            </FormLabel>
                            <Tooltip 
                                label="the podcast/album cover image link" 
                                hasArrow
                            >
                            <InputGroup>
                                <InputLeftElement pointerEvents="none"> 
                                    <LinkIcon color="gray.300"/>  
                                </InputLeftElement>
                                <Input
                                    placeholder="https://example.com/pic.jpg"
                                    _placeholder={ { color: "pink.300" } }
                                    {...register('image', {required: true})}
                                    aria-label="image input field, should be a url"
                                    size="sm"
                                    variant="flushed"
                                    focusBorderColor="pink.300"
                                />
                            </InputGroup>
                            
                            </Tooltip>
                            <FormErrorMessage>
                                {errors.image && <span> {errors.image.message} </span>}
                            </FormErrorMessage>
                        </FormControl>

                        <FormControl id="source" isInvalid={!!errors?.source} pb={2}>
                            <FormLabel htmlFor="source">
                                <Flex>
                                    <Text fontSize="sm"> source </Text>
                                    <Text fontSize="xs" color="red.500">*</Text>
                                </Flex>
                            </FormLabel>
                            <Tooltip 
                                label="the source url"
                                hasArrow
                            >
                            <InputGroup>
                                <InputLeftElement pointerEvents="none"> 
                                    <LinkIcon color="gray.300"/>  
                                </InputLeftElement>
                                <Input
                                    placeholder="https://example.com"
                                    _placeholder={ { color: "pink.300" } }
                                    {...register('source', {required: true})}
                                    aria-label="source url input field"
                                    size="sm"
                                    variant="flushed"
                                    focusBorderColor="pink.300"
                                />
                            </InputGroup>
                            
                            </Tooltip>
                            <FormErrorMessage>
                                {errors.source && <span> {errors.source.message} </span>}
                            </FormErrorMessage>
                        </FormControl>

                        <FormControl id="audio" isInvalid={!!errors?.audio} pb={2}>
                            <FormLabel htmlFor="audio">
                                <Flex>
                                    <Text fontSize="sm"> audio </Text>
                                    <Text fontSize="xs" color="red.500">*</Text>
                                </Flex>
                            </FormLabel>
                            <Tooltip 
                                label="the audio url, should be mp3 or mp4"
                                hasArrow
                            >
                            <InputGroup>
                                <InputLeftElement pointerEvents="none"> 
                                    <LinkIcon color="gray.300"/>  
                                </InputLeftElement>
                                <Input
                                    placeholder="https://example.com/podcast.mp3"
                                    _placeholder={ { color: "pink.300" } }
                                    {...register('audio', {required: true})}
                                    aria-label="audio input field, should be a mp3 or mp4 link url"
                                    size="sm"
                                    variant="flushed"
                                    focusBorderColor="pink.300"
                                />
                            </InputGroup>
                            
                            </Tooltip>
                            <FormErrorMessage>
                                {errors.audio && <span> {errors.audio.message} </span>}
                            </FormErrorMessage>
                        </FormControl> 

                        <FormControl id="description" isInvalid={!!errors?.description} pb={1}>
                            <FormLabel htmlFor="description">
                                <Flex>
                                    <Text fontSize="sm"> description </Text>
                                    <Text fontSize="xs" color="red.500">*</Text>
                                </Flex>
                            </FormLabel>
                            <Tooltip 
                                label="the podcast/song description"
                                hasArrow
                            >
                            <Textarea
                                placeholder="..."
                                _placeholder={ { color: "pink.300" } }
                                {...register('description', {required: true})}
                                size="lg"
                                resize="vertical"
                                aria-label="description input field"
                                variant="outline"
                                focusBorderColor="pink.300"
                            />
                            </Tooltip>
                            <FormErrorMessage>
                                {errors.description && <span> {errors.description.message} </span>}
                            </FormErrorMessage>
                        </FormControl> 
                        <Button 
                            type="submit"
                            isLoading={isSubmitting}
                            width="full"
                            mt={4}
                        >
                            Submit
                        </Button>
                    </form>
                </div>
                
                </Box>
                </Box>
            </Flex>
        </>
    )
}

export default PostFormView;

