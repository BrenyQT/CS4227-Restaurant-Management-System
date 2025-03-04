'use client'

import {NavBar} from "@/app/components/navbar/foodBar";
import {ManageNav} from "@/app/components/manageNav/ManageNav";

export default function ManagePage() {
    return (
        <div>
            <NavBar />
            <ManageNav />
        </div>
    );
}