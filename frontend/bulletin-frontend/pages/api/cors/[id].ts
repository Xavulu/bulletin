import { NextApiRequest, NextApiResponse } from 'next'; 
import fetch from 'isomorphic-unfetch';

export const CORS = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const  { url }: any  = req.query.cors; 
    try { 
        const proxy = await fetch(url); 
    } catch (error: any) {
        res.status(400).send(error.toString());
    }
}


