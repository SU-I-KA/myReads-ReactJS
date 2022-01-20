import React, { useRef, useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

// import { BookContext } from '../context/BookContext'

import * as BooksAPI from '../BooksAPI'

import { Helmet } from 'react-helmet'
import Book from '../components/Book'

const SearchPage = () => {
  let navigate = useNavigate()
  //   const { books } = useContext(BookContext)

  const [searchResults, setSearchResults] = useState([])
  const [query, setQuery] = useState('')
  const [msg, setMsg] = useState(null)

  const previousQuery = useRef({ query })

  const searchBooks = useCallback(
    async () => {
      const results = await BooksAPI.search(query)
      console.log(results)
      if (results.error) {
        setSearchResults(null)
        setMsg('No Match, Try again')
        return
      }
      setMsg(null)
      console.log('here we are')
      setSearchResults(results)
    },
    [query]
  )

  useEffect(
    () => {
      if (previousQuery.current.query !== query && query.length > 0) {
        const timeout = setTimeout(() => {
          try {
            searchBooks()
          } catch (error) {
            console.log(error)
          }
        }, 250)
        previousQuery.current = { query }
        return () => clearTimeout(timeout)
      } else if (query.length < 1) {
        setSearchResults(null)
        setMsg(null)
        previousQuery.current = { query }
      }
    },
    [query, searchBooks]
  )

  return (
    <div className='search-books'>
      <Helmet title='SEARCH PAGE' />
      <div className='search-books-bar'>
        <button className='close-search' onClick={() => navigate('/')}>
          Close
        </button>
        <div className='search-books-input-wrapper'>
          <input
            type='text'
            placeholder='Search by title or author'
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className='search-books-results'>
        <ol className='books-grid'>
          {searchResults?.length > 0 &&
            searchResults?.map?.((book) => {
              return <Book {...book} key={book.id} />
            })}
          {msg && <h4>{msg}</h4>}
        </ol>
      </div>
    </div>
  )
}

export default SearchPage
