import { IMG_CDN_LINK } from "../config"
const RestaurantCard = ({name,cuisines,cloudinaryImageId,lastMileTravelString,address}) =>{
    return (
        <div className="card bg-pink-50 p-2 m-2 w-56 shadow-lg">
            <img className="rounded-md" src={IMG_CDN_LINK+cloudinaryImageId}/>
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>[{cuisines.join(", ")}]</h3>
            <h3 className="font-medium">Distance : {lastMileTravelString}</h3>
            <h1>Address : {address.toLowerCase()}</h1>
        </div>   
    )
}

export default RestaurantCard;