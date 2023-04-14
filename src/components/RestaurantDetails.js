import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { IMG_CDN_LINK } from "../config";
import Shimmer from "./Shimmer";
const RestaurantDetails = ()=>{
    const [restaurant,setRestaurant]=useState(null);
    const [menu,setMenu]=useState(null);

    //console.log(useState());

    const resid=useParams();
    useEffect(()=>{
        getResturantDetails(resid.id);
    },[])
    async function getResturantDetails(id){
        const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6496675&lng=77.3661788&restaurantId="+id);
        const json = await data.json();
        setRestaurant(json?.data?.cards[0].card.card.info);
        setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        console.log(menu);
    }

    return (!restaurant)?<Shimmer name="details"/>:(
        <>
            <div className="restaurant-details">
                <div><img src={IMG_CDN_LINK+restaurant?.cloudinaryImageId} alt="restaurant-/"/>
                <h1>{restaurant?.name}</h1>
                <p>{restaurant?.cuisines?.join(",")}</p>
                <h3>{restaurant?.costForTwoMessage}</h3>
                <h3>{restaurant?.avgRatingString} stars</h3>
                <h4>{restaurant?.totalRatingsString}</h4></div>
                <div className="menu">
                    <h1>Menu</h1>
                    <ul>
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