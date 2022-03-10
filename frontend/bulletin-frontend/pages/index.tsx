import type { NextPage } from 'next';
import { waker } from '../utils/wake_up';
import { useEffect } from 'react'; 
import HeaderView from '../components/headerView';

const Home: NextPage = () => {
    useEffect(() => {
      waker();
    }, [])
  return (
    <div>
      <HeaderView/>
      
    </div>
  )
}

export default Home
