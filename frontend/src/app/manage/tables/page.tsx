'use client'

import {useRouter} from "next/navigation";
import {NavBar} from "@/app/components/navbar/foodBar";
import {ManageNav} from "@/app/manage/page";
import {useState} from "react";
import {Button} from "@mui/material";
import {motion} from "framer-motion";

export default function ManageTables() {
    const router = useRouter();
    return (
        <div>
            <NavBar/>
            <ManageNav/>

            <TableLayout/>

        </div>
    );
}

export function TableLayout() {
    const [tables, setTables] = useState([]);
    const [tableId, setTableId] = useState(1);

    const handleAddTable = (e: any) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const newTable = {
            id: tableId,
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
        setTableId(tableId + 1);
        // @ts-ignore
        setTables([...tables, newTable]);
    };

    const handleDeleteTable = (id: number) => {
        // @ts-ignore
        setTables(tables.filter((table) => table.id !== id));
    }

    return (
        <div className={"h-screen"}>
            <div className={"flex"}>

                <Button variant="outlined" className="" onClick={() => setTables([])}>Reset</Button>
                <div className={"flex flex-row items-center"}>
                    <div>Table Id:</div>
                    <input type="number" className={"text-black"} value={tableId} onChange={(e) => {
                        setTableId(Number(e.target.value))
                    }}></input>
                </div>
            </div>

            <div className="relative w-full h-3/4 bg-gray-100" onClick={handleAddTable}>
                {tables.map((table) => (
                    // @ts-ignore
                    <motion.div key={table.id} style={{top: table.y - 24, left: table.x - 24}}
                                className="absolute w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg"
                                initial={{scale: 0}}
                                animate={{scale: 1}}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    // @ts-ignore
                                    handleDeleteTable(table.id);
                                }}
                    >
                        {/*@ts-ignore*/}
                        {table.id}
                    </motion.div>
                ))}
            </div>
        </div>

    );
}