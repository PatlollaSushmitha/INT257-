//************ Actions.js file will act as server Component */

// "use server"
// export async function greetUser(prevState, formData){
//     const name = formData.get("name");    //to get name from form data
//     return `Hello, ${name}`;

// }


// "use server"
// export async function login(prevState, formData){
//     const username = formData.get("username")         //to get username to form
//     const password = formData.get("password")
//     if(username === "admin" && password === "1234"){
//         return "Login Successfully!";
//     }
//     else{
//         return "Invalid username and password";
//     }
// }



// "use server";
// import fs from "fs/promises";
// import path from "path"
// export async function uploadFile(formData){
//     const file = formData.get("file");
//     const bytes = await file.arrayBuffer();
//     const buffer = Buffer.from(bytes);
//     const filePath = path.join("uploads", file.name);
//     await fs.writeFile(filePath, buffer);
//     return ("File uploaded Succesfully!");
// }


"use server"   //server component
import fs from "fs/promises"
import path from "path"    //path module
export async function uploadFile(prevState, formData){
    //prevState -  holding the value of current state
    //formData - holding the data entered by user in form
    const file = formData.get("file");    //"file" is used to get the file"
    
    //check if the file is selcted
    if(!file || file.size === 0)
    {
        return "Please select the File";
    }
    //Check filr size
    if(file.size > 2*1024*1024)         //1MB = 1024 KB 
    {
        return "File must be less than 2MB";
    }
    //check file type
    const allowTypes = [ "image/jpeg", "image/png", "application/pdf" ];
    if( !allowTypes.includes(file.type)){
        return "Only JPG, PNG and PDF Files are allowed";
    }
    //Path of existing upload folder
    const filePath = path.join(
        process.cwd(),       //current folder
        "uploads",
        file.name
    );
    //get files data
    const bytes = await file.arrayBuffer();
    //save the file
    await fs.writeFile(filePath, Buffer.from(bytes));
    return "File Uploaded Successfully!🎉"
}


//******************Question
//user shoukd appload file  and conditions are jpeg, jpg only , 
// size of file should not be less than 5MB and field should not be emtpy.
//************************* */

