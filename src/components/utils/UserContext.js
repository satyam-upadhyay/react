import { createContext } from "react";

const UserContext = createContext({
    user:{
        name:"dummy name",
        email:"kenaa@example.com"
    }
})
export default UserContext;