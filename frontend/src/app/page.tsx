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

function isAuthenticated() {
    return true;
}
