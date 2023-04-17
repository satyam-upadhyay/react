import { Component} from "react";

class ProfileClass extends Component {
    constructor(props) {
        super(props);
        console.log("child constructor "+this.props.name);

        this.state={
            name:"",
            avatar:"",
            bio:"",
            timer: null
        }
    }
     componentDidMount(){
        /* const data = await fetch("https://api.github.com/users/"+this.props.name);
        const json = await data.json(); */
        //console.log(json);
       this.timer = setInterval(()=>console.log("interval"), 1000);
        
        console.log("ComponentDidMount "+this.props.name);
       /*  this.setState({
            name:json.name,
            avatar:json.avatar_url,
            bio:json.bio,
        }) */
        
    }
    componentDidUpdate(){
        console.log("ComponentDidUpdate ")
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }
    render() {
        console.log("child render "+this.props.name);
        return (
            <>
            <div>My Profile</div>
            <h1>User Name : {this.props.name}</h1>
            <h2>{this.state.name}</h2>
            <h3><img src={this.state.avatar}/></h3>
            <h3>{this.state.bio}</h3>
            </>
        )
    }
}

export default ProfileClass;