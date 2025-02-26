'use client'

import {useRouter} from "next/navigation";
import {NavBar} from "@/app/components/navbar/foodBar";
import {Button} from "@mui/material";

export default function ManagePage() {
    return (
        <div>
            <NavBar />
            <ManageNav />
        </div>
    );
}

export function ManageNav() {
    const router = useRouter();

    return (
        <>
            <div className={"flex flex-row justify-between p-3 bg-orange-300"}>

                <Button variant="contained" onClick={() => router.push('/manage/staff')}>Manage Staff</Button>
                <Button variant="contained" onClick={() => router.push('/manage/tables')}>Manage Tables</Button>
                <Button variant="contained" onClick={() => router.push('/manage/menu')}>Manage Menu</Button>
            </div>

        </>
    )
}