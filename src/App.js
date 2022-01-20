import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'

import { BookContextProvider } from './context/BookContext'

import './App.css'

const App = () => {
  return (
    <div className='App'>
      <BookContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<SearchPage />} />
          </Routes>
        </Router>
      </BookContextProvider>
    </div>
  )
}

export default App
