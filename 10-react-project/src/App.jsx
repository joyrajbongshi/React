import { useState } from 'react'
import {createBrowserRouter} from "react-router-dom";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home/>
    },
    {
      path:"/about",
      element: <About/>
    },
    {
      path: "/dashboard",
      element: <Dashboard/>
    }
  ]
);

import './App.css'
import About from './components/About';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

function App() {
 

  return (
    <div>
      <h1>
        Hello Joy
      </h1>
    </div>
  )

}

export default App
