'use client'

import {useRouter} from "next/navigation";

export function FoodBar(){
    return (
        <>
            Food Bar
            {isStaffHighLevel() ? <ManageButton /> : <></>}
        </>
    )
}

export function isStaffHighLevel() {
    return true;
}

export function ManageButton() {
    const router = useRouter();

    return (
        <div>
           <button onClick={() => router.push('/manage')}>
               Manage
           </button>
        </div>
    )
}