import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/Nav';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import LogIn from './components/logIn/LogIn';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/login',
          element: <LogIn></LogIn>
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
