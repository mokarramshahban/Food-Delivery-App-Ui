import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };
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
  const categoryWithItems = groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
    (c) => c?.card?.card?.itemCards,
  );
  // 3. Safely extract itemCards
  const itemCards = categoryWithItems?.card?.card?.itemCards || [];

  return (
    <div className="ResMenu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}{" "}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" "}
            {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
