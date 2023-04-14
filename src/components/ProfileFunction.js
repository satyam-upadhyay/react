import { useEffect } from "react"

const ProfileFunction=()=>{
    useEffect(()=>{
        console.log("Profile Functional Component");
        const timer = setInterval(()=>{
            console.log("interval");
        },1000)
        return ()=>{
            console.log("Profile Functional Component unmounted");
            clearInterval(timer);
        }
    },[])
    return(
        <>
        <h1>Profile Functional Component</h1>
        </>
    )
}

export default ProfileFunction;