import { useState,useEffect } from "react";
const useRestaurantList = ()=>{
 const [allRestaurants, setAllRestaurants] = useState([]);

 useEffect(() => {
    getData();
  }, []);
 async function getData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6496675&lng=77.3661788&page_type=DESKTOP_WEB_LISTING"
    );
    if (!data.ok) {
      const message = `An error has occured: ${response.status}`;
      console.log(message);
      throw new Error(message);
    }
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return allRestaurants;
}

export default useRestaurantList;