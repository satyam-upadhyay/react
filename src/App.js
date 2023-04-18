import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import Body from "./components/Body";
import React, { Suspense, useState } from "react";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantDetails from "./components/RestaurantDetails";
import ProfileFunction from "./components/ProfileFunction";
import Shimmer from "./components/Shimmer";
import UserContext from "./components/utils/UserContext";

const ContactUs = React.lazy(() => import("./components/ContactUs"));

const AppLayout = () => {
  const [user,setUser]= useState({
    name: "Satyam Upadhyay",
    email: "satyam.upadhyay@gmail.com",
  })
  const [user1,setUser1]= useState({
    name: "User 2",
    email: "user2@gmail.com",
  })
  return (
    // <React.Fragment> can also be used
    <>
    <UserContext.Provider value={{
      user:user,
      setUser:setUser
    }}>
      <UserContext.Provider value={{
        user:user1,
        setUser:setUser1
      }}>
        <Header />
      </UserContext.Provider>
      
      <Outlet />
      <Footer />
    </UserContext.Provider>
      
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <ProfileFunction />,
          },
        ],
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Shimmer />}>
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetails />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
