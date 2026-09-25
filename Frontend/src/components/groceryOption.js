import { GroceryGridCard } from "../utils/Grocery"
import GroceryCard from "./groceryCard"
export default function GroceryOption(){
      
    return(
        <>
        <div className="mt-20 w-[80%] container mx-auto">
            <h1 className="text-2xl font-bold">Shop groceries on Instamart</h1>
        <div className="w-[80%] container mx-auto flex flex-nowrap overflow-auto gap-3 mt-5">
        {
            GroceryGridCard.map((foodData)=><GroceryCard key={foodData.id} foodData={foodData}></GroceryCard>)
        }
        </div>
        </div>
        </>
    )
}