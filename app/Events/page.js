"use client"
import { useSearchParams} from "next/navigation"
export default function Events(){
    const searchParams = useSearchParams();
    const role = searchParams.get("role");
    function viewEvents(){
        alert("Events Displayed");
    }
    function createEvent(){
        alert("New event Created");
    }
    function updateEvent(){
        alert("Event Updated");
    }
    function deleteEvent(){
        alert("Event Deleted");
    }
    function registerEvent(){
        alert("Register for events..")
    }
    return(
        <div>
            <h1>Event Management</h1>
            <p>Current Role : <b>{role}</b></p>
            <button onClick={viewEvents}>View Events</button>
            <br/>
            {/* {/Organizer Permission } */}
            {role === "organizer" && (
                <>
                <button onClick={createEvent}>Create Event</button>
                <br/>
                </>
            )}
            {/* {Participant Permission } */}
            {role === "participant" && (
                <>
                <button onClick={registerEvent}>Register for Event</button>
                </>
            )}
        </div>
    )
}