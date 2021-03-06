import * as z from 'zod'; 

export const uploadSchema = z.object({
    name: z.string().min(1, {message: 'this field is required'}), 
    description: z.string().min(1, {message: 'this field is required'}).max(700, {message: 'max 700 character length'}), 
    image: z.string().url().min(1, {message: 'this field is required'}).url({message: 'invalid url'}), 
    source: z.string().url().min(1, {message: 'this field is required'}).url({message: 'invalid url'}),  
    audio: z.string().url().min(1, {message: 'this field is required'}).url({message: 'invalid url'}), 
    title: z.string().min(1, {message: 'this field is required'})
});