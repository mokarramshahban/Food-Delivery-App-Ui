import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(0)

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  // one tiny change in a nested API response and your whole app goes dark. Hardcoding indexes like cards[2] is definitely a "ticking time bomb."
  // const restaurantInfo = resInfo?.cards[2]?.card?.card?.info;
  // Safely find the card that contains the restaurant information
  const restaurantInfo = resInfo?.cards?.find((x) => x?.card?.card?.info)?.card
    ?.card?.info; // If the API team adds a new "Promo" card at index 0, your code won't break; it will just skip over it until it finds the right object.
  const { name, cuisines, costForTwoMessage } = restaurantInfo || {};

  // 1. Find the main grouping card (avoids relying on index 5)
  const groupedCard = resInfo?.cards?.find((c) => c?.groupedCard)?.groupedCard;
  // 2. Look through the "REGULAR" cards to find the first section that has itemCards
  // (This avoids relying on index 1)
  // const categoryWithItems = groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
  //   (c) => c?.card?.card?.itemCards,
  // );
  // 3. Safely extract itemCards
  // const itemCards = categoryWithItems?.card?.card?.itemCards || [];

  // getting all the cards with @type in it...
  const categories = groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
  );

  // console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg mb-5">
        {cuisines.join(", ")} - {costForTwoMessage}{" "}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.categoryId}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex = { ()=>setShowIndex(index === showIndex ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
