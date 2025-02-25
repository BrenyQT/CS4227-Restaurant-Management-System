'use client'

import {useRouter} from "next/navigation";
import Roster from "@/app/manage/staff/roster";
import NewStaffModal from "@/app/manage/staff/newStaffModal";

export default function ManagePage() {
    const router = useRouter();
    return (
        <div>
            <h1>Hello Staff</h1>
            <NewStaffModal/>
            <div className="p-5">
                <Roster/>
            </div>
        </div>
    );
}