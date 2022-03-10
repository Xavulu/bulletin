import { setGlobalState, useGlobalState } from '../../utils/global_state/global'
import { SortOrder } from '../../utils/controller/ListStreamController';
import { PlayList } from '../../utils/playlist/circular_playlist';


const PlayListViewIndex = () => {
    const [playlist, setPlaylist] = useGlobalState("playlist"); 
    
    const sortByName = () => {
        playlist.SortBy(SortOrder.NAME); 
        setPlaylist(playlist); 
    }

    const sortByTitle = () => {
        playlist.SortBy(SortOrder.TITLE); 
        setPlaylist(playlist); 
    }

    const history = playlist.history(); 

    const lastPlayed = playlist.lastPlayed();

    const firstTrack = playlist.getFirst();

    



    return (
        <>
            <div>

            </div>
        </>
    )
}

export default PlayListViewIndex;