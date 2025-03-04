'use client'
import {NavBar} from "@/app/components/navbar/foodBar";

import TableLayout from "@/app/manage/tables/TableLayout";
import ManageNav from "@/app/manage/ManageNav";

export default function ManageTables() {
    return (
        <div>
            <NavBar/>
            <ManageNav/>
            <TableLayout/>
        </div>
    );
}

