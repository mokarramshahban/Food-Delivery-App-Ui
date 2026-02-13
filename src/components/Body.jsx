import { RestaurantCard, isOpenRestaurant } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_API } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [copyResList, setCopyResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const RestaurantOpenCard = isOpenRestaurant(RestaurantCard);
  console.log(listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API);
    const json = await data.json();

    // Find the card that actually contains the restaurant data
    const cards = json?.data?.cards || [];
    const restaurantCard = cards.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );

    const restaurants =
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
      [];

    setListOfRestaurants(restaurants);
    setCopyResList(restaurants);
  };

  if (onlineStatus === false)
    return (
      <h1>
        It's look like you're offile, Please check your internet connection !!!!
      </h1>
    );
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="flex m-6 justify-center">
        <div className="flex">
          <input
            className="px-2 border rounded-sm focus:ring focus:ring-amber-300"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="border rounded-sm mx-2 px-4 py-1 cursor-pointer hover:bg-amber-200"
            onClick={() => {
              let search_filter = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setCopyResList(search_filter);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="border rounded-sm mx-2 px-4 py-1 cursor-pointer hover:bg-amber-200"
          onClick={() => {
            let filteredResList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.5,
            );
            setCopyResList(filteredResList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="flex flex-wrap m-4 justify-around mx-20">
        {copyResList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantOpenCard resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
