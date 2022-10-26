import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import LogIn from './components/logIn/LogIn';
import SignUp from './signUp/SignUp';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/login',
          element: <LogIn></LogIn>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
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
