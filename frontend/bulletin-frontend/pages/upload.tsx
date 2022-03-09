import PostFormView from "../components/uploadPostView";
import { waker } from '../utils/wake_up';
import { useEffect } from 'react'; 

const UploadAudioView = () => {
    useEffect(() => {
        waker();
      }, [])
    return (
        <>
            <div>
                <PostFormView/>
            </div>
        </>
    );
}

export default UploadAudioView;