import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const ChatPage = Loadable(lazy(() => import('views/pages/chatPage')));
const Homepage= Loadable(lazy(() => import('views/pages/homepage')));
// const Navbar= Loadable(lazy(() => import('views/pages/Navbarpage')));


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: '/chat',
      element: <ChatPage />
    },
  ]
};

export { MainRoutes};


const HomeRoutes = {

  path: '/',
  
  children: [
    {
      path: '/home',
      element: <Homepage />
    },
   
  ]

};


export  {HomeRoutes};
