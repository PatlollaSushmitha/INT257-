// ISR - Incremental Static Rendering
export const revalidate = 10 //seconds.   , //This is the main line for ISR
export default async function Notice(){
    const responce= await fetch(
        "https://dummyjson.com/products/1"
    );
    const product = await responce.json()
    return(
        <main className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
                <h1 className="text-3xl font-bold mb-6 text-black">
                    College Product
                </h1>
                <h2 className="text-xl font-semibold text-blue-400">
                    {product.id}
                </h2>
            </div>
        </main>
    )
}
// http://localhost:3000/product - To check output