import { NextApiRequest, NextApiResponse } from "next";

export default function handler (req : NextApiRequest,res : NextApiResponse) {
    const date = new Date();
    const time = date.toLocaleTimeString('ko-KR', {
        hour: '2-digit', minute: '2-digit', second: '2-digit'
    });

    if(req.method === 'GET') {
        return res.status(200).json('time: ' + time)
    }
} 