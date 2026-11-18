"use client";
import { useSearchParams } from "next/navigation";
export default function Students(){
    const searchParams = useSearchParams();
    const role = searchParams.get("role");
    function addStudent(){
        alert("Student added Successfully");
    }
    function deleteStudent(){
        alert("Student deleted Successfully");
    }
    function viewStudent(){
        alert("Student list displayed");
    }
    return(
        <div>
            <h1>Student Management System</h1>
            <p>Logged in as : <b>{role}</b></p>
            <button onClick={viewStudent}> View Students</button>
            <br/>
            {role === "admin" && (
                <>
                <button onClick={addStudent}>Add Student</button>
                <br/>
                <button onClick={deleteStudent}>Delete Student</button>
                </>
            )}
        </div>
    )
}