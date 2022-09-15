import React from 'react'
import BottomMenu from './bottom menu'
import Categories from './categories'
import Header from './header'
import "./home.scss"
import Popularcollection from './popularcollection'
import Search from './search'
const Home = () => {
  return (
    <div className='HardDrinkHomePage'>
      <Header/>
      <h2 className='greeting'>Good morning Abhi,</h2>
      <Search/>
      <Categories/>
      <Popularcollection/>
      <BottomMenu/>
    </div>
  )
}

export default Home