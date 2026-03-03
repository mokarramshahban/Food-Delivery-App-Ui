import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item, index) => (
        <div
          data-testid="foodItems"
          key={item?.card?.info?.id + "-" + index}
          className="p-2 m-2 border-b-2 border-gray-200 text-left text-lg py-2 flex"
        >
          <div className="w-9/12">
            <div className="">
              <span>{item?.card?.info?.name} </span>
              <span>
                - ₹
                {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                  100 || ""}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="flex justify-center items-ceter text-center relative w-3/12">
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="w-40 h-27 rounded-sm"
            />
            <button
              className="w-22 rounded bg-white absolute top-18 cursor-pointer"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
