'use client'

import {useRouter} from "next/navigation";

export default function ManagePage() {
    const router = useRouter();
    return (
        <div>
            <h1>Manage Page</h1>
            <ul>
                <li>
                    <button onClick={() => router.push('/manage/staff')}>Manage Staff</button>
                </li>
                <li>
                    <button onClick={() => router.push('/manage/tables')}>Manage Tables</button>
                </li>
                <li>
                    <button onClick={() => router.push('/manage/menu')}>Manage Menu</button>
                </li>
            </ul>
        </div>
    );
}