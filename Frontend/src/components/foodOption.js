import {imageGridCards} from "../utils/food_Data";
import FoodCart from "./foodCart";
export default function FoodOption(){

     return(
        <>
          <div className="w-[80%] container mx-auto flex flex-wrap mt-20 gap-3">
             { 
                imageGridCards.map((foodData)=><FoodCart key={foodData.id} foodData={foodData}></FoodCart>)
             }
          </div>
        </>
     )
}