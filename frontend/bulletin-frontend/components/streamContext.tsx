import { createContext, useContext } from "react";
import { audioList$, audioListByTitle$ } from "../utils/controller/ListStreamController";

const AudioListContext = createContext({
    audioList$,
    audioListByTitle$
});

export const useAudioList = () => useContext(AudioListContext);

export const AudioListProvider: React.FunctionComponent = ({ children }) => (
    <AudioListContext.Provider
        value={{
            audioList$,
            audioListByTitle$
        }}
    >
        {children}
    </AudioListContext.Provider>
);