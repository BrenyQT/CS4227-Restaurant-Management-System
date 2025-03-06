import {useRouter} from "next/navigation";
import {Button} from "@mui/material";

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