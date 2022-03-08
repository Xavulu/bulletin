import ky from "ky";
import { Ok, Err, Result, Option } from "ts-results"; 
import { refreshAfterVote } from "./ListStreamController";

export enum Direction {
    UP = 1, 
    DOWN = -1,
}

const voter = async (
    id: string, 
    direction: Direction): Promise<Result<number, Error>> => {
        let code: number = 200; 
        if (direction === Direction.UP){
            try {
                await ky.patch(`https://onramp-bulletin.herokuapp.com/api/upvote/${id}`)
            } catch (e){
                console.log("failed to upvote:\n"); 
                console.log(e);
                return new Err(new Error("failed to upvote post"));
            }
        }
        if (direction === Direction.DOWN){
            try {
                await ky.patch(`https://onramp-bulletin.herokuapp.com/api/downvote/${id}`)
            } catch (e){
                console.log("failed to downvote:\n"); 
                console.log(e);
                return new Err(new Error("failed to downvote post"));
            }
        }
        return Ok(code);
    }

export const voteForPostController = async (
    id: string, 
    direction: Direction): Promise<Result<boolean, Error>> => {
        const res = await voter(id, direction); 
        if (res.err){
            return new Err(new Error(res.val.message));
        }
        refreshAfterVote()
        return Ok(true);
}


