import { BehaviorSubject, map, combineLatestWith } from "rxjs";
import { nanoid } from "nanoid";
import AudioResponse from "../model_helpers/audio_response";

const rawData$ = new BehaviorSubject<AudioResponse[]>([]);

export const audioList$ = rawData$.pipe(
    map((response) =>
    response.map((r) => ({
        ...r,
        power: nanoid(10)
    }))
    )
);

fetch("https://onramp-bulletin.herokuapp.com/api/listall", {
    method: 'GET',
    }).then(response => response.json())
    .then((data: AudioResponse[]) => rawData$.next(data));

export const updateList = (audio: AudioResponse): boolean => {
    let value = rawData$.value;
    let audios = [...value, audio];
    rawData$.next(audios); 
    return true;
}

