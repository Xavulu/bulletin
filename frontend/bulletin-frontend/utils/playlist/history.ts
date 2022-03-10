export class History<T> {

    private entries: Map<string, T> = new Map<string, T>(); 
    private capacity: number = 5;

    get: Function = (key: string): T | undefined=> { 
        const keyExists: boolean = this.entries.has(key);
        let entry: T | undefined; 
        if (keyExists && entry !== undefined) {
            entry = this.entries.get(key); 
            this.entries.delete(key); 
            this.entries.set(key, entry!); 
        } else {
            return undefined;
        }
        return entry;
    }

    put: Function = (key: string, val: T) => { 
        if (this.entries.size >= this.capacity){
            const expired = this.entries.keys().next().value;
            this.entries.delete(expired);
        }
        this.entries.set(key, val);
    } 

    getHistory: Function = (): string[] => { 
        let hist: string[] = []; 
        this.entries.forEach((key, val) => {
            hist.push(val);
        }); 
        return hist;
    }


}

