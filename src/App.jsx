import React from 'react';
import './App.css'
import Nav from './components/nav'
import Footer from './components/footer'
import HeaderIndex from './components/headerindex'

function App() {

  return (
    <>
      <div className="min-h-screen dark:bg-gray-700">
      <Nav />
      <HeaderIndex />
      <Footer />
    </div>
    </>
  )
}

export default App
