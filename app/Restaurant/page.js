"use client";
import { useSearchParams } from "next/navigation";
export default function Restaurant(){
    const searchParams = useSearchParams();
    const role = searchParams.get("role");
    function viewMenu(){
        alert ("Menu displayed!");
    }
    function addItem(){
        alert("New Item added to menu")
    }
    function updateItem(){
        alert("Menu Item updated");
    }
    function deleteItem(){
        alert("Menu Item deleted");
    }
    function placeOrder(){
        alert("Order placed Successfully");
    }
    return(
        <div>
            <h1>Restaurant Management</h1>
            <p>Current Role: <b>{role}</b> </p>
            <button onClick={viewMenu}>View Menu</button>
            {/* {Manager Permissions} */}
            {role === "manager" && (
                <>
                <button onClick={addItem}>Add Item</button>
                </>
            )}
            <br/>
            <button onClick={updateItem}>Update Menu</button>
            <br/>
            <button onClick={deleteItem}>Delete Item</button>

            {/* {Customer Permissions } */}
            {role === "customer" && (
                <>
                <button onClick={placeOrder}>Place Order</button>
                </>
            )}
        </div>
    )
}