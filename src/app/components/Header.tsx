import { getServerSession } from "next-auth";
import { authOptions } from "../../../pages/api/auth/[...nextauth]";
import Link from "next/link";
import LoginBtn from "./LoginBtn";
import logo from "../../../public/logo.png";
import LogoutBtn from "./LogoutBtn";

export default async function Header() {
    const session = await getServerSession(authOptions);
    console.log(session);

    return (
        <header className="fixed bg-[#ffb6b9] p-10 w-full flex items-center justify-center font-bold shadow-md z-10 text-[#333333] text-xl">
            <div className="w-4xl flex items-center justify-between z-10">
                <div className="flex items-center justify-start gap-8 font-bold">
                    <Link href="/">
                        <img src={logo.src} alt="" width={120} />
                    </Link>
                    <Link
                        href="/list"
                        className="border border-[#FF7484] hover:bg-[#FF7484] transition-all duration-300 rounded-md px-5 py-3 cursor-pointer"
                    >
                        List
                    </Link>
                    <Link
                        href="/write"
                        className="border border-[#FF7484] hover:bg-[#FF7484] transition-all duration-300 rounded-md px-5 py-3 cursor-pointer"
                    >
                        Write
                    </Link>
                </div>

                <div className="flex flex-row items-center justify-end gap-8 font-bold">
                    {session?.user ? (
                        <>
                            <div>Hello! {session.user.name}</div>
                            <LogoutBtn />
                        </>
                    ) : (
                        <>
                            <div>Please Login!</div>
                            <Link
                                href="/register"
                                className="border border-[#FF7484] hover:bg-[#FF7484] transition-all duration-300 rounded-md px-5 py-3 cursor-pointer"
                            >
                                Register
                            </Link>
                            <LoginBtn />
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
