import React from 'react'
import Nav from './Componets/Headercontent/Navbar/Nav'
import Hero from './Componets/Bodycontent/Hero/Hero'
import Banner from './Componets/Bodycontent/Banners/Banner'
import Bannertwo from './Componets/Bodycontent/Banners/Bannertwo'
import Bannerthree from './Componets/Bodycontent/Banners/Bannerthree'
import Dashboard from './Componets/Dashboard/Dashboard'
import Bannerfour from './Componets/Bodycontent/Banners/Bannerfour';
import Bannerfive from './Componets/Bodycontent/Banners/Bannerfive';
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Componets/Signup/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
  return <>
  
  <main className="overflow-x-hidden">
     
     <Nav />
     <Hero />
     <Banner />
     <Bannertwo />
     <Bannerthree />
     <Bannerfour />
     <Bannerfive />
     <Dashboard  />
     <Signup />
     
   

    

    
     

  </main>
  
  </>
    
  
}

export default App