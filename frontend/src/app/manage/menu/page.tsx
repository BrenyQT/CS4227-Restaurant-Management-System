'use client'

import {useRouter} from "next/navigation";
import MenuTable from "@/app/manage/menu/menu";
import NewFoodModal from "@/app/manage/menu/newFoodModal";
import {NavBar} from "@/app/components/navbar/foodBar";
import {ManageNav} from "@/app/manage/page";

export default function ManagePage() {
    const router = useRouter();

    return (
        <div>
            <NavBar />
            <ManageNav/>

            <h1>Hello Menu</h1>
            <NewFoodModal />
            <MenuTable />
        </div>
    );
}