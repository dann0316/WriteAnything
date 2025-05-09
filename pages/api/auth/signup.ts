import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../util/database";
import { MongoClient } from "mongodb";
import bcrypt from "bcrypt";

export default async function handler(req : NextApiRequest,res : NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).end(); // 405 Method Not Allowed
    } else {
        try {
            const hash = await bcrypt.hash(req.body.password, 10)
            console.log(hash);
            console.log(req.body);

            //비밀번호 암호화
            req.body.password = hash;
            const client = (await connectDB) as MongoClient;
            const db = client.db("forum");
            await db.collection("user").insertOne(req.body);
            return res.status(200).redirect('/list');
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ error: '서버 오류' });

        }
    }
}