import { useState } from 'react'
import { Route, Routes } from "react-router";
import Header from './components/header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegistrPage from './pages/RegistrPage';
import './App.css'

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/registr' element={<RegistrPage/>}/>
        <Route path='/login'  element={<LoginPage/>}/>
      </Routes>
    </>
  )
}

export default App
