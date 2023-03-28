import React,{lazy,Suspense} from 'react'
import { InfinitySpin } from 'react-loader-spinner';
import { createBrowserRouter } from "react-router-dom"

const  Abuja = lazy(() => import("../pages/communityBtn/Abuja"));
const  ChapterUk = lazy(() => import("../pages/communityBtn/ChapterUk"));
const  ExAsaba = lazy(() => import("../pages/communityBtn/ExAsaba"));
const  Lagos = lazy(() => import("../pages/communityBtn/Lagos"));
const Ph = lazy(() => import("../pages/communityBtn/Ph"));
const Us = lazy(() => import("../pages/communityBtn/Us"));
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


export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <Suspense fallback={ <div className='flex justify-center items-center h-[100vh] w-full'>
          
        <InfinitySpin width='200' color="#756486" />
      </div>}><Error></Error> </Suspense>,
        element: <Suspense fallback={ <div className='flex justify-center items-center h-[100vh] w-full'>
          
        <InfinitySpin width='200' color="#756486" />
      </div>}> <Main></Main></Suspense>,
        children: [
            {
                path: '/',
                element: <Suspense fallback={ <div className='flex justify-center items-center h-[100vh] w-full'>
                <InfinitySpin width='200' color="#756486" />
              </div>}><Home></Home></Suspense>
            },
            {
                path: '/home',
                element: <Suspense fallback={ <div className='flex justify-center items-center h-[100vh] w-full'>
          
                <InfinitySpin width='200' color="#756486" />
              </div>}><Home></Home></Suspense>
            },
            {
                path: '/about',
                element: <Suspense fallback={ <div className='flex justify-center items-center h-[100vh] w-full'>
          
                <InfinitySpin width='200' color="#756486" />
              </div>}><AboutUs></AboutUs></Suspense>
            },
            {
                path: '/community',
                element: <Suspense fallback={ <div className='flex justify-center items-center h-[100vh] w-full'>
          
                <InfinitySpin width='200' color="#756486" />
              </div>}><Community></Community></Suspense>
            },
            {
                path: '/activities',
                element: <Suspense fallback={ <div className='flex justify-center items-center h-[100vh] w-full'>
          
                <InfinitySpin width='200' color="#756486" />
              </div>}><Activities></Activities></Suspense>
            },
            {
                path: '/announcements',
                element: <Suspense fallback={ <div className='flex justify-center items-center h-[100vh] w-full'>
          
                <InfinitySpin width='200' color="#756486" />
              </div>}><Announcement></Announcement></Suspense>
            },
            {
                path: '/events',
                element: <Suspense fallback={ <div className='flex justify-center items-center h-[100vh] w-full'>
          
                <InfinitySpin width='200' color="#756486" />
              </div>}><Event></Event></Suspense>
            },
            {
                path: '/contact',
                element: <Suspense fallback={ <div className='flex justify-center items-center h-[100vh] w-full'>
          
                <InfinitySpin width='200' color="#756486" />
              </div>}><Contact></Contact></Suspense>
            },
            {
                path: '/login',
                element: <Suspense fallback={ <div className='flex justify-center items-center h-[100vh] w-full'>
          
                <InfinitySpin width='200' color="#756486" />
              </div>}><Login></Login></Suspense>
            },
            {
                path: '/register',
                element: <Suspense fallback={ <div className='flex justify-center items-center h-[100vh] w-full'>
          
                <InfinitySpin width='200' color="#756486" />
              </div>}><Register></Register></Suspense>
          },

          {
            path: '/exasaba',
            element: <Suspense fallback={ <div className='flex justify-center items-center h-[100vh] w-full'>
      
            <InfinitySpin width='200' color="#756486" />
          </div>}><ExAsaba></ExAsaba></Suspense>
          },

          {
            path: '/lagos',
            element: <Suspense fallback={ <div className='flex justify-center items-center h-[100vh] w-full'>
            <InfinitySpin width='200' color="#756486" />
          </div>}><Lagos></Lagos></Suspense>
          },
          
          {
            path: '/abuja',
            element: <Suspense fallback={ <div className='flex justify-center items-center h-[100vh] w-full'>
      
            <InfinitySpin width='200' color="#756486" />
          </div>}><Abuja></Abuja></Suspense>
          }, 
          {
            path: '/phchapter',
            element: <Suspense fallback={ <div className='flex justify-center items-center h-[100vh] w-full'>
      
            <InfinitySpin width='200' color="#756486" />
          </div>}><Ph></Ph></Suspense>
        },       
        {
          path: '/uschapter',
          element: <Suspense fallback={ <div className='flex justify-center items-center h-[100vh] w-full'>
    
          <InfinitySpin width='200' color="#756486" />
        </div>}><Us></Us></Suspense>
      },
      {
        path: '/ukchapter',
        element: <Suspense fallback={ <div className='flex justify-center items-center h-[100vh] w-full'>
  
        <InfinitySpin width='200' color="#756486" />
      </div>}><ChapterUk></ChapterUk></Suspense>
    },    
        ]
    }])