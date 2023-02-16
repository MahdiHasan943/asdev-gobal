import { createBrowserRouter } from "react-router-dom"
import Main from "../layout/main/Main"
import AboutUs from "../pages/aboutUs/AboutUs"
import Activities from "../pages/activities/Activities"
import Announcement from "../pages/announcement/Announcement"
import Community from "../pages/community/Community"
import Contact from "../pages/contact/Contact"
import Event from "../pages/event/Event"
import Home from "../pages/home/Home"


export const router = createBrowserRouter([
    
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/home',
                element:<Home></Home>
            },
            {
                path: '/about',
                element:<AboutUs></AboutUs>
            },
            {
                path: '/community',
                element:<Community></Community>
            },
            {
                path: '/activities',
                element:<Activities></Activities>
            },
            {
                path: '/announcements',
                element:<Announcement></Announcement>
            },
            {
                path: '/events',
                element:<Event></Event>
            },
            {
                path: '/contact',
                element:<Contact></Contact>
            },
            
            

        ]
    }
]) 