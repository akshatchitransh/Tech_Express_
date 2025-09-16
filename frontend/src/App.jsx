import React from 'react'

import { BrowserRouter, Routes,Route } from 'react-router-dom'
import SignInForm from './auth/forms/SignInForm'
import SignUpForm from './auth/forms/SignUpForm'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import NewsArticle from './pages/NewsArticle'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/sign-in' element={<SignInForm />} />
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/about' element={<About />} />
        <Route path='/news' element={<NewsArticle />} />
      </Routes>
<Footer/>
      
    </BrowserRouter>

    
  )
}

export default App
