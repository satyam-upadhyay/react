import {useParams} from "react-router-dom";
import { IMG_CDN_LINK } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "./utils/useRestaurant";
const RestaurantDetails = ()=>{

    //console.log(useState());

    const resid=useParams();

    const [restaurant,menu]=useRestaurant(resid);
   

    return (!restaurant)?<Shimmer name="details"/>:(
        <>
            <div className="restaurant-details flex p-5 m-2 flex-wrap">
                <div className="px-5"><img className="rounded-md" src={IMG_CDN_LINK+restaurant?.cloudinaryImageId} alt="restaurant-/"/>
                <h1 className="font-bold text-2xl">{restaurant?.name}</h1>
                <p>{restaurant?.cuisines?.join(",")}</p>
                <h3>{restaurant?.costForTwoMessage}</h3>
                <h3>{restaurant?.avgRatingString} stars</h3>
                <h4>{restaurant?.totalRatingsString}</h4></div>
                <div className="menu px-10">
                    <h1 className="font-bold">Menu</h1>
                    <ul className="list-disc">
                        {menu?.map((item)=>{
                            return <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default RestaurantDetails;