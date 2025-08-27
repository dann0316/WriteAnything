"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Write() {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");

    // const session = await getServerSession(authOptions);

    // if (!session) {
    //     redirect('/list'); // 로그인 페이지로 이동
    // }
    // //<Write> is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.

    const router = useRouter();
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            alert("로그인 후 이용해주세요!");
            router.push("/");
        }
    }, [status, router]);

    if (status === "loading") return <div>로딩중...</div>;

    if (!session) return null; // useEffect에서 push한 상태니까 여기선 그냥 null

    return (
        <div>
            {/* <h4>글쓰기</h4>
            <form action="/api/test" method="POST">
                <input type="text" name="title" placeholder="제목" />
                <input type="text" name="content" placeholder="내용" />
                <button type="submit">저장</button>
            </form>

            
            <form action="/api/list" method="GET">
                <button type="submit">콘솔에 데이터 보여주기</button>
            </form>

            
            <form action="/api/time" method="GET">
                <button type="submit">현재시간 보여주기</button>
            </form> */}

            <h4 className="p-40">글 발행</h4>
            <form
                action="/api/post/write"
                method="POST"
                // onSubmit={(e) => {
                //     e.preventDefault();
                //     const formData = new FormData(e.target as HTMLFormElement);
                //     const data = {
                //         title: formData.get("title"),
                //         content: formData.get("content"),
                //     };
                //     fetch("/api/write", {
                //         method: "POST",
                //         headers: { "Content-Type": "application/json" },
                //         body: JSON.stringify(data),
                //     }).then(() => {
                //         alert("글 발행됨");
                //     });
                // }}
            >
                title: <input type="text" name="title" required />
                content: <input type="text" name="content" required />
                <button type="submit">글발행하기</button>
            </form>
        </div>
    );
}
