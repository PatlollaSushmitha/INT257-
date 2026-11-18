"use client";
import { useRouter } from "next/navigation";
export default function Welcome(){
    const router = useRouter();
    function logout()
    {
        router.push("/");
    }
    return(
        <div>
            <h1>Welcome!</h1>
            <p>You are Successfully Logged in🎉</p>
            <button onClick={logout}>Logout</button>
        </div>
    )
}