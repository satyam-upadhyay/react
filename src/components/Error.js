import {useRouteError} from "react-router-dom";

const Error = ()=>{
   const message = useRouteError();
   console.log(message);
    return (
        <>
        <h1>Oops!!</h1>
        <h2>Something went Wrong</h2>
        <h3>{message.status+" : "+message.statusText}</h3>

        </>
    )
}

export default Error;
