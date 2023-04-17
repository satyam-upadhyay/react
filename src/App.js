import ReactDOM from "react-dom/client";
import {Header} from "./components/Header";
import Body from "./components/Body";
import React, { Suspense } from "react";
import Footer from "./components/Footer";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
//import ContactUs from "./components/ContactUs";
import RestaurantDetails from "./components/RestaurantDetails";
import ProfileClass from "./components/ProfileClass";
import ProfileFunction from "./components/ProfileFunction";
import Shimmer from "./components/Shimmer";

const ContactUs = React.lazy(()=>import("./components/ContactUs"));

const AppLayout = () => {
  return (
    // <React.Fragment> can also be used
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter ([{
  path: "/",
  element:<AppLayout/>,
  errorElement:<Error />,
  children: [
    {
      path: "/",
      element: <Body/>,
      
    },
    {
      path: "/about",
      element: <About/>,
      children:[{
        path:"profile",
        element: <ProfileFunction/>,
      }]},
    {
      path:"/contact",
      element:<Suspense fallback={<Shimmer/>}><ContactUs/></Suspense> ,
      
    },
    {
      path:"/restaurant/:id",
      element: <RestaurantDetails/>,
      
    }]
}])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
