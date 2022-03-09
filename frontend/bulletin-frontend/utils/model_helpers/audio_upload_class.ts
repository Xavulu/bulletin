import * as z from 'zod'

class AudioUpload{
    _name: string; 
    _description: string; 
    _image: string; 
    _source: string; 
    _audio: string;
    _title: string; 

    constructor(
            name: string,
            description: string, 
            image: string, 
            source: string, 
            audio: string, 
            title: string
        )
    {
        this._name = name; 
        this._description = description; 
        this._image = image;
        this._source = source; 
        this._audio = audio; 
        this._title = title;
    } 

    getName(): string {
        return this._name;
    } 

    getDescription(): string {
        return this._description;
    } 

    getImage(): string {
        return this._image;
    } 

    getSource(): string {
        return this._source;
    } 

    getAudio(): string {
        return this._audio;
    }

    getTitle(): string {
        return this._title;
    }

    validate(): boolean {
        const uploadBody = z.object({
            name: z.string().min(1), 
            description: z.string().min(1), 
            image: z.string().url().min(1), 
            source: z.string().url().min(1),  
            audio: z.string().url().min(1), 
            title: z.string().min(1)
        }); 

        const valid = uploadBody.safeParse({
            name: this._name, 
            description: this._description, 
            image: this._image,
            source: this._source, 
            audio: this._audio,
            title: this._title
        }); 

        if (!valid.success){ return false;};
        return true;
    }

}



export default AudioUpload;


