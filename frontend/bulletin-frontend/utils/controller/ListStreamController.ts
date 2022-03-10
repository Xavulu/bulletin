import { BehaviorSubject, map} from "rxjs";
import { AudioResponse } from "../model_helpers/audio_response"; 
import { PlayList } from "../playlist/circular_playlist";
import { nanoid } from "nanoid";

const rawData$ = new BehaviorSubject<AudioResponse[]>([]);


export const listEndPoint: string = "https://onramp-bulletin.herokuapp.com/api/listall";

export const audioList$ = rawData$.pipe(
    map((response) =>
    response.map((r) => ({
        ...r, 
    }))
    )
); 


fetch(listEndPoint, {
    method: 'GET',
    }).then(response => response.json())
    .then((data: AudioResponse[]) => {
        data.forEach(x => {
            x.link = `/play/${x.id}`;
            x.shortid = nanoid(10)
        })
        data.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1 );
        rawData$.next(data)
    });


export const globalRefreshController = async (url: string) => {
    let res: AudioResponse[] = [];
    fetch(url, {
    method: 'GET',
    }).then(response => response.json())
    .then((data: AudioResponse[]) => {
        data.forEach(x => {
            x.link = `/play/${x.id}`;
            x.shortid = nanoid(10)
        })
        rawData$.next(data)
        res = [...data];
    });
    return res;
}

export const updateList = (audio: AudioResponse): boolean => {
    let value = rawData$.value;
    let audios = [...value, audio];
    rawData$.next(audios); 
    return true;
}

export enum SortOrder {
    TITLE, 
    NAME
};

export const sortListStreamController = (direction: SortOrder) => {
    let value = rawData$.value; 
    if (direction === SortOrder.TITLE){
        value.sort((a,b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1 );
    }
    if (direction === SortOrder.NAME){
        value.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1 );
    }
    rawData$.next(value);
}



export const PlaylistController = (): PlayList =>{
    const value = rawData$.value;
    const playlist = new PlayList(value);
    rawData$.next(value);
    return playlist;
}


