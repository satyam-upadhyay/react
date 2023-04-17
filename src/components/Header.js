import { useState } from "react";
import Logo from "../Asset/img/food-fiesta-new-delhi-logo.jpg";
import { Link } from "react-router-dom";
import useOnline from "./utils/useOnline";

export const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src={Logo}
      />
    </a>
  );
};

export const Header = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const online = useOnline();
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
            <Link to="/">Home</Link>
          <Link to="/about"><li>About Us</li></Link>
          <Link to="/contact"><li>Contact Us</li></Link>
          <li>Cart</li>
        </ul>
      </div>
      <h1>{online?"🟢":"🔴"}</h1>
      {loggedIn ? (
        <button onClick={() => setLoggedIn(false)}>Log In</button>
      ) : (
        <button onClick={() => setLoggedIn(true)}>Log Out</button>
      )}
    </div>
  );
};
