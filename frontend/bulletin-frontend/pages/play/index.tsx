import { setGlobalState, useGlobalState } from '../../utils/global_state/global'
import { SortOrder } from '../../utils/controller/ListStreamController';


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


    return (
        <>
            <div>

            </div>
        </>
    )
}

export default PlayListViewIndex;