import PostFormView from "../components/uploadPostView";
import UploadModal from "../components/uploadPostModal";
import { waker } from '../utils/wake_up';
import { useEffect } from 'react'; 

const UploadAudioView = () => {
    useEffect(() => {
        waker();
      }, [])
    return (
        <>
            <div>
                <UploadModal/>
            </div>
        </>
    );
}

export default UploadAudioView;