import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import * as BooksAPI from '../BooksAPI'

import { Helmet } from 'react-helmet'
import Book from '../components/Book'

const SearchPage = () => {
  let navigate = useNavigate()

  const [searchResults, setSearchResults] = useState([])
  const [query, setQuery] = useState('')
  const [msg, setMsg] = useState(null)

  const previousQuery = useRef({ query })

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (previousQuery.current.query !== query && query.length > 0) {
        const searchBooks = async () => {
          const results = await BooksAPI.search(query)
          if (results.error) {
            setSearchResults(null)
            setMsg('No Match, Try again')
            return
          }
          setMsg(null)
          console.log('here we are')
          setSearchResults(results)
        }

        searchBooks()
      } else if (previousQuery.current.query !== query && query.length === 0) {
        setMsg(null)
        setSearchResults(null)
      }
      previousQuery.current = { query }
    }, 450)
    return () => clearTimeout(timeout)
  }, [query])

  return (
    <div className='search-books'>
      <Helmet title='SEARCH - MyReads' />
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
          {(searchResults?.length > 0) & (query.length > 0) ? (
            searchResults?.map?.((book) => {
              return <Book {...book} key={book.id} />
            })
          ) : msg ? (
            <h4>{msg}</h4>
          ) : null}
        </ol>
      </div>
    </div>
  )
}

export default SearchPage
