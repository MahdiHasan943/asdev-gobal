import React,{lazy,Suspense} from 'react'

import { createBrowserRouter } from "react-router-dom"
const Error = lazy(() => import("../component/error/Error"));
const Login = lazy(() => import("../component/login&regiser/Login"));
const Register = lazy(() => import("../component/login&regiser/Register"));
const AboutUs = lazy(() => import("../pages/aboutUs/AboutUs"));
const Activities = lazy(() => import("../pages/activities/Activities"));
const Announcement = lazy(() => import("../pages/announcement/Announcement"));
const Main = lazy(() => import("../layout/main/Main"));
const Community = lazy(() => import("../pages/community/Community"));
const Contact = lazy(() => import("../pages/contact/Contact"));
const Event = lazy(() => import("../pages/event/Event"));
const Home = lazy(() => import("../pages/home/Home"));


// import  Error from "../component/error/Error"
// import Login from "../component/login&regiser/Login"
// import Register from "../component/login&regiser/Register"
// import Main from "../layout/main/Main"
// import AboutUs from "../pages/aboutUs/AboutUs"
// import Activities from "../pages/activities/Activities"
// import Announcement from "../pages/announcement/Announcement"
// import Community from "../pages/community/Community"
// import Contact from "../pages/contact/Contact"
// import Event from "../pages/event/Event"
// import Home from "../pages/home/Home"

<Suspense>
    
</Suspense>
export const router = createBrowserRouter([
 
    {
        path: '/',
        errorElement:<Suspense fallback={<h2>... loading</h2>}><Error></Error> </Suspense> ,
        element:<Suspense fallback={<h2>... loading</h2>}> <Main></Main></Suspense> ,
        children: [
            {
                path: '/',
                element:<Suspense fallback={<h2>... loading</h2>}><Home></Home></Suspense>
            },
            {
                path: '/home',
                element:<Suspense fallback={<h2>... loading</h2>}><Home></Home></Suspense>
            },
            {
                path: '/about',
                element:<Suspense fallback={<h2>... loading</h2>}><AboutUs></AboutUs></Suspense> 
            },
            {
                path: '/community',
                element:<Suspense fallback={<h2>... loading</h2>}><Community></Community></Suspense>
            },
            {
                path: '/activities',
                element:<Suspense fallback={<h2>... loading</h2>}><Activities></Activities></Suspense> 
            },
            {
                path: '/announcements',
                element:<Suspense fallback={<h2>... loading</h2>}><Announcement></Announcement></Suspense>
            },
            {
                path: '/events',
                element:<Suspense fallback={<h2>... loading</h2>}><Event></Event></Suspense>
            },
            {
                path: '/contact',
                element:<Suspense fallback={<h2>... loading</h2>}><Contact></Contact></Suspense>
            },
            {
                path: '/login',
                element:<Suspense fallback={<h2>... loading</h2>}><Login></Login></Suspense>
            },
            {
                path: '/register',
                element:<Suspense fallback={<h2>... loading</h2>}><Register></Register></Suspense>
            },
            
            

        ]
    }
]) 