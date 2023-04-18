import { Component } from "react";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  render() {
    console.log("Parent render");
    return (
      <>
        <UserContext.Consumer>
          {({ user }) => (
            <h4 className="font-bold p-10">
              {user.name} - {user.email}
            </h4>
          )}
        </UserContext.Consumer>
        <h1>This is About us page</h1>
        <Outlet />
      </>
    );
  }
}

export default About;
