
type AudioResponse = {
    id: string; 
    name: string; 
    description: string; 
    title: string; 
    image: string; 
    upvotes: number; 
    downvotes: number; 
    source: string; 
    audio: string; 
    translation: string[]; 
    validUpload: boolean;
    link? : string;
}

export default AudioResponse;