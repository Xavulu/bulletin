import { BehaviorSubject, map} from "rxjs";
import { AudioResponse } from "../model_helpers/audio_response";
import { Ok, Err, Result } from "ts-results"; 
import { PlayList } from "../playlist/circular_playlist";

const rawData$ = new BehaviorSubject<AudioResponse[]>([]);

export const audioList$ = rawData$.pipe(
    map((response) =>
    response.map((r) => ({
        ...r, 
        link: `/play/${r.id}`
    }))
    )
);

fetch("https://onramp-bulletin.herokuapp.com/api/listall", {
    method: 'GET',
    }).then(response => response.json())
    .then((data: AudioResponse[]) => rawData$.next(data));

export const refreshAfterVote = async () => {
    await fetch("https://onramp-bulletin.herokuapp.com/api/listall", {
    method: 'GET',
    }).then(response => response.json())
    .then((data: AudioResponse[]) => rawData$.next(data));
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

/*
export const sortListBy = (arr: AudioResponse[], direction: SortBy): AudioResponse[] => {
    let sorted: AudioResponse[] = arr; 
    if (direction === SortBy.TITLE){
        sorted.sort((a,b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1 );
    }
    if (direction === SortBy.NAME){
        sorted.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1 );
    }
    return sorted;
}
*/
export const refreshListSWRController = async (url: string): Promise<Result<PlayList, Error>> => {
    let refreshed: AudioResponse[] = [];
    await fetch(url, { 
        method: "GET", 

    }).then(response => response.json())
        .then((data: AudioResponse[]) => {
            refreshed = [...data]; 
            rawData$.next(refreshed);
        })
        .catch(error => {
            console.log("failed to refresh list:\n");
            console.log(error);
            return new Err(new Error("failed to refresh list"));
        }) 

    let playlist: PlayList = new PlayList(refreshed);

    return Ok(playlist);
}
