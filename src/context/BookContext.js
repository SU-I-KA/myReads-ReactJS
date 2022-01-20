import React, { useState, createContext, useEffect } from 'react'
import * as BooksAPI from '../BooksAPI'

export const BookContext = createContext()

export const BookContextProvider = (props) => {
  const [books, setBooks] = useState([])

  const getData = async () => {
    const response = await BooksAPI.getAll()
    console.log(response)
    setBooks(response)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <BookContext.Provider
      value={{
        books,
        setBooks,
      }}
    >
      {props.children}
    </BookContext.Provider>
  )
}
