// import { cookies } from "next/headers";
// import {redirect} from "next/navigation";
// export default async function Dashboard(){
//     const cookiesStore = await cookies();
//     const username = cookiesStore.get("username")?.value;
//     if(!username){
//         redirect("/");
//     }
//     return(
//         <div>
//             <h1>Welcome, {username}</h1>
//             <form action="/api2/logout" method="POST">
//             <button type="submit">Logout</button>
//             </form>
//         </div>
//     )
// }


//Checking that user loged in or not
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Dashboard(){
    const router = useRouter();
    useEffect(()=> {
        //confirm is kind of poppup similarly like alert.
        const login = confirm("Are you logged in");
        if(!login){
            router.push("/login");
        }
    }, [router]);
    return <h1>Welcome to Dashboard</h1>;
}