import { BehaviorSubject, map, combineLatestWith } from "rxjs";
import AudioResponse from "../model_helpers/audio_response";

const rawData$ = new BehaviorSubject<AudioResponse[]>([]);

export const audioList$ = rawData$.pipe(
    map((response) =>
    response.map((r) => ({
        ...r, 
        link: `/${r.id}`
    }))
    )
);

fetch("/api/cors?url=https://onramp-bulletin.herokuapp.com/api/listall", {
    method: 'GET',
    }).then(response => response.json())
    .then((data: AudioResponse[]) => rawData$.next(data));

export const refreshAfterVote = async () => {
    await fetch("/api/cors?url=https://onramp-bulletin.herokuapp.com/api/listall", {
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

