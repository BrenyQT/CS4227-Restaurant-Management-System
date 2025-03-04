'use client'

import {NavBar} from "@/app/components/navbar/foodBar";
import ManageNav from "@/app/manage/ManageNav";

export default function ManagePage() {
    return (
        <div>
            <NavBar />
            <ManageNav />
        </div>
    );
}

