
import { LOGO_URL } from '../utils/constant';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import useOnline from '../utils/useOnline';
import UserContext from '../utils/UserContext';
import { useSelector} from 'react-redux';

const Header = () => {
  const [btn,setBtn]=useState("login");

  const onlineInfo=useOnline();
  const {userName}=useContext(UserContext);
  const cartItems=useSelector((store)=>store.cart.items);
    return (
        <div className="flex justify-between bg-pink-100 shadow-xl ">
            <div className="logo-container">
                <img src={LOGO_URL} alt="App Logo" className="h-28 w-28" />
            </div>
            <div className="flex  items-center">
                <ul className='flex p-4 m-4 text-lg'>
                    <li className='mx-4 '>online status:{onlineInfo?"🟢":"🔴"}</li>
                    <li className='mx-4'><Link to={"/"}>Home</Link></li>
                    <li className='mx-4'><Link to={"/aout"}>About Us</Link></li>
                    <li className='mx-4'>Contact Us</li>
                    <li className='mx-4'><Link to={"/grocery"}>Grocery</Link></li>
                    <li className='mx-4'><Link to={"/cart"}>Cart({cartItems.length} items)</Link></li>
                    
                   <button className='mx-4' onClick={()=>{ btn==="login"?setBtn("logout"):setBtn("login"); }}>{btn}</button>
                   <li> {userName}</li>
                   </ul>
            </div>
        </div>
    );
};

export default Header;
