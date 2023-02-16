import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './route/routes';

function App() {
  return (
    <div className="App max-w-[1920px] mx-auto">
     
      <RouterProvider router={router}></RouterProvider>

     
    </div>
  );
}

export default App;
