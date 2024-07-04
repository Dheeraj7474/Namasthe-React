import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Error } from "./components/Error";
import { RestaurantMenu } from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
const AppLayout = ()=>(
    
    <div className="app">
        <UserContext.Provider value={{UserName:"Dheej"}}>
            <Header />
        </UserContext.Provider>
        <Outlet />
    </div>
    
    
)

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout />,
        children:[
            {
                path : "/",
                element : <Body />
            },
            {
                path : "/About",
                element : <About />
            },
            {
                path:"/Contact",
                element : <Contact/>
            },
            {
                path : "/restaurant/:resId",
                element : <RestaurantMenu />
            }
        ],
        errorElement:<Error />
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)