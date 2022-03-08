import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { SearchView } from '../components/searchView';

const Home: NextPage = () => {
  return (
    <div>
      <SearchView/>
    </div>
  )
}

export default Home
