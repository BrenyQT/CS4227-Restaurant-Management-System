'use client'

import {useRouter} from "next/navigation";
import Roster from "@/app/manage/staff/roster";
import NewStaffModal from "@/app/manage/staff/newStaffModal";
import {ManageButton, NavBar} from "@/app/components/navbar/foodBar";
import {ManageNav} from "@/app/manage/page";

export default function ManagePage() {
    const router = useRouter();
    return (
        <>
            <NavBar/>
            <ManageNav/>
            <div className={"flex flex-col items-center"}>
                <h1 className={"text-lg font-bold"}>Manage Staff Page</h1>
                <div className={"mt-2"}>
                    <NewStaffModal/>
                </div>
                <div className="p-5 w-full">
                    <Roster/>
                </div>
            </div>
        </>
    );
}