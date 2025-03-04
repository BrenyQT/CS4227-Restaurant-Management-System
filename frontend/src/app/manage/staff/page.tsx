'use client'

import Roster from "@/app/manage/staff/roster";
import NewStaffModal from "@/app/manage/staff/newStaffModal";
import {NavBar} from "@/app/components/navbar/foodBar";
import ManageNav from "@/app/manage/ManageNav";

export default function ManagePage() {
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