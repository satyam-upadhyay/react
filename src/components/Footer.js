import { useContext } from "react";
import UserContext from "./utils/UserContext";

const Footer = () => {
  const {user} = useContext(UserContext);
    return (
      <>
      <div className="flex justify-center p-5 m-5"> 
        <h4>This site is managed by {user.name}  email us at {user.email}</h4>
        
      </div>
      
      </>
    );
  };

  export default Footer;