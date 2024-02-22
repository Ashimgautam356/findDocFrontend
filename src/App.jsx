import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './Pages/pageLayout/Layout'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Layout></Layout>}></Route>
      
      </Routes>
    </BrowserRouter>
  )
}

export default App