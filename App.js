import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./src/components/Header";
import Home from "./src/components/Home";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Footer from "./src/components/Footer";
import Services from "./src/components/Services";
import Countries from "./src/components/Countries";
// import ServicesOption from './src/components/ServicesOption';
import { RouterProvider, createBrowserRouter, Outlet, useLocation } from 'react-router-dom';
import Error from "./src/components/Error";
import PrepExams from './src/components/PrepExam';
import IELTS from './src/components/IELTS';
import TOEFL from './src/components/TOEFL';
import SAT from './src/components/SAT';
import GRE from './src/components/GRE';
import GMAT from './src/components/GMAT';
import PTE from './src/components/PTE';
import ContactUs from './src/components/contactUs';
import RussiaMbbs from './src/components/RussiaMbbs';
const App = () => {
  const location = useLocation();
  // const pathnames = location.pathname.split('/').filter((x) => x);
  return (
    <div>
        <Header/>
        {/* <Breadcrumb pathnames={pathnames} /> */}
        <Outlet/>
        <Footer/>
        
    </div>
  )
}

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/services",
        element:<Services/>
      },
      {
        path:"/countries",
        element:<Countries/>
      },
      {
        path: "/prepexams",
        element: <PrepExams />,
      },
      {
        path: "/ielts",
        element: <IELTS />,
      },
      {
        path: "/toefl",
        element: <TOEFL />,
      },
      {
        path: "/sat",
        element: <SAT/>,
      },
      {
        path: "/gre",
        element: <GRE />,
      },
      {
        path: "/gmat",
        element: <GMAT />,
      },
      {
        path: "/pte",
        element: <PTE/>,
      },
      {
        path:"/russiambbs",
        element:<RussiaMbbs/>,
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path: "/contact-us",
        element: <ContactUs />
      }
    ],
    errorElement:<Error/>
  },
])

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);