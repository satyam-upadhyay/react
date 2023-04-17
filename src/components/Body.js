import RestaurantCard from "./RestaurantCard";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "./utils/helper";
import  useRestaurantList  from "./utils/useRestaurantList";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");

 const allRestaurants = useRestaurantList();
 useEffect(()=>{
  setFilteredRestaurants(allRestaurants);
 },[allRestaurants]);

  
  if (!allRestaurants) return null;
  return (
    <>
      <div className="search-container bg-pink-50 p-5 my-5 ">
        <input
          type="text"
          className="search-input p-2 m-2 focus:bg-gray-200"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => { 
            setSearchTxt(e.target.value);
          }}
        />
        <button
          className="search-btn p-2 m-2 bg-purple-900 text-white rounded-md hover:bg-purple-400"
          onClick={() => {
            const data = filterData(searchTxt, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          submit
        </button>
      </div>
      {allRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <>
          <div className="restaurant-list flex flex-wrap">
            {filteredRestaurants.length === 0 ? (
              <h1>No Restaurants matches your search</h1>
            ) : (
              filteredRestaurants.map((restaurant) => {
                return (
                  <Link
                    key={restaurant?.data?.id}
                    to={"/restaurant/" + restaurant?.data?.id}
                  >
                    <RestaurantCard {...restaurant.data} />
                  </Link>
                );
              })
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Body;
