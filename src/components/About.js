import ProfileClass from "./ProfileClass";
import ProfileFunction from "./ProfileFunction";
import { Component } from "react";
import {Outlet} from "react-router-dom"

class About extends Component {
    constructor(props) {
        super(props);
        console.log("Parent constructor");
    }

    componentDidMount() {
        console.log("Parent componentDidMount");
    }

    render(){
        console.log("Parent render");
        return (
            <>
            <h1>This is About us page</h1>
            <Outlet/>

            </>
        )
    }
}

export default About;