import uploadEntryController from "../utils/controller/uploadController";
import { uploadSchema } from "../utils/model_helpers/audio_upload_schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormErrorMessage, FormLabel, FormControl, Input, Button, Center, Box, FormHelperText, Textarea, Tooltip } from "@chakra-ui/react";
import { useForm, SubmitHandler, Resolver } from "react-hook-form";
import { useEffect } from "react";

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
        formState: { errors, isSubmitting },
    } = useForm<MyFormInputs>({
        resolver: zodResolver(uploadSchema), 
    });

    const uploadControllerInterface = async (data: MyFormInputs) => {
        const res = await uploadEntryController(data.name, data.description, data.image, data.source, data.audio, data.title);
        if (!res){
            console.log("failed to upload post");
        } 
        console.log("successfully uploaded post");
    }
    
    const formSubmitHandler: SubmitHandler<MyFormInputs> = (data: MyFormInputs) => {
        console.log(data);
        
        uploadControllerInterface(data);
        
    };
    /*
    _name: string; 
    _description: string; 
    _image: string; 
    _source: string; 
    _audio: string;
    _title: string; 
    */
    return (
        <>
            <Center>
                <Box>
                <div>
                    <form onSubmit={handleSubmit(formSubmitHandler)}>

                        <FormControl id="name" isInvalid={errors.name}>
                            <FormLabel htmlFor="name">name</FormLabel>
                            <Tooltip 
                                label="the podcast/artist name" 
                                hasArrow
                            >
                            <Input 
                                placeholder="..." 
                                {...register ('name', {required: true})}
                                aria-label="name input field"
                            /> 
                            </Tooltip>
                            <FormErrorMessage>
                                {errors.name && <span>  {errors.name.message} </span>}
                            </FormErrorMessage>
                        </FormControl> 

                        <FormControl id="title" isInvalid={errors.title}>
                            <FormLabel htmlFor="title">title</FormLabel>
                            <Tooltip 
                                label="the title of the podcast episode/song name"
                                hasArrow 
                            >
                            <Input
                                placeholder="..."
                                {...register('title', {required: true})}
                                aria-label="title input field"
                            />
                            </Tooltip>
                            <FormErrorMessage>
                                {errors.title && <span> {errors.title.message} </span> }
                            </FormErrorMessage>
                        </FormControl>

                        <FormControl id="image" isInvalid={errors.image}>
                            <FormLabel htmlFor="image">image</FormLabel>
                            <Tooltip 
                                label="the podcast/album cover image link" 
                                hasArrow
                            >
                            <Input
                            placeholder="https://example.com/pic.jpg"
                            {...register('image', {required: true})}
                            aria-label="image input field, should be a url"
                            />
                            </Tooltip>
                            <FormErrorMessage>
                                {errors.image && <span> {errors.image.message} </span>}
                            </FormErrorMessage>
                        </FormControl>

                        <FormControl id="source" isInvalid={errors.source}>
                            <FormLabel htmlFor="source">source</FormLabel>
                            <Tooltip 
                                label="the source url"
                                hasArrow
                            >
                            <Input
                                placeholder="https://example.com"
                                {...register('source', {required: true})}
                                aria-label="source url input field"
                            />
                            </Tooltip>
                            <FormErrorMessage>
                                {errors.source && <span> {errors.source.message} </span>}
                            </FormErrorMessage>
                        </FormControl>

                        <FormControl id="audio" isInvalid={errors.audio}>
                            <FormLabel htmlFor="audio">audio</FormLabel>
                            <Tooltip 
                                label="the audio url, should be mp3 or mp4"
                                hasArrow
                            >
                            <Input
                                placeholder="https://example.com/podcast.mp3"
                                {...register('audio', {required: true})}
                                aria-label="audio input field, should be a mp3 or mp4 link url"
                            />
                            </Tooltip>
                            <FormErrorMessage>
                                {errors.audio && <span> {errors.audio.message} </span>}
                            </FormErrorMessage>
                        </FormControl> 

                        <FormControl id="description" isInvalid={errors.description}>
                            <FormLabel htmlFor="description">description</FormLabel>
                            <Tooltip 
                                label="the podcast/song description"
                                hasArrow
                            >
                            <Textarea
                                placeholder="..."
                                {...register('description', {required: true})}
                                size="sm"
                                resize="vertical"
                                aria-label="description input field"
                            />
                            </Tooltip>
                            <FormErrorMessage>
                                {errors.description && <span> {errors.description.message} </span>}
                            </FormErrorMessage>
                        </FormControl> 
                        <Button 
                            type="submit"
                            isLoading={isSubmitting}
                        >
                            Submit
                        </Button>
                    </form>
                </div>
                </Box>
            </Center>
        </>
    )
}

export default PostFormView;