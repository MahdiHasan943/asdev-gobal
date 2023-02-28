import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import GoToTop from './component/BackToTop/GoToTop';
import { router } from './route/routes';
import { toast, Toaster } from 'react-hot-toast';
import { LazyLoadImage } from 'react-lazy-load-image-component';


function App() {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
      setLoading(true);
      setTimeout(() => {
          setLoading(false)
      },1000)
      
  }, [])


  return (
    <div className="App shadow-md   scroll-smooth bg-[white] max-w-[1920px] mx-auto">
     
      {loading ?
        <div className='flex justify-center items-center h-[100vh] w-full'>
          
          <InfinitySpin width='200' color="#756486" />
        </div> :
            <>
     
        <RouterProvider router={router}>
     
        </RouterProvider>
          <GoToTop />
          <Toaster></Toaster>

        
</>
       
           
           }
      

     
    </div>
     

  );
}

export default App;
