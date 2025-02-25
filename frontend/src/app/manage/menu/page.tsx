'use client'

import {useRouter} from "next/navigation";
import MenuTable from "@/app/manage/menu/menu";
import NewFoodModal from "@/app/manage/menu/newFoodModal";

export default function ManagePage() {
    const router = useRouter();

    return (
        <div>
            <h1>Hello Menu</h1>
            <NewFoodModal />
            <MenuTable />
        </div>
    );
}