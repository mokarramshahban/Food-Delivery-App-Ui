import { CDN_URL } from "../utils/constants";

export const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData.info;

  return (
    <div className="bg-amber-100 w-70 m-2 p-4 rounded-lg hover:bg-amber-50">
      <img className=" rounded" src={CDN_URL + cloudinaryImageId} alt={name} />
      <div className="res-card-content">
        <h3 className="font-bold p-2">{name}</h3>
        <h4 className="px-2">{cuisines.join(", ")}</h4>
        <div className="pt-2 px-2 flex justify-between">
          <span>⭐{avgRating}</span>
          <span>{costForTwo}</span>
          <span>{sla?.slaString}</span>
        </div>
      </div>
    </div>
  );
};

export const isOpenRestaurant = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="border rounded-sm pt-3 m-2 bg-amber-100 mt-10">
        <label className="ml-3 px-3 py-1 rounded-sm bg-amber-50 text-green-800 border-b-black">Restaurant is now Open</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
