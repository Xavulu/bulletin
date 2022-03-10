import type { NextPage } from 'next';
import { waker } from '../utils/wake_up';
import { useEffect } from 'react'; 
import HeaderView from '../components/headerView';
import Hero from '../components/heroView';
import { 
  Flex, 
  Text, 
  Stack, 
  Link, 
  List, 
  ListItem ,
  ListIcon
} from '@chakra-ui/react'
import {LinkIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import  UploadModal  from '../components/uploadPostModal';
import useSwr, { mutate } from 'swr';
import { globalRefreshController, listEndPoint } from '../utils/controller/ListStreamController';
import { setGlobalState, useGlobalState } from '../utils/global_state/global';
import { PlaylistController, getFirst } from '../utils/controller/ListStreamController';
import { PlayList } from '../utils/playlist/circular_playlist';


const Home: NextPage = () => {
    useEffect(() => {
      waker();
    }, [])

    const { data, error } = useSwr(
      listEndPoint, 
      globalRefreshController,
      {
        revalidateOnReconnect: true,
        refreshWhenOffline: false, 
        errorRetryInterval: 6000, 
        errorRetryCount: 10, 
        refreshInterval: 180000 * 6,
      }
    );
    if (!data || error) {
      console.log('controller failed to rehydrate data');
    };

    const playlist = getFirst();

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      height="100vh"

    >
      <HeaderView/>
      <Hero/>
      <Stack>
      
      <Text>
        a public audio repository
      </Text>
      <List spacing={3} my={0}>
          <ListItem>
              <ListIcon
                as={ArrowForwardIcon}
                color="pink.300"
              />
              <Link 
                aria-label='link to playlist search page'
                href="/search"
                flexGrow={1}
                mr={2}
              >
                Search the playlist <LinkIcon/>
              </Link>
          </ListItem>
          <ListItem>
              <ListIcon
                as={ArrowForwardIcon}
                color="pink.300"
              />
              <Link 
                aria-label="link to the playlist"
                href={ playlist }
                flexGrow={1}
                mr={2}
                >
                  Listen to the playlist <LinkIcon/>
                </Link>
          </ListItem> 
          <ListItem>
              <ListIcon
                as={ArrowForwardIcon}
                color="pink.300"
              />
              <UploadModal/>
          </ListItem>
      </List>
      </Stack>

      <Flex as="footer" py="8rem">
        
      </Flex>


    </Flex>
  )
}

export default Home
