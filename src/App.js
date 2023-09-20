import React from 'react'
import './App.css'
import Header from '../src/components/Header'
import Sidebar from './components/Sidebar'
import Main_body from './components/Main_body'

const App = () => {
  return (
    <>
      <Header/>
      <div className="mainbody">
      <Sidebar/>
      <Main_body/>
      </div>
     
     
    </>
  
  )
}

export default App