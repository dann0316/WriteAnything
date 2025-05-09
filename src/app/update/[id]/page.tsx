import { MongoClient } from "mongodb";
import { connectDB } from "../../../../util/database";
import { ObjectId } from "mongodb";

export default async function Update(props: { params: { id: string } }) {
    const client = (await connectDB) as MongoClient;
    const db = client.db("forum");
    const posts = await db.collection("post").findOne({
        _id: new ObjectId(props.params.id),
    });
    console.log(posts?.title);

    return (
        <div className="gap-10 flex flex-col items-center justify-center pt-40">
            <div className="text-sm text-gray-500">Text Content Update</div>

            <div className="gap-10 flex flex-col items-center justify-center">
                <form action={`/api/post/update`} method="POST">
                    Title:{" "}
                    <input
                        type="text"
                        name="title"
                        defaultValue={posts?.title}
                        placeholder="제목"
                        required/>
                    Content:{" "}
                    <input
                        type="text"
                        name="content"
                        defaultValue={posts?.content}
                        placeholder="내용"
                        required/>
                    <input
                        name="_id"
                        defaultValue={posts?._id.toString()}
                        placeholder="내용"
                        readOnly/>
                    <button type="submit">수정하기</button>
                </form>
            </div>
        </div>
    );
}
