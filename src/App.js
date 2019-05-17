import React from 'react'
import './App.css'

import Header from './components/header'
import Footer from './components/footer'
import Main from './components/main'

export default (props) => {
  return (
    <div className="App">
      <Header />

      <Main />

      <Footer />
    </div>
  )
}