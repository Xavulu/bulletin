import { useRouter } from 'next/router'; 

const singlePostView = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            { id }
        </div>
    );
}

export default singlePostView;