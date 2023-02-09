import Home from './components/Home';
import './App.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SearchResult from './components/SearchResult';
import Movie from './components/Movie';



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/search/:movie",
      element: <SearchResult/>,
    },
    {
      path: "/movie/:movieId",
      element: <Movie/>,
    },
  ]);

  return (
    <>
     
     <RouterProvider router={router} />
    </>
  );
}

export default App;
