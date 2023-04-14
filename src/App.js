import ReactDOM from "react-dom/client";
import {Header} from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import RestaurantDetails from "./components/RestaurantDetails";
import ProfileClass from "./components/ProfileClass";

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
        element: <ProfileClass name="satyam-upadhyay"/>,
      }]},
    {
      path:"/contact",
      element: <ContactUs/>,
      
    },
    {
      path:"/restaurant/:id",
      element: <RestaurantDetails/>,
      
    }]
}])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
