import React from 'react'
import './global.css'
import Home from './pages/home'
import NavBar from './pages/navbar'
import Skills from './pages/skills'

export default function App(){
    return(
        <>
        <NavBar />
        <Home />
        <Skills />
        </>
    )
}