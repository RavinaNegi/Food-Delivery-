import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header';
import Body from './components/Body';
import AoutUs from './components/AoutUs';
import RestMe from './components/RestMe';
import Error from './components/Error';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import RestMe from './components/RestMe';


import { lazy } from 'react';
const Grocery=lazy(()=>import('./components/Grocery')
);


const currYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Copyright &copy; {currYear}, Made with 💗 by <strong>Vasu</strong>
      </p>
    </footer>
  );
};

const AppLayout = () => {
  console.log(<Body />);
  return (
    <div className="app">
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
};
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },{
      path:"/aout",
      element:<AoutUs/>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>currently the page is loading</h1>}><Grocery/></Suspense>,
     
    },{
      path:"/restaurant/:resId",
      element:<RestMe/>,
    }],
    errorElement:<Error/>,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
