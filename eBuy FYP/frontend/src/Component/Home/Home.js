import React from 'react'
import TopHeader from './TopHeader'
import Navbar from './Navbar'
import Categories from './Categories'
import Slider from './Slider'

import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'
import Category from '../Category'
import Footer from './Footer'

function Home() {
  return (
    <>
        <TopHeader />
        <Navbar />
        
        <Categories />
        <Slider />
        <Category/>
        <Category/>
        <Category/>

        <Footer/>
    </>
  )
}

export default Home