import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { SearchView } from '../components/searchView';
import { waker } from '../utils/wake_up';
import { useEffect } from 'react'; 
import HeaderView from '../components/headerView';

const Home: NextPage = () => {
    useEffect(() => {
      waker();
    }, [])
  return (
    <div>
      
      <SearchView/>
    </div>
  )
}

export default Home
