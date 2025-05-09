'use client'

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ObjectId } from "mongodb";
import { motion, useScroll, useTransform } from "framer-motion";

type PostType = { _id: string; title: string; content: string; email: string; };

export default function ListItem({ posts }: { posts: PostType[] }) {

//     const [value, setValue] = useState<PostType[]>([posts[0]]);

//     const ref = useRef<HTMLDivElement>(null); // 감시할 영역

//     const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"], // 스크롤 어디서 시작하고 끝나는지
//     });

//   // 스크롤 비율에 따라 y 위치를 부드럽게 변경
//     const y = useTransform(scrollYProgress, [0, 1], ["-10px", "10px"]);

    return (
        <div className="gap-10 flex flex-col items-center justify-center">
            {posts.map((_, i) => {

const itemRef = useRef<HTMLDivElement>(null);

const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"],
});

const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

                return (
                    
                    <motion.div key={i} ref={itemRef}
                    style={{ y }}
                    // initial={{ opacity: 0, y: 30 }} // 처음엔 아래쪽에, 투명하게
                    // whileInView={{ opacity: 1, y: 0 }} // 스크롤 들어오면 부드럽게 위로
                    // transition={{ duration: 0.5, delay: i * 0.1 }} // 순서대로 딜레이
                    // viewport={{ once: true }} // 스크롤 한번만 작동
                    className="w-2xl block opacity-100 transition-all duration-300 bg-[#FFB6B9] rounded-lg p-20 mb-5 shadow text-xl font-extrabold text-center">
                        
                        {/* 글 제목 */}
                        <div className="cursor-pointer py-5 hover:text-[#FF7484] transition-all duration-300 border border-[#FF7484] rounded-2xl">
                            {/* posts[i]._id.toString() 해야될 수도 있음 */}
                            <Link prefetch={false} href={`/detail/${posts[i]._id}`}>
                                {posts[i].title}
                            </Link>
                        </div>

                        {/* 글 수정 버튼 */}
                        <div className="cursor-pointer py-5 hover:text-[#FF7484] transition-all duration-300">
                            {/* <ButtonLink/> -> 이건 안되고 */}
                            <Link prefetch={false}
                                href={`/update/${posts[i]._id}`}>
                                UPDATE
                            </Link>
                            {/* -> 이건 됨 당연한 거긴 함 update경로에 각 id마다 글을 불러와야되는데 ButtonLink에는 그 경로가 없음 만들어주면 되긴할텐데 귀찮음*/}
                        </div>

                        {/* 글 삭제 버튼 */}
                        {/* 원래 삭제도 수정이랑 똑같이 하면 되는데 Ajax써서해보기 */}
                        <div className="cursor-pointer py-5 hover:text-[#FF7484] transition-all duration-300" onClick={(e) => {
                                fetch("/api/delete", {
                                    method: "DELETE",
                                    body: JSON.stringify({
                                        _id: posts[i]._id,
                                        email: posts[i].email,
                                    }),
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                })
                                .then((res) => {
                                    if (res.status === 200) {
                                    const target = e.target as HTMLElement;
                                    if (target.parentElement) {
                                        target.parentElement.style.opacity = "0";
                                        setTimeout(() => {
                                            target.parentElement!.style.display = "none" }, 1000)
                                        // setTimeout(() => {
                                        //   location.reload(); // ✅ opacity 0 된 다음 reload
                                        //   //location이 뭔데
                                        // }, 300); // transition 시간 0.3초 기다림
                                    }
                                    } else {
                                    alert("삭제 권한 없음");
                                    }
                                })
                                .catch((err) => {
                                    console.error(err);
                                });
                            }}>
                            DELETE
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
