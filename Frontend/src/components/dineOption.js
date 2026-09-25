import { dineoutRestaurants } from "../utils/DineData";
import DineCart from "./dineCart";
export default function DineOption(){
    
    return(
        <>
         <div className="w-[80%] container mx-auto   mt-20 mb-20">
            <p>Discover best restaurants on Dineout</p>
            <div className="flex overflow-x-auto mt-5 gap-4">
            { 
              dineoutRestaurants.map((RestData)=><DineCart key={RestData?.info?.id} RestData={RestData}></DineCart>)
            }
            </div>
        </div>
        </>
    )
}