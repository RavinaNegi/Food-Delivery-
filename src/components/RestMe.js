import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RastaurantCategory from "./RastaurantCategory";
import {useState} from "react";

const RestMe=()=>{
   
    const {resId}=useParams();
    const resInfo=useRestaurantMenu(resId);
    const [showIndex,setShowIndex]=useState(null);
    
    
    
    if(resInfo===null) return <Shimmer/>;
    const {itemCards} =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
   

 
  const category=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c?.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  
 

    
    
    return(
    <div className="text-center my-8">
        <h2  className="font-bold">{resInfo?.cards[2]?.card?.card?.info?.name}</h2>
        <p className="font-bold">{resInfo?.cards[2]?.card?.card?.info?.cuisines.join(",")}-{resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}</p>
        <div>{category.map((item,index)=><RastaurantCategory 
           key={item?.card?.card?.title} 
           data={item?.card?.card}
           setShowIndex={()=>{setShowIndex(index)}}
           showItems={showIndex==index?true:false}
           
           />)}</div>
       
        </div>
        );

};

export default RestMe;