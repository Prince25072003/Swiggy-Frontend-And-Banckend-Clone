import { useEffect, useState } from "react"
import RestCard from "./restCard";
import Shimmer from "./Shimmer";
export default function Restaurant(){
    
    const [RestData,setRestData] = useState([]);

    useEffect(()=>{
        
        async function fetchData() {
          try {
            const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000";
            const response = await fetch(`${API_BASE}/user/resturant`);

            if (!response.ok) {
              throw new Error(`Request failed with ${response.status}`);
            }

            const data = await response.json();
            const restaurants = data?.data?.cards?.[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            setRestData(restaurants);
          } catch (error) {
            console.error("Restaurant fetch failed:", error);
            setRestData([]);
          }
        }
    fetchData();
    },[])
    //console.log(RestData);
    //Shimmer Effect
    if(RestData.length===0)
        return <Shimmer></Shimmer>
    return(
        <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
           {
              RestData.map((restInfo)=><RestCard key={restInfo?.info?.id} restInfo={restInfo}></RestCard>)
           }
        </div>
    )
} 
//https://proxy.corsfix.com/?