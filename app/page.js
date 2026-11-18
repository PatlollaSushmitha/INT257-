// Server Site rendering 
// export default async function Home()
// {
//   const response = await fetch(
//     "https://jsonplaceholder.typicode.com/users",
//     {
//       cache:"no-store"
//     }
//   );
// const students = await response.json();
// return(
//   <main className="min-h-screen bg-gray-100 p-8">
//       <h1 className="w-full bg-black text-center text-3xl font-bold mb-8">
//         Student Profiles
//       </h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//   {students.map((student) => (
//     <div
//       key={student.id}
//       className="bg-blue-300 p-6 rounded-xl shadow-md">
//       <h2 className="text-xl font-semibold">{student.name}</h2>
//       <p className="mt-3">{student.email}</p>
//       <p className="mt-3">{student.address.city}</p>
//       <p className="mt-3">{student.phone}</p>
//     </div>
//   ))}
// </div>
//   </main>
// )
// }



// SSR- Server Side Rendering
// export default async function Home(){
//   const responce  = await fetch(
//      "https://jsonplaceholder.typicode.com/users/1",
//      {
//       cache: "no-store",  
//      }
//   );
//   const student = await responce.json();
//   return(
//    <main className="min-h-screen bg-gray-100 p-8">
//     <h1 className="text-3xl font-bold text-center mb-8 text-black">
//       Student profile
//       </h1>
//       <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-1g">
//       <h2 className="text-xl font-semibold text-black">
//         {student.name}
//       </h2>
//       <p className="text-xl fond-semibold text-black">
//       {student.address.zipcode}
//       </p>
//        <p className="text-xl fond-semibold text-black">
//       {student.company.name}
//       </p>
//       </div>
//    </main>
//   )
// }


// CSR - Client Side Rendering
// "use client"        //client component
// import {useState} from "react";    //usestate is acting like storing the new data.
// export default function Home()
// { //setCount will help us to change the state of current value.
//   const [count, setCount] = useState(0)
//   return(
//     <div className="p-10">
//       <h1 className="text-3xl font-bold">
//         Client Side Rendering
//       </h1>
//       <p className="text-xl mt-5">
//         Count: {count}   
//       </p>
//       <button
//        onClick={() =>{ setCount(count+1)}} className="bg-green-500 text-white px-5 mt-5 rounded-lg">
//         Increase       
//        </button>
//       <button
//        onClick={() =>{ setCount(count-1)}} className="bg-red-400 text-white px-5 mt-5 rounded-lg ml-5">
//         Decrese      
//        </button>
//     </div>
//   )
// }

// *********When we use use client - it is called Client component and if we dont use that it is Server component.

//UseEffect

// "use client"
// import { useEffect } from "react";
// export default function Home(){
//   useEffect(() =>{
//     document.title = "My Website";
//   }, [])
//   return(
//     <div className="p-10">
//       <h1 className="text-3xl font-bold">
//         Hello World
//       </h1>
//     </div>
//   );
// }



// "use client";
// import { useEffect, useState } from "react";
// export default function Home()
// {
//   const [count, setCount] = useState(0);
//   useEffect(()=>
//   {
//     console.log("Component is loaded");
//   }, [])
//   return (
//     <div className="p-10">
//       <h1> Count: {count}</h1>
// <button onClick={()=>{ setCount(count + 1)}} className="bg-green-500 text-white px-4 py-2 rounded-lg">
//         Increase</button>
      
// <button onClick={()=>{ setCount(count - 1)}} className="bg-red-400 text-white px-2 py-2 rounded-lg ml-5">
//         Decrese</button>
//     </div>
//   )
// }



// // Fetching the data
// "use client"
// import {useState} from "react";
// export default function Home(){
// const [student, setStudent] = useState(null);
// async function getStudent()
// {
//   const responce = await fetch(
//     "https://jsonplaceholder.typicode.com/users/1"
//   );
//   const data = await responce.json();
//   setStudent(data);          //data- the data which is storing inside API.
// }
// return (
//   <div className="p-10">
//     <h1 className="text-3xl font-bold mb-4">Student Information</h1>
//     <button onClick={getStudent} className="bg-blue-500 text-white px-5 py-4 rounded-lg">Get Student</button>

//   {student && (
//     <div ></div>
//   )}
//   </div>
// )
// }



// Form 
// "use client" ;
// import { useState } from "react";
// export default function Home(){
//  const [name, setName] = useState("")
//  function handleSubmit(e){
//   //e will help us to stop reloading the page
//   e.preventDefault();
//   alert("Hello "+ name)
//  }
//  return (
//   <>
//   <div className="text-center">
//     <h1>Student Form</h1>
//     <form onSubmit={handleSubmit}>
//         <input type="text" 
//         placeholder="Enter your name here"
//         value={name}
//         onChange={(e)=> setName(e.target.value)}
//         />
//         <br/>
//         <button className="bg-blue-300 text-white rounded-lg" type="Submit">Submit</button>
//     </form>
//   </div>
//   </>
//  )
// }


//--------Server Actions-------
// "use client"
// import { useActionState } from "react"        //It is used when we do actions ...
// import { greetUser } from "./actions"   
// export default function Home(){
//   const [message, formAction] = useActionState(greetUser, "");
//     return(
//       <div>
//         <h1>Server Action Example</h1>
//         <form action={formAction}>
//         <input 
//         type="text"
//         name ="name"
//         placeholder="Enter your name"
//         />
//         <br/>
//         <button type="Submit">Submit</button>
//         </form>
//         <h2>{message}</h2>
//       </div>
//     )
// } 


//----------------------------------------------
// "use client"
// import { useActionState } from "react"
// import { login } from "./actions"
// export default function Home(){
//   const [result, action] = useActionState(login ,"");
//   return(
//     <div>
//       <h1>Login</h1>
//       <form action={action}>
//       <input type="text" name="username"
//       placeholder="Uername"
//       />
//       <br/>
//       <input type="password" name="password"
//       placeholder="Password"/>
//       <br/>
//       <button type="submit">Submit</button>
//       </form>
//       <h3>{result}</h3>
//     </div>
//   )
// }


//VALIDATE----------
// "use client"
// import { use, useState } from "react"
// export default function Home(){
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [error,setError] = useState("");
//   function handleSubmit(e)   //e is the event which we are going to handle
//   {
//     e.preventDefault();    //page will not reload by this event e
//     if(name === "" || email === ""){
//       //when they are empty.
//       setError("All fields are required");
//       return;
//     }
//     if(!email.includes("@")){
//       // if email does not contain @ ...
//       setError("Enter a valid emiail");
//       return;
//     }
//     setError("");
//     alert("Form Submitted Successfully!");
//   }
//   return(
//     <div>
//       <h2>Regestration Form</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text"  
//         placeholder="Enter your name"
//         value={name}
//         onChange={(e)=>setName(e.target.value)}
//         />
//         <br/>
//         <input type="email"
//         placeholder="Enter your email"
//         value={email}
//         onChange={(e)=>setEmail(e.target.value)}
//         />
//         <br/>
//         <button className="rounded-lg text-white bg-blue-300" type="submit">Submit</button>
//       </form>
//       {error && <p>{error}</p>}
//     </div>
//   )
// }


//Crete an application form for Literature Club
//Form should have name, reg no. , email, setction, department
//Apply validation that all the fields are compulsory.


//********************************** */
//Regestrtion Form - Validation
// "use client"
// import { useState } from "react";
// export default function Home(){
//   const  [name, setName]= useState("");
//   const [email, setEmail]=useState("");
//   const [age, setAge] = useState("");
//   const [password, setPassword] = useState("");

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   function handleSubmit(e){
//     e.preventDefault();   //page will not reload by this event e
//     setError("");
//     setSuccess("");
//     //1. Check empty fields
//     if(!name || !email || !age || !password)
//     {
//       setError("All fields are required");
//       return ;
//     }
//     //2. Check Name
//     if(name.length < 3)
//     {
//       setError("Name must contain atleast 3 Characters");
//       return;
//     }
//     //3. Check email
//     if(!email.includes("@"))
//     {
//       setError("Enter a valid Email");
//       return ;
//     }
//     //check Age
//     if( age<18)
//     {
//       setError("Age must be above 18");
//       return;
//     }
//     //Check password
//     if(password.length < 6)
//     {
//       setError("Password must contain atleast 6 characters");
//       return;
//     }
//     setSuccess("Registration Successful! 🎉");
//   }
//   return(
//     <div>
//       <h1>Student Regestration</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//         type="text"
//         placeholder="Enter your Name"
//         value={name}
//         onChange={(e)=>setName(e.target.value)}
//         />
//         <br/>

//         <input type="text"
//         placeholder="Enter your Email"
//         value={email}
//         onChange={(e)=>setEmail(e.target.value)}
//         />
//         <br/>

//         <input type="password"
//         placeholder="Enter your Password"
//         value={password}
//         onChange={(e)=>setPassword(e.target.value)}
//         />
//         <br/>

//         <input type="number"
//         placeholder="Enter your Age"
//         value={age}
//         onChange={(e)=>setAge(e.target.value)}
//         />
//         <br/> <br/>
//         <button type="submit" className="rounded-md bg-blue-300" >Submit</button>
//       </form>
//       {error && <p>{error}</p>}
//       {success && <p>{success}</p>}
//     </div>
//   )
// }




// "use client";
// import { useRouter } from "next/navigation";
// export default function Home() {
//   const router = useRouter();
//   return (
//     <div>
//       <h1>College Event</h1>
//       <p>Welcome to the College Event Registration</p>
//       <button onClick={() => router.push("/EventForm")}>
//         Register Now
//       </button>
//     </div>
//   );
// }



// "use client";
// import { uploadFile } from "./actions";
// export default function Home(){
//   return(
//     <form action={uploadFile}>
//       <input type="file"
//       name="file"/>
//       <br/>
//       <button type="submit"> Upload</button>
//     </form>
//   )
// }


//Uploading file in form 
// "use client"
// import { useActionState } from "react"   //for using actions through server
// import { uploadFile } from "./actions"
// export default function Home(){
//   const [message, formAction] = useActionState(uploadFile, "");
//   return(
//     <div>
//       <h1>File Upload</h1>
//       <form action={formAction}>
//         <input type="file" 
//         name="file"
//           />
//         <br/>
//         <br/>
//         <button type="submit">Upload</button>
//       </form>
//       <p>{message}</p>
//     </div>
//   )
// }




//----------------OPTIMIZE UI UPDATES--------
// "use client"
// import { useState } from "react";
// export default function Home(){
//     const [likes, setLikes] = useState(10);
//     async function likePost(){
//         setLikes(likes+1);  //immediate update of UI
//         await new Promise((resolve) => setTimeout(resolve, 5000));
//         console.log("Server operation completed");
//     }
//     async function dislikePost(){
//       setLikes(likes-1);
//       await new Promise((resolve)=> setTimeout(resolve, 3000));
//     }
//     return(
//         <div>
//             <p>Likes: {likes}</p>
//             <button onClick={likePost}>Like❤️</button>
//             <br/>
//             <button onClick={dislikePost}>Dislike 🖤</button>
//         </div>
//     )
// }


//************* */
// "use client"
// import { useState } from "react"
// import { resolve } from "styled-jsx/css";
// export default function Home(){
//   const [tasks, setTasks] =useState(["Study", "Exercise" , "Read"]);
//   async function deleteTask(task){
//     //update UI
//     setTasks(tasks.filter((item) => item !==task));
//     //Server request
//     await new Promise((resolve)=>setTimeout(resolve, 9000));
//     console.log("Delete from server");
//   }
//   return (
//     <div>
//       <h1>My tasks</h1>
//       {tasks.map((task)=> (
//         <div key={task}>
//           {task}
//           <br/>
//           {/* //every task will have sepearte Delete button to delete that task. */}
//           <button className="rounded-md bg-blue-300 text-black" onClick={()=> deleteTask(task)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   )
// }


// ********************************************************
//AUTHENTICATION - username, password - login successful else error
// AUTHORIZATION - student management system (example)
//user - function
//admin - function 
// Basically AUTHENTICATION is "who are you ?" and AUTHORIZATION is "what can you access"
// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// export default function Login(){
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();
//   function handleLogin(e){
//     e.preventDefault();

//     //Authentication part
// // === -> compares both valuye and data type without conversion , where as == -> compares values after doing type conversion
//     if(email === "admin@gmail.com" && password === "1234"){
//       router.push("./welcome");
//     }
//     else{
//       alert("Invalid email or password");
//     }
//   }
//   return(
//     <div>
//       <h1>Login page!!</h1>
//       <form onSubmit={handleLogin}>
//     <label>Email</label>
//     <br/>
//     <input type="email"
//     value={email}
//     onChange={(e)=> setEmail(e.target.value)}
//     placeholder="Enter your Email"
//     />

//     <br/>
//     <div>
//       <label>Password</label>
//       <br/>
//       <input type="password"
//       value={password}
//       onChange={(e) => setPassword(e.target.value)}
//       placeholder="Enter your password"
//       />
//     </div>
//     <br/>
//     <button type="submit">Login</button>
//       </form>
//     </div>
//   )
// }


// *********************************************************************
//Authorization
// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// export default function Home(){
//   const [role, setRole] = useState("student");
//   const router = useRouter();
//   function continueToStudnets(){
//     router.push(`/students?role=${role}`);
//   }
//   return(
//     <div>
//       <h1>User Role</h1>
//       <lable>Select Role: </lable>
//       <br/>
//       <select value={role}
//       onChange={(e)=> setRole(e.target.value)}>
//         <option value="student">Student</option>
//         <option value="admin">Admin</option>
//       </select>
//       <br/>
//       <button  onClick={continueToStudnets}>Continue</button>

//     </div>
//   )

// }


// ************************************
//RESTAUTANT MANAGEMENT SYSTEM
// "use client"
// import { useState } from "react"
// import Link from "next/link"
// export default function Home(){
//   const [role, setRole] = useState("customer");
//   return(
//     <div>
//       <h1>Restaurant Management System</h1>
//       <label>Select Role : </label>
//       <br/>
//       <select value={role} onChange={(e) => setRole(e.target.value)}>
//       <option value="Customer">Customer</option>
//       <option value="Manager">Manager</option>
//       </select>
//       <br/>
//       <Link href={`/Restaurant?role=${role}`}> Continue </Link>
//   </div>
//   )
// }


// "use client";
// import { useState } from "react";
// import Link from "next/link";
// export default function Home(){
//   const [role, setRole] = useState("participant");
//   return(
//     <div>
//       <h1>Event Management System</h1>
//       <label>Select Role : </label>
//       <br/>
//       <select value={role}
//       onChange={(e) =>setRole(e.target.value)}>
//           <option value="Participant">Participant</option>
//           <option value="Organizer">Organizer</option>
//       </select>
//       <br/>
//       <Link href = {`/Events?role=${role}`}>Continue</Link>
//     </div>
//   )
// }



// **************************************************************
// UNIT-4  Session Management
// "use client";
// import { useRouter } from "next/navigation";
// export default function Home() {
//   const router = useRouter();
//   async function login() {
//     const response = await fetch("/api2/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         username: "admin",
//         password: "abc",
//       }),
//     });

//     if (response.ok) {
//       router.push("/dashboard");
//     } else {
//       const data = await response.json();
//       alert(data.message);
//     }
//   }

//   return (
//     <div>
//       <h1>Login Page</h1>
//       <button onClick={login}>Login</button>
//     </div>
//   );
// }


// ************************************************
//This code is for dashboard page 2nd part ..which is check user loged in or not .
// "use client";
// import { useRouter } from "next/navigation";
// export default function Login(){
//   const router = useRouter();
//   return(
//     <div>
//       <h1>Login Page</h1>
//       <button onClick={()=>router.push("/dashboard")}>Login</button>
//     </div>
//   )
// }


//Prepare a Nect Js application
//1. Home page should have  inimum 2 products displayed with name and image
//2. Layout of all the page sould be same including header and footer and metadata.
//3. When the user click on  one product ir should open in as a new route  with description of the product.

// import Image from "next/image";
// export default function Home(){
//     return(
//         <div>
//             <h1>Welcome to the home page</h1>
//             <Image
//                 src="/puppy.jpeg"
//                 alt="Student"
//                 width={400}
//                 height={300}
//             />
//         </div>
//     )
// }

// import Image from "next/image";
// export default function Home(){
//     return(
//         <div>
//             <h1>Image display</h1>
//             <Image src="https://images.unsplash.com/photo-1565573349860-cbf26ef3f40f?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
//             alt="flower"
//             width={400}
//             height={300}
//             />
//         </div>
//     )
// }


// export const metadata = {
//   title:"About US",
//   description: "This is about page",
// };
// export default function About(){
//   return(
//     <h1>This is About Page</h1>
//   )
// } 

//***************************Lazy Loading
// "use client";
// import dynamic from "next/dynamic";
// import { useState } from "react";
// const Attendancec= dynamic(
//   ()=>import("./Attendance"),
//   {
//     loading: () => <p>Loading Attendance</p>
//   }
// );
// export default function Home(){
//   const[show, setShow] = useState(false);
//   return(
//     <div>
//       <h1>Student dashboard</h1>
//       <p>Wellcome Student</p>
//       <button className="bg-blue-400 rounded-md" onClick={()=>setShow(true)}>View Attendance</button>
//       {show && <Attendancec/>}
//     </div>
//   )
// }

"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useStyleRegistry } from "styled-jsx";
import { RedirectType } from "next/navigation";
const ProductDetails = dynamic(
  ()=>import("./ProductDetails"),
  {
    loading: ()=> <p>Loading Product Details</p>
  }
);
export default function Home(){
  const [show, setShow] = useState(false)
  useEffect(()=>{
    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting){
          setShow(true);
          observer.disconnect();
        }
      }
    );
    const target = document.getElementById("product");
    if(target){
      observer.observe(target);
    }
    return() => observer.disconnect();
  },[]);
  return(
    <div>
      <h1>Online Shopping Website</h1>
      <h2>Wellcome to Store</h2>
      <p>Explore our latest products</p>
      <div style={{height: "700px"}}>
        <h2>Our Products</h2>
        <p className="text-red-300">Scroll Down to see the Product Details</p>
      </div>
      <div id="product">
    {show ? (
      <ProductDetails/>) : (
        <p>Product Details will load here</p>
    )}
      </div>
    </div>
  )
}