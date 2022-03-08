import { useObservableState } from 'observable-hooks';
import { BehaviorSubject, combineLatestWith, map } from 'rxjs'; 
import { useMemo, useState } from 'react'; 
import { useAudioList } from './streamContext';

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
        <div>
            <input
                type="text"
                value={searchBar$.value}
                onChange={(val) => searchBar$.next(val.target.value)}
            />
            <div>
                {filteredAudioPosts.map((post) => (
                    <div key={post.name}>
                        {post.name}
                    </div>
                ))}
            </div>

            
        </div>
    );
}
