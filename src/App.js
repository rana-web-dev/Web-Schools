import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import LogIn from './components/logIn/LogIn';
import SignUp from './signUp/SignUp';
import Courses from './components/courses/Courses';
import Home from './components/home/Home';
import Faq from './components/faq/Faq';
import Blog from './components/blog/Blog';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/faq',
          element: <Faq></Faq>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/login',
          element: <LogIn></LogIn>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/courses',
          loader: () => fetch('https://server-rana-web-dev.vercel.app/'),
          element: <Courses></Courses>
        }
      ]
    }
  ])
  return (
    <div className="container-fluid">
      <RouterProvider router={router}></RouterProvider>  
    </div>
  );
}

export default App;
