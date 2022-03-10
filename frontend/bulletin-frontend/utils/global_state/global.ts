import { createGlobalState } from "react-hooks-global-state";
import { PlaylistController } from "../controller/ListStreamController";
import { PlayList } from "../playlist/circular_playlist";


const playlist: PlayList = PlaylistController();

const { setGlobalState, useGlobalState } = createGlobalState({
    language: 'en',
    playlist: playlist,
});

const langmap ={
    'fr' : 'French', 
    'ar' : 'Arabic', 
    'es' : 'Spanish',
    'en' : 'English',
    'zh' : 'Chinese',
};


export { setGlobalState, useGlobalState, langmap };