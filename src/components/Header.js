
import { LOGO_URL } from '../utils/constant';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useOnline from '../utils/useOnline';

const Header = () => {
  const [btn,setBtn]=useState("login");
  const onlineInfo=useOnline();
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} alt="App Logo" className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>online status:{onlineInfo?"🟢":"🔴"}</li>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/aout"}>About Us</Link></li>
                    <li>Contact Us</li>
                    <li><Link to={"/grocery"}>Grocery</Link></li>
                    <li>Cart</li>
                    <button onClick={()=>{ btn==="login"?setBtn("logout"):setBtn("login"); }}>{btn}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
