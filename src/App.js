import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import LogIn from './components/logIn/LogIn';
import SignUp from './signUp/SignUp';
import Courses from './components/courses/Courses';
import Home from './components/home/Home';
import Faq from './components/faq/Faq';
import Blog from './components/blog/Blog';
import Html from './components/coursePage/Html';
import Css from './components/coursePage/Css';
import Js from './components/coursePage/Js';
import React from './components/coursePage/React';
import Angular from './components/coursePage/Angular';
import Python from './components/coursePage/Python';
import Reacts from './components/coursePage/React';
import PageNotFound from './components/PageNotFound';
import PremiumPage from './components/premium/PremiumPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
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
        },
        {
          path: '/courseDetails/:id',
          loader: ({ params }) => fetch(`https://server-rana-web-dev.vercel.app/${params.id}`),
          element: <Courses></Courses>
        },
        {
          path: '/courseDetails/1',
          loader: () => fetch('https://server-rana-web-dev.vercel.app/category'),
          element: <Html></Html>
        },
        {
          path: '/courseDetails/2',
          loader: () => fetch('https://server-rana-web-dev.vercel.app/category'),
          element: <Css></Css>
        },
        {
          path: '/courseDetails/3',
          loader: () => fetch('https://server-rana-web-dev.vercel.app/category'),
          element: <Js></Js>
        },
        {
          path: '/courseDetails/4',
          loader: () => fetch('https://server-rana-web-dev.vercel.app/category'),
          element: <Reacts></Reacts>
        },
        {
          path: '/courseDetails/5',
          loader: () => fetch('https://server-rana-web-dev.vercel.app/category'),
          element: <Angular></Angular>
        },
        {
          path: '/courseDetails/6',
          loader: () => fetch('https://server-rana-web-dev.vercel.app/category'),
          element: <Python></Python>
        },
        {
          path: '/premium',
          element: <PremiumPage></PremiumPage>
        }
      ]
    },
    {
      path: '*',
      element: <PageNotFound></PageNotFound>
    }
  ])
  return (
    <div className="container-fluid">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
