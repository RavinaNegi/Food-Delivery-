import React,{lazy,Suspense, useEffect} from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header';
import Body from './components/Body';
import AoutUs from './components/AoutUs';
import RestMe from './components/RestMe';
import Error from './components/Error';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import RestMe from './components/RestMe';
import UserContext from './utils/UserContext';
import { useState,useEffect } from 'react';
import { Provider } from 'react-redux';
import appStore from '../REDUX/appStore';
import Cart from './components/Cart';



const Grocery=lazy(()=>import('./components/Grocery'));





const AppLayout = () => {
  const [userInfo,setUserInfo]=useState();
  useEffect(()=>{
    const data={name:"Akshay Saini",}
  setUserInfo(data.name);},[]);
 
  
  return (

    <Provider store={appStore}>
    <UserContext.Provider value={{userName:userInfo,setUserInfo}}>
    <div className="app">
      <Header />
      <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
    
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
      },
      {
      path:"/aout",
      element:<AoutUs/>
      },
      {
        path:"/cart",
        element:<Cart/>
        },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>currently the page is loading</h1>}><Grocery/></Suspense>,
     
    },
    {
      path:"/restaurant/:resId",
      element:<RestMe/>,
    }],
    errorElement:<Error/>,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
