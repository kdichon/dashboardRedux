import React from 'react'
import { logout } from '../../commonjs/auth'
import NavGauche from './common/NavGauche'
import NavBar from './common/NavBar'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from './common/Layout';
import Category from './Category';
import Home from './Home';
import NoMatch from '../NoMatch';
import Question from './Question';


const Private = () => {
  return (
   <>
  
 <NavGauche /> 
<div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
 <NavBar />

    <div className="px-6 pt-6 2xl:container">
   
    {/* Container */}

    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path='/category' element={<Category />} />
        <Route path='/question' element={<Question />} />
        <Route path='*' element={<NoMatch />} />

      </Route>
    </Routes>





    </div>
</div>
   
   </>
  )
}

export default Private



