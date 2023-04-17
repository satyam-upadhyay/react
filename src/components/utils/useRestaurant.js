import { useState, useEffect } from "react";
import { MENU_URL } from "../../config";
const useRestaurant  = (resid)=>{

    const [restaurant,setRestaurant]=useState(null);
    const [menu,setMenu]=useState(null);

    useEffect(()=>{
        getResturantDetails(resid.id);
    },[])
    async function getResturantDetails(id){
        const data= await fetch(MENU_URL+id);
        const json = await data.json();
        setRestaurant(json?.data?.cards[0].card.card.info);
        setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    }
    console.log("useRestaurant hook called");
    return [restaurant,menu];
}

export default useRestaurant;