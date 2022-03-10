import { useColorMode, Switch, Flex, Button, IconButton} from '@chakra-ui/react';
import { useState } from 'react';
import { HamburgerIcon, CloseIcon, SearchIcon}  from '@chakra-ui/icons';
import { MdPlaylistPlay } from 'react-icons/md';
import { AiOutlineHome } from 'react-icons/ai';
import NextLink from 'next/link';

const HeaderView = () => {
    const {colorMode, toggleColorMode} = useColorMode();
    const isDark = colorMode === 'dark';
    const [display, changeDisplay] = useState('none');

    return (
        
        
        <Flex>
            <Flex
                pos="fixed"
                top="1rem"
                right="1rem"
                align="center"
            >
                <Flex
                    display={[
                        'none', 
                        'none', 
                        'flex', 
                        'flex'
                    ]}
                >

                    <NextLink href="/">
                        <Button
                            as="a"
                            variant="ghost"
                            aria-label="home page"
                            my={5}
                            w="100%"
                        >
                            Home 🏠
                        </Button>
                    </NextLink> 

                    <NextLink href="/search">
                    <Button
                            as="a"
                            variant="ghost"
                            aria-label="upload track page"
                            my={5}
                            w="100%"
                        >
                            Search 🔎
                        </Button>
                    </NextLink> 

                    <NextLink href="/play">
                    <Button
                            as="a"
                            variant="ghost"
                            aria-label="upload track page"
                            my={5}
                            w="100%"
                        >
                            Playlist 🎵
                        </Button>
                    </NextLink>

                </Flex>
                <IconButton
                    aria-label="Open menu"
                    size="lg"
                    mr={2}
                    mt={2}
                    icon={<HamburgerIcon/>}
                    display={[ 
                        'flex', 
                        'flex', 
                        'none', 
                        'none'
                    ]}
                    variant="ghost"
                    onClick={() => changeDisplay('flex')}
                />
            </Flex>
            
            <Flex
                w="100vw"
                bgColor="gray.50"
                zIndex={20}
                h="30vh"
                pos="fixed"
                top="0"
                left="0"
                overflowY="auto"
                flexDir="column"
                display={display}
            >
                <Flex justify="flex-end">
                    <IconButton
                        mt={2}
                        mr={2}
                        aria-label="Close menu"
                        size="lg"
                        icon={
                            <CloseIcon/>
                        }
                        variant="ghost"
                        onClick={() => changeDisplay('none')}
                    />
                </Flex>
            <Flex
                flexDir="column"
                align="center"
            >
                <NextLink href="/">
                        <Button
                            as="a"
                            variant="ghost"
                            aria-label="home page"
                            my={2}
                            w="100%"
                        >
                            Home 🏠
                        </Button>
                    </NextLink> 

                    <NextLink href="/search">
                    <Button
                            as="a"
                            variant="ghost"
                            aria-label="search track page"
                            my={2}
                            w="100%"
                        >
                            Search 🔎
                        </Button>
                    </NextLink> 

                    <NextLink href="/play">
                    <Button
                            as="a"
                            variant="ghost"
                            aria-label="play music page"
                            my={2}
                            w="100%"
                        >
                            Playlist 🎵
                        </Button>
                    </NextLink>
            </Flex>
            </Flex>
            
        </Flex>
    )
}

export default HeaderView;