export default function DineCart({RestData}){

    return(
        <>
        <div className="max-w-sm flex-none">
          <a target="_blank" href={RestData?.cta?.link}>            
             <div className="relative">
                 <img className="w-80 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+RestData?.info?.mediaFiles[0]?.url}></img>
                 <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-b-lg"></div>
                 <p className="absolute bottom-2 left-2 text-xl text-white">{RestData?.info?.name}</p>
                 <p className="absolute bottom-2 right-2 text-xl text-white">{RestData?.info?.rating?.value}</p>
             </div>
          </a>
        </div>
        </>
    )
}