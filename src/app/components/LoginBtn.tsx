"use client";

export default function LoginBtn() {
    return (
        <div
            onClick={async () => {
                const { signIn } = await import("next-auth/react");
                signIn();
            }}
            className="border border-[#FF7484] hover:bg-[#FF7484] transition-all duration-300 rounded-md px-5 py-3 cursor-pointer"
        >
            Login
        </div>
    );
}
