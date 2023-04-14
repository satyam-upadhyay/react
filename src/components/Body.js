import RestaurantCard from "./RestaurantCard";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return filterData;
}
const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");

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
    console.log(json);
    setAllRestaurants(json?.data?.cards[2].data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2].data?.data?.cards);
  }
  console.log("rendering...");
  if (!allRestaurants) return null;
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
        <button
          className="search-btn"
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
          <div className="restaurant-list">
            {
                (filteredRestaurants.length===0 ? <h1>No Restaurants matches your search</h1>: filteredRestaurants.map((restaurant) => {
                    return (
                        <Link key={restaurant?.data?.id} to={"/restaurant/"+restaurant?.data?.id}>
                        <RestaurantCard {...restaurant.data}  />
                        </Link> 
                    );
                  }))
            }
           
          </div>
        </>
      )}
    </>
  );
};

export default Body;
