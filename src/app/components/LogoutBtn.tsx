"use client";

import { signOut } from "next-auth/react";

export default function LogoutBtn() {
    return (
        <div
            onClick={async () => {
                const { signOut } = await import("next-auth/react");
                signOut();
            }}
            className="border border-[#FF7484] hover:bg-[#FF7484] transition-all duration-300 rounded-md px-5 py-3 cursor-pointer"
        >
            Logout
        </div>
    );
}