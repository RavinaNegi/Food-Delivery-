import { useState ,useEffect,useContext} from 'react';
import RestaurantCard from './RestaurantCard';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer'
import useOnline from '../utils/useOnline';
import UserContext from '../utils/UserContext';

const Body = () => {
 
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [curr, setCurr] = useState("");
  const {userName,setUserInfo}=useContext(UserContext);

  useEffect(()=>{
    fetchData();

  },[]);
   const fetchData=async ()=>
  {
    const data= await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING');
   const json= await data.json();
  
  
   setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
  };
  
  const onlineInfo=useOnline();
  if(onlineInfo===false) return(<div>
    <h1>you are offline 
      may be your internet connection is failed
    </h1>
  </div>)
  return listOfRestaurants.length===0?
 (<Shimmer/>): (
    <div className="">
      <div className="flex m-4 p-4">
       
        <button
          className="text-lg bg-yellow-100 mr-6 p-3 text-center rounded-lg"
          onClick={() => {
            // * Filter logic
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4 
            );

            setFilteredRestaurant(filteredList);
            
          }}
        >
          Top Rated Restaurants
        </button>
        <input type='text' className='border border-black border-solid text-lg mr-4 will-change-auto' value={curr}  onChange={(e)=>{setCurr(e.target.value);}}></input>
        <button className='bg-green-100 p-3 rounded-lg' onClick={()=>{ 
           const filteredRestaurant = listOfRestaurants.filter((res) =>
            res.info.name.toLowerCase().includes(curr.toLowerCase())
          );

          setFilteredRestaurant(filteredRestaurant);
        }}
>search</button>
<label className='text-center my-3 ml-8 mr-4'>USERNAME:</label>
<input type='text' className='border border-black border-solid text-lg mr-4 'value={userName} onChange={(e)=>{ setUserInfo(e.target.value);}}></input>

     
      </div>
      
      <div className="flex flex-wrap">
        {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}

        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id }to={"/restaurant/"+restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
