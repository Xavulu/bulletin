import { useRouter } from 'next/router';
import { SinglePostView } from '../../components/individualView';
import { useEffect } from 'react'; 
import { waker } from '../../utils/wake_up';
import { setGlobalState, useGlobalState } from '../../utils/global_state/global';

const SinglePostViewByID = () => {
    useEffect(() => {
        waker();
      }, [])

    const router = useRouter();
    const { queryStr } = router.query;
    let id = "";
    if (queryStr === undefined){
        return (
            <>
                <div>
                    bad
                </div>
            </>
        )
    } 

    if (Array.isArray(queryStr)){
        id = queryStr[0];
    } else {
        id = queryStr;
    } 

    return (
        <div>
            { id }
            <SinglePostView
                id={id}
            />
        </div>
    );
}

export default SinglePostViewByID;