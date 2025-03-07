'use client'

import Roster from "@/app/manage/staff/roster";
import NewStaffModal from "@/app/manage/staff/newStaffModal";
import {NavBar} from "@/app/components/navbar/foodBar";
import ManageNav from "@/app/manage/ManageNav";
import {useState} from "react";

export default function ManagePage() {

    const [staff, setStaff] = useState([
        {name: "Milan Kovacs", role: "HIGH", rate: "23.45", hours: "40"},
        {name: "Johnny Bravo1", role: "HIGH", rate: "23.45", hours: "40"},
        {name: "Johnny Bravo2", role: "HIGH", rate: "23.45", hours: "40"},
        {name: "Johnny Bravo3", role: "HIGH", rate: "23.45", hours: "40"},
        {name: "Johnny Bravo4", role: "HIGH", rate: "23.45", hours: "40"},
        {name: "Johnny Bravo5", role: "HIGH", rate: "23.45", hours: "40"},
        {name: "Johnny Bravo6", role: "HIGH", rate: "23.45", hours: "40"},
        {name: "Johnny Bravo7", role: "HIGH", rate: "23.45", hours: "40"},
    ]);

    const addStaff = (newStaff: {name: string; role: string; rate: string; hours: string}) => {
        // @ts-ignore
        setStaff((prev) => [...prev, newStaff]);
    };

    const deleteStaff = (name: string) => {
        setStaff((prev) => prev.filter((staff) => staff.name !== name));
    };

    return (
        <>
            <NavBar/>
            <ManageNav/>
            <div className={"flex flex-col items-center"}>
                <h1 className={"text-lg font-bold"}>Manage Staff Page</h1>
                <div className={"mt-2"}>
                    <NewStaffModal addStaff={addStaff} />
                </div>
                <div className="p-5 w-full">
                    <Roster rows={staff} deleteStaff={deleteStaff}/>
                </div>
            </div>
        </>
    );
}