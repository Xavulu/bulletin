import { useRouter } from 'next/router';
import NotFound from '../../components/fourohfour';
import { SinglePostView } from '../../components/individualView';
import HeaderView from '../../components/headerView';
import { VStack , Box} from '@chakra-ui/react';

const SinglePostViewByID = () => {
    const router = useRouter();
    const { queryStr } = router.query;
    let id = "";
    if (queryStr === undefined){
        return (
            <NotFound/>
        )
    } 

    if (Array.isArray(queryStr)){
        id = queryStr[0];
    } else {
        id = queryStr;
    } 
    return (
        <>
           
            <HeaderView 
            
            />
            
        
        
        <SinglePostView 
            id={id}
        />
       
        </>
    );
}

export default SinglePostViewByID;