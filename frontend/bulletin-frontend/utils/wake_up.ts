/*
    this is heroku specfic and can be 
    ignored completely for local running 

    heroku instances go to sleep after some time
    which makes functions time out while they wait for
    the instance to wake up

    this is just to wake up the instance every now and then

*/
import ky from 'ky';
import useSWR, { mutate } from "swr";

const endpoint = "https://onramp-bulletin.herokuapp.com/api/ping";

const fetcher = async (url=endpoint) => {
    await ky.get(url)
        .then(res => {
            console.log("successful ping");
        })
        .catch(error => {
            console.log("failed to ping:\n"); 
            console.log(error);
        })
}

export const waker = async () => {
    await fetcher(endpoint);
};
