import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { BookContext } from '../context/BookContext'
import Bookshelf from '../components/Bookshelf'

import { Helmet } from 'react-helmet'

const Home = () => {
  let navigate = useNavigate()
  const { books } = useContext(BookContext)

  return (
    <div className='list-books'>
      <Helmet title='HOME - MyReads' />
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        <div>
          <Bookshelf
            title='Currently Reading'
            bookList={books.filter((book) => book.shelf === 'currentlyReading')}
          />
          <Bookshelf
            title='Want to Read'
            bookList={books.filter((book) => book.shelf === 'wantToRead')}
          />
          <Bookshelf
            title='Read'
            bookList={books.filter((book) => book.shelf === 'read')}
          />
        </div>
      </div>
      <div className='open-search'>
        <button onClick={() => navigate('/search')}>Add a book</button>
      </div>
    </div>
  )
}

export default Home
