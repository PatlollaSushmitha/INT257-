import { NextResponse } from "next/server";
export async function POST(request){
    const {username} = await request.json();
    const responce = NextResponse.json({
        message: "Login Successful"
    });
    responce.cookies.set("username", username, { 
        httpOnly: true,    //used for secure purpose, no third party can login
        path:"/",          //path is orgin path of cookie
        maxAge: 60*60
    });
    return responce;   
}


