import React, { useState, createContext, useEffect } from 'react'
import * as BooksAPI from '../BooksAPI'

export const BookContext = createContext()

export const BookContextProvider = (props) => {
  return (
    <BookContext.Provider value={{}}>{props.children}</BookContext.Provider>
  )
}
