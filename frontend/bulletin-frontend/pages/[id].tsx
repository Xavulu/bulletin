import { useRouter } from 'next/router'; 

const SinglePostView = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            { id }
        </div>
    );
}

export default SinglePostView;