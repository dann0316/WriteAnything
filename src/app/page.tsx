import bgImg from "../../public/bgImg.png";

export default async function Home() {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div>
                <img src={bgImg.src} alt="" width={500}/>
            </div>
            <h1 className="text-4xl font-bold">Welcome to the Forum</h1>
            <p className="mt-4 text-lg">This is a simple forum application built with Next.js and MongoDB.</p>
            <p className="mt-2 text-lg">Feel free to explore and share your thoughts!</p>
        </div>
    );
}
