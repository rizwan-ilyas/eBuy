import React from 'react'
import TopHeader from './TopHeader'
import Navbar from './Navbar'
import Categories from './Categories'
import Slider from './Slider'
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'


function Home() {
  return (
    <>
        <TopHeader />
        <Navbar />
        <Categories />
        <Slider />
    </>
  )
}

export default Home