import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestMe=()=>{
   
    const {resId}=useParams();
    const resInfo=useRestaurantMenu(resId);
    
    
    
    if(resInfo===null) return <Shimmer/>;
    const {itemCards} =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(itemCards);

    
    
    return(<div>
        <h2>{resInfo?.cards[2]?.card?.card?.info?.name}</h2>
        <h3>menu</h3>
        <ul>
           { itemCards.map((item)=>
            (
                <li key={item.card.info.id}>{item.card.info.name}</li>
))}
           
        </ul>
    </div>);
};
export default RestMe;