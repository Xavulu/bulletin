import { AudioResponse } from '../model_helpers/audio_response';
import { SortOrder } from '../controller/ListStreamController';
import { History } from './history';


export class PlayList{
    public tracks: AudioResponse[];
    private _size: number;
    private _id_to_index: Map<string, number>;
    private _index_to_id: Map<number, string>;
    private _history: History<AudioResponse> = new History();
    
    constructor(tracks: AudioResponse[]){
        this.tracks = tracks;
        this._size = tracks.length;
        this._id_to_index = new Map<string, number>();
        this._index_to_id = new Map<number, string>();
        this.tracks.forEach((track, index) => {
            this._id_to_index.set(track.id, index);
            this._index_to_id.set(index, track.id);
        });
    }

    isEmpty: Function = ():  boolean => {
        return this._size > 1;
    }

    getFirst: Function = (): AudioResponse => {
        return this.tracks[0];
    }

    getNext: Function = (id: string): string | undefined => {
        const index: number | undefined = this._id_to_index.get(id);
        let res: string | undefined = "";
        if (index === undefined) {
            return undefined;
        }
        if (index === this._size - 1){
            res = this._index_to_id.get(0);
        } else {
            res = this._index_to_id.get(index + 1)
        }
        this._history.put(id, this.getEntry(id)!);
        return res;
    } 

    getPrev: Function = (id: string): string | undefined => {
        const index: number | undefined = this._id_to_index.get(id);
        let res: string | undefined = "";
        if (index === undefined) {
            return undefined;
        }
        if (index - 1 < 0){
            res = this._index_to_id.get(this._size - 1);
        } else {
            res = this._index_to_id.get(index - 1);
        }
        this._history.put(id, this.getEntry(id)!);
        return res;
    }

    getEntry: Function = (id: string): AudioResponse | undefined => {
        this.tracks.forEach(track => {
            if (track.id === id){
                return track;
            }
        })
        return undefined
    }

    SortBy: Function = (direction: SortOrder) => {
        if (direction === SortOrder.TITLE){
            this.tracks.sort((a,b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1 );
        }
        if (direction === SortOrder.NAME){
            this.tracks.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1 );
        }
        this.tracks.forEach((track, index) => {
            this._id_to_index.set(track.id, index);
            this._index_to_id.set(index, track.id);
        });
    } 

    history: Function = (): string[] => {
        const val: string[] = this._history.getHistory();
        return val;
    }

    lastPlayed: Function = (): string => {
        const val: string[] = this._history.getHistory();
        return val[val.length - 1];
    }

}

