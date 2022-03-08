import { useRouter } from 'next/router';
import { SinglePostView } from '../components/individualView';

const SinglePostViewByID = () => {
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