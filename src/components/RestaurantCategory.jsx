import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const { title, itemCards } = data;

  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* Acc Header */}
      <div className="w-6/12 my-2 m-auto bg-amber-50 shadow p-3">
        <div
          className="flex justify-between font-bold cursor-pointer"
          onClick={handleClick}
        >
          <span>
            {title} ({itemCards?.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && <ItemList items={itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
