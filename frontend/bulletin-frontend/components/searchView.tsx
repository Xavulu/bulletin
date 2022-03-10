import { useObservableState } from 'observable-hooks';
import { BehaviorSubject, combineLatestWith, map } from 'rxjs'; 
import { useMemo, useState } from 'react'; 
import { useAudioList } from './streamContext';
import { SortOrder, sortListStreamController } from '../utils/controller/ListStreamController';
import PostCard from "./PostCard"
import { 
    Input, 
    Center, 
    VStack,  
    StackDivider, 
    Box, 
    InputRightAddon, 
    InputGroup, 
    SimpleGrid, 
    Flex, 
    Button, 
    Menu,
    MenuButton,
    MenuList,
    MenuItem,

} from '@chakra-ui/react';
import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons'
import useSwr, { mutate } from 'swr';
import { globalRefreshController, listEndPoint } from '../utils/controller/ListStreamController';




export const SearchView = () => {

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

    const { audioList$ } = useAudioList();
    const searchBar$ = useMemo(() => new BehaviorSubject(""), []); 
    const [ active, setActive ] = useState('1');
    
    const byName = () =>{
        sortListStreamController(SortOrder.NAME);
    }

    const byTitle = () =>{
        sortListStreamController(SortOrder.TITLE);
    }

    const [filteredAudioPosts] = useObservableState(
        () => 
            audioList$.pipe(
                combineLatestWith(searchBar$), 
                map(([audio, search]) => 
                    audio.filter((a) => 
                        a.name.toLowerCase().includes(search.toLowerCase())
                    )
                )
            ), 
        []
    );

    return (
        <>
            <Flex 
                flexDir="column" 
                maxWidth="md"
                align="center"
                justify="center"
                m="auto"
                px={4}
                minH="100vh"
            >
            <Box
                p={8} 
                borderWidth={1} 
                borderRadius={6} 
                boxShadow="md"
            >
                 <VStack
                    divider={<StackDivider borderColor="gray.200"/>}
                    spacing={4}
                    align="stretch"
                 >
                <Box>
                    <Center>
                        <VStack>
                        <Box>
                        <InputGroup>
                            <Input
                                type="text"
                                value={searchBar$.value}
                                onChange={(val) => searchBar$.next(val.target.value)}
                                placeholder="search by name..."
                                _placeholder={ { color: "pink.300" } } 
                                focusBorderColor="pink.300"
                                maxWidth="md"
                                minWidth="xs"
                                borderWidth={2}
                            />
                            <InputRightAddon>
                                <SearchIcon color="gray.300"/>
                            </InputRightAddon>
                        </InputGroup> 
                        </Box>
                        <Box>
                                <Menu>
                                    <MenuButton as={Button} variant="ghost">
                                        sort <ChevronDownIcon />
                                    </MenuButton>
                                    <MenuList>
                                        <Button variant="ghost" onClick={() => byName()}>
                                            <MenuItem>by name</MenuItem>
                                        </Button> 
                                        <Button variant="ghost" onClick={() => byTitle()}>
                                            <MenuItem>by title</MenuItem>
                                        </Button>
                                    </MenuList>
                                </Menu>
                        </Box>
                        </VStack>
                    </Center>
                </Box>
                <Box 
                    overflowY="auto"
                    maxHeight="300px"
                    minHeight="300px"
                    maxWidth="700px"
                    w={[400,500,700]}
                    css={{
                        '&::-webkit-scrollbar': {
                          width: '4px',
                        },
                        '&::-webkit-scrollbar-track': {
                          width: '2px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                          background: "pink-500",
                          borderRadius: '24px',
                        },
                    }}

                >
                    <SimpleGrid 
                        columns={[1,1,1]}
                        spacing="20px"
                        
                    >
                        
                        {filteredAudioPosts.map((post) => (
                        <div key={post.shortid}>
                            <PostCard
                                post={post}
                            />
                        </div>
                        ))}
                    </SimpleGrid>
                </Box>
                </VStack>
                </Box>
            </Flex>
        </>
    );
}
