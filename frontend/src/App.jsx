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
import PrivateRoute from './components/shared/PrivateRoute'
import CreatePost from './pages/CreatePost'
import AdminPrivateRoute from './components/shared/AdminPrivateRoute'
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/sign-in' element={<SignInForm />} />
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path='/' element={<Home />} />
          <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        
        <Route element={<AdminPrivateRoute />}>
          <Route path="/create-post" element={<CreatePost />} />
         {/* <Route path="/update-post/:postId" element={<EditPost />} /> */}
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='/news' element={<NewsArticle />} />
      </Routes>
<Footer/>
      
    </BrowserRouter>

    
  )
}

export default App
