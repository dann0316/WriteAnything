import { MongoClient } from "mongodb";
import { connectDB } from "../../../../utils/database";
import { ObjectId } from "mongodb";

export default async function Detail(props: { params: { id: string } }) {
    const client = (await connectDB) as MongoClient;
    const db = client.db("forum");
    const posts = await db.collection("post").findOne({
        _id: new ObjectId(props.params.id),
    });
    console.log(props);
    console.log(props.params);
    console.log(props.params.id)

    return (
        <div className="gap-10 flex flex-col items-center justify-center pt-40 ">
            <div className="text-5xl text-gray-500">
                Text Content
            </div>
            <div className="text-3xl font-bold text-primary">
                Title: {posts?.title}
            </div>
            <div className="text-2xl text-gray-700">
                Content: {posts?.content}
            </div>
            <div className="text-2xl text-gray-700">
                Author: {posts?.email}
            </div>
            <div className="text-2xl text-gray-700">
                Date: {posts?.date.toString()}
            </div>
        </div>
    );
}
