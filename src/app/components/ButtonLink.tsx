"use client";

import { useRouter } from "next/navigation";

export default function ButtonLink() {
    const router = useRouter();

    return (
        <div className="flex justify-start gap-5">
            <button className="border-1 rounded-md px-5 py-3 cursor-pointer " onClick={() => router.push("/update")}>수정</button>
            <button className="border-1 rounded-md px-5 py-3 cursor-pointer" onClick={() => router.push("/update")}>삭제</button>
        </div>
    );
}
