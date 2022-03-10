import { useObservableState } from 'observable-hooks';
import { BehaviorSubject, combineLatestWith, map } from 'rxjs'; 
import { useMemo, useState } from 'react'; 
import { useAudioList } from './streamContext';
import PostCard from "./PostCard"
import { 
    Input, 
    Center, 
    VStack, 
    StackDivider, 
    Box, 
    InputLeftAddon, 
    InputGroup, 
    SimpleGrid, 
    Flex
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons'




export const SearchView = () => {
    const { audioList$ } = useAudioList();
    const searchBar$ = useMemo(() => new BehaviorSubject(""), []); 

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
                 <VStack
                    divider={<StackDivider borderColor="gray.200"/>}
                    spacing={4}
                    align="stretch"
                 >
                <Box>
                    <Center>
                        <InputGroup>
                            <InputLeftAddon>
                                <SearchIcon color="gray.300"/>
                            </InputLeftAddon>
                            <Input
                                type="text"
                                value={searchBar$.value}
                                onChange={(val) => searchBar$.next(val.target.value)}
                                placeholder="search by name..."
                                _placeholder={ { color: "pink.300" } } 
                                focusBorderColor="pink.300"
                                maxWidth="md"
                                minWidth="xs"
                            />
                        </InputGroup>
                    </Center>
                </Box>
                <Box 
                    overflowY="auto"
                    maxHeight="300px"
                    minHeight="300px"
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
                        columns={[1,null,2]}
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
            </Flex>
        </>
    );
}
