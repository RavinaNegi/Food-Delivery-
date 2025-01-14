import { useContext } from 'react';
import { CDN_URL } from '../utils/constant';
import UserContext from '../utils/UserContext';
import RastaurantCategory from './RastaurantCategory';

const RestaurantCard = (props) => {
    const { resData } = props;
    const {userName}=useContext(UserContext);

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        
    } = resData?.info;

    return (
        <div className="p-4 m-4 w-[250px] h-[450px] bg-[#f0f0f0] hover:bg-slate-400"
        >
            <img
                className=""
                src={CDN_URL + cloudinaryImageId}
                alt="Biryani"
            />

            <h3 className=' '>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{userName}</h4>
           
        </div>
    );
};


export default RestaurantCard;
