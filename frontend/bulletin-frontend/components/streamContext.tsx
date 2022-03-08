import { createContext, useContext } from "react";
import { audioList$ } from "../utils/controller/ListStreamController";

const AudioListContext = createContext({
    audioList$,
});

export const useAudioList = () => useContext(AudioListContext);

export const AudioListProvider: React.FunctionComponent = ({ children }) => (
    <AudioListContext.Provider
        value={{
            audioList$,
        }}
    >
        {children}
    </AudioListContext.Provider>
);