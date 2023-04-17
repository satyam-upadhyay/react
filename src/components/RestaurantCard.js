import { IMG_CDN_LINK } from "../config"
const RestaurantCard = ({name,cuisines,cloudinaryImageId,lastMileTravelString}) =>{
    return (
        <div className="card bg-pink-50 p-2 m-2 w-56 shadow-lg">
            <img src={IMG_CDN_LINK+cloudinaryImageId}/>
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{lastMileTravelString}</h3>
        </div>   
    )
}

export default RestaurantCard;