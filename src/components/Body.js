import { useState ,useEffect} from 'react';
import RestaurantCard from './RestaurantCard';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer'
import useOnline from '../utils/useOnline';

const Body = () => {
 
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [curr, setCurr] = useState("");

  useEffect(()=>{
    fetchData();

  },[]);
   const fetchData=async ()=>
  {
    const data= await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING');
   const json= await data.json();
   console.log("yeah h tumhara json");
   console.log(json);
   setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
  };
  const onlineInfo=useOnline();
  if(onlineInfo===false) return(<div>
    <h1>you are offline 
      maay be your internet connection is failed
    </h1>
  </div>)
  return listOfRestaurants.length===0?
 (<Shimmer/>): (
    <div className="body">
      {/* <div className="search-container">
        <input type="text" placeholder="Search Food or Restaurant" />
        <button>Search</button>
      </div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // * Filter logic
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4 
            );

            setListOfRestaurants(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <input type='text' className='search' value={curr}  onChange={(e)=>{setCurr(e.target.value);}}></input>
        <button onClick={()=>{ 
           const filteredRestaurant = listOfRestaurants.filter((res) =>
            res.info.name.toLowerCase().includes(curr.toLowerCase())
          );

          setFilteredRestaurant(filteredRestaurant);
        }}
>search</button>
      </div>
      <div className="res-container">
        {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}

        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id }to={"/restaurant/"+restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
