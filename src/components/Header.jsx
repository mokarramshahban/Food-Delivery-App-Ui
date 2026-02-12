import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router"; 
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Food App Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Internet Connection: {onlineStatus ? "🟢" : "🔴"}</li>
          <li> <Link to="/" >Home</Link> </li>
          <li> <Link to="/about" >About Us</Link></li>
          <li> <Link to="/contact" >Contact Us</Link></li>
          <li> <Link to="/grocery" >Grocery</Link></li>

          <li>Cart</li>
          <button className="log-btn"
            onClick={() =>{
              btnName === "login"
                ? setBtnName ("logOut")
                : setBtnName ("login")
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
