
import React, {useState} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";


export function Navbar() {


    const [headerToggle, setHeaderToggle] = useState(false);
    const [authModal, setAuthModal] = useState(false);
    const [loginModal, setLoginModal] = useState(false);


    const {
        user,
        isAuthenticated,
        loginWithRedirect,
        getAccessTokenSilently,
        getAccessTokenWithPopup,
        logout,
    } = useAuth0();

    const logoutWithRedirect = () =>
        logout({
            returnTo: window.location.origin,
        });


    const login = () => loginWithRedirect();
    const signUp = () => loginWithRedirect({ screen_hint: 'signup' });



    const location = useLocation();
    const isActive = (path) => location.pathname === path;



    return (

<>
<header className="wrapper border-b-[1px] border-solid border-[#2424241A]">
{headerToggle && (
  <div onClick={() => setHeaderToggle(false)} className="overlay"></div>
)}
<div className="contain justify-between items-center h-[60px] ">
<Link to={"/"}>
<svg
              width="250"
              height="28"
              viewBox="0 0 130 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
                </svg>
    </Link>

  <nav
    className={`flex justify-start items-start pt-[6rem] sm:z-0 ${
      authModal ? "z-[70]" : "z-[89]"
    }  border-l-[2px] border-solid border-[#2424241A] sm:border-none sm:p-0 h-full sm:h-auto sm:items-center gap-7 bg-white sm:bg-transparent sm:gap-4 md:gap-6 sm:static transition-all duration-1000 fixed top-0 ${
      headerToggle ? "right-0" : "-right-[700px]"
    } sm:flex-row flex-col w-full max-w-[440px] sm:w-auto sm:max-w-full`}
  >
  {!isAuthenticated && 
  <>
    <p
      onClick={() => {
        setHeaderToggle(false);
        // setAuthModal(true);
        // setLoginModal(false);
        signUp()
      }}
      href="#"
      className="text-black700 cursor-pointer px-5 sm:p-0 text-lg sm:text-sm font-medium no-underline"
    >
      Sign Up
    </p>

<a
              onClick={() => setHeaderToggle(false)}
              href="#"
              className="text-black700 px-5 sm:p-0 text-lg sm:text-sm font-medium no-underline"
            >
              Chrome Plugin
            </a> 
            <a
              onClick={() => setHeaderToggle(false)}
              href="#"
              className="text-black700 px-5 sm:p-0 text-lg sm:text-sm font-medium no-underline"
            >
              Go Pro
            </a> 

            </>
    }


    <div className="h-[2px] sm:h-[16px] w-full sm:w-[2px] bg-[#2424241A]"></div>
    {!isAuthenticated && 
    <p
      onClick={() => {
        setHeaderToggle(false);
        login()
        // setAuthModal(true);
        // setLoginModal(true);
      }}
      href="#"
      className="px-5 sm:p-0 cursor-pointer text-lg sm:text-sm font-bold text-candyRed no-underline"
    >
      Login
    </p>
    }
  {isAuthenticated && 
    <p
      onClick={() => {
        setHeaderToggle(false);
        logoutWithRedirect()
        // setAuthModal(true);
        // setLoginModal(true);
      }}
      href="#"
      className="px-5 sm:p-0 cursor-pointer text-lg sm:text-sm font-bold text-candyRed no-underline"
    >
      Logout
    </p>
    }

  </nav>
  {headerToggle ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#242424"
      className={`w-6 h-6 relative ${
        authModal ? "z-[70]" : "z-[90]"
      } cursor-pointer sm:hidden block`}
      onClick={() => setHeaderToggle(false)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#242424"
      className={`w-6 h-6 relative ${
        authModal ? "z-[70]" : "z-[90]"
      } cursor-pointer sm:hidden block`}
      onClick={() => setHeaderToggle(true)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
      />
    </svg>
  )}
</div>
</header>
</>

    );
}
