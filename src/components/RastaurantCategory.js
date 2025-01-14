import CategoryItem from "./CategoryItem";
import { useState } from "react";


 const RastaurantCategory=({data,showItems,setShowIndex})=>{
   
  const handleClick=()=>{
    setShowIndex();
    };

    return (
        <div className=" w-6/12 mx-auto  bg-gray-100 shadow-lg my-7 p-4">
        <div onClick={handleClick}  className=" cursor-pointer flex justify-between">
           <span className="font-bold text-lg">{data?.title}({data.itemCards.length})</span>
           <span>⬇️</span>
           
        </div>
        <div>
           {showItems && <CategoryItem card={data?.itemCards}/>}</div>
        </div>
    );
};
export default RastaurantCategory;