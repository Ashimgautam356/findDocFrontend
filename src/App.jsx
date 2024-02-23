import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './Pages/pageLayout/Layout'
import LandingPage from './Pages/page/LandingPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Layout></Layout>}>
          <Route path='/' index element={<LandingPage />}></Route>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App