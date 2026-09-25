import { useEffect, useState } from "react"
import RestCard from "./restCard";
import Shimmer from "./Shimmer";
export default function Restaurant(){
    
    const [RestData,setRestData] = useState([]);

    useEffect(()=>{
        
        async function fetchData() {
          // const proxyServer = "https://proxy.corsfix.com/?";
           const response = await fetch("http://localhost:3000/user/resturant");
          // const response = await fetch(proxyServer+swiggyAPI);
          // console.log(response)
           const data = await response.json();
          // console.log(data)
           setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
    fetchData();
    },[])
    //console.log(RestData);
    //Shimmer Effect
    if(RestData.length==0)
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