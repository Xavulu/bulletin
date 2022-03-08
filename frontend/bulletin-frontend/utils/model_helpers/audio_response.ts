
export type AudioResponse = {
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

export const audioResponseFailure = (r: AudioResponse | undefined): boolean => {
    if (r === undefined){
        return true;
    }
    if (r.id === ""){
        return true;
    }
    return false;
}
