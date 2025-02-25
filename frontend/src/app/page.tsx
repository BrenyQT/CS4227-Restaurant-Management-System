import Image from "next/image";
import {MenuPage} from "@/app/components/menu/menu";

export default function Home() {
    return (
        <>
            {
                isAuthenticated() ? (
                    <MenuPage />
                ) : (
                    <></>
                )
            }
        </>
    );
}

export function isAuthenticated() {
    return true;
}
