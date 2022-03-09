import { BehaviorSubject, map, combineLatestWith } from "rxjs";
import { AudioResponse } from "../model_helpers/audio_response";

const rawData$ = new BehaviorSubject<AudioResponse[]>([]);

export const audioList$ = rawData$.pipe(
    map((response) =>
    response.map((r) => ({
        ...r, 
        link: `/${r.id}`
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

export enum SortBy {
    TITLE, 
    NAME
};

export const sortListBy = (direction: SortBy) => {
    let value = rawData$.value; 
    if (direction === SortBy.TITLE){
        value.sort((a,b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1 );
    }
    if (direction === SortBy.NAME){
        value.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1 );
    }
    rawData$.next(value);
}

