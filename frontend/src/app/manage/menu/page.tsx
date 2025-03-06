'use client'

import MenuTable from "@/app/manage/menu/menu";
import NewFoodModal from "@/app/manage/menu/newFoodModal";
import {NavBar} from "@/app/components/navbar/foodBar";
import ManageNav from "@/app/manage/page";
import {useState} from "react";

export default function ManagePage() {
    const [menuItems, setMenuItems] = useState([
        {name: "Pizza", img: null, price: "12.49", cost: "2.35", quantity: "40"},
        {name: "Burger", img: null, price: "12.49", cost: "2.35", quantity: "40"},
        {name: "Fish and Chips", img: null, price: "12.49", cost: "2.35", quantity: "40"},
    ]);

    const addFood = (newFood: {name: string; img: string | null; price: string; cost: string; quantity: string}) => {
        // @ts-ignore
        setMenuItems((prev) => [...prev, newFood]);
    };

    const onDeleteFood = (name: string) => {
        setMenuItems((prev) => prev.filter((item) => item.name !== name));
    }

    return (
        <div>
            <NavBar />
            <ManageNav/>
            <NewFoodModal addFood={addFood  } />
            <MenuTable rows={menuItems} handleOnDelete={onDeleteFood}/>
        </div>
    );
}