import { NextResponse } from "next/server";
export async function POST(request){
    const {username} = await request.json();
    const responce = NextResponse.redirect(
        new URL("/", request.url),
        303
    );
    //ABC is the username which we have given in page.js
    responce.cookies.set("username", "", { 
        httpOnly: true,    //used for secure purpose, no third party can login
        path:"/",          //path is orgin path of cookie
        maxAge: 0
    });
    return responce;   
}