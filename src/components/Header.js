import { useState, useContext } from "react";
import Logo from "../Asset/img/food-fiesta-new-delhi-logo.jpg";
import { Link } from "react-router-dom";
import useOnline from "./utils/useOnline";
import UserContext from "./utils/UserContext";

export const Title = () => {
  return (
    <a href="/">
      <img className="logo h-24 p-2 sm:justify-center" alt="logo" src={Logo} />
    </a>
  );
};

export const Header = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const online = useOnline();
  const { user, setUser } = useContext(UserContext);
  return (
    <div className="header flex  bg-pink-50 justify-between shadow-lg sm:bg-purple-200">
      <Title />
      <div className="nav-items">
        <ul className="flex  py-10 sm:">
          <Link to="/">
            <li className="px-2 ">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-2 ">About Us</li>
          </Link>
          <Link to="/contact">
            <li className="px-2 ">Contact Us</li>
          </Link>
          <li className="px-2 ">Cart</li>
        </ul>
      </div>
      <h1 className="py-10" >{(online ? "🟢" : "🔴")} {user.name}</h1>
      {loggedIn ? (
        <button className="px-" onClick={() => setLoggedIn(false)}>Log In</button>
      ) : (
        <button onClick={() => setLoggedIn(true)}>Log Out</button>
      )}
    </div>
  );
};
