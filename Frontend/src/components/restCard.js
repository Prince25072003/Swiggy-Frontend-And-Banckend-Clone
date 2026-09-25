import { Link } from "react-router-dom"
export default function RestCard({restInfo}){
       
    return(
       <Link to={"/city/delhi/"+restInfo?.info?.id}>
        <div className="max-w-[280px] mb-2 transform transition duration-200 hover:scale-95">
        <img className="w-70 h-45 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+restInfo?.info?.cloudinaryImageId}></img>
        <div className="w-[95%] mx-auto mt-3">
        <div className="font-bold text-xl">{restInfo?.info?.name}</div>
        <div className="flex gap-2">
        <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-1 rounded-md w-fit">
           <span className="text-sm">★</span>
           <span className="text-sm font-semibold">{restInfo?.info?.avgRating}</span>
        </div>
        <span className="text-lg font-semibold">{restInfo?.info?.sla?.slaString}</span>
        </div>
        <div className="text-gray-600 text-xl mt-1 h-7 overflow-hidden">{restInfo?.info?.cuisines.join(" ")}</div>
        </div>
        </div>
        </Link>
    )
}