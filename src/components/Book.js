import React, { useContext, useEffect, useState } from 'react'
import { update, get } from '../BooksAPI'
import { BookContext } from '../context/BookContext'

const Book = ({ id, title, authors, imageLinks }) => {
  const { books, setBooks } = useContext(BookContext)

  const [loading, setLoading] = useState(true)
  const [shelf, setShelf] = useState('none')

  const updateShelf = async (e) => {
    const value = e.target.value
    console.log(value)
    await update({ id }, value)
    const bookAleardyShelfed = books.find((book) => book.id === id)
    let newShelfedBooks = null
    if (bookAleardyShelfed) {
      newShelfedBooks = books.map((book) => {
        if (book.id === id) {
          return { ...book, shelf: value }
        }
        return book
      })
    } else {
      const newBook = await get(id)
      const data = { ...newBook, shelf: value }
      newShelfedBooks = [...books, data]
    }

    setBooks(newShelfedBooks)
    console.log(newShelfedBooks)
  }

  useEffect(
    () => {
      const bookAleardyShelfed = books.find((book) => book.id === id)
      if (bookAleardyShelfed) {
        setShelf(bookAleardyShelfed?.shelf)
      }
      setLoading(false)
    },
    [books, id]
  )

  return (
    <li>
      {!loading && (
        <div className='book'>
          <div className='book-top'>
            <div
              className='book-cover'
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${imageLinks?.thumbnail})`,
              }}
            />
            <div className='book-shelf-changer'>
              <select onChange={updateShelf} defaultValue={shelf}>
                <option value='move' disabled>
                  Move to...
                </option>
                <option value='currentlyReading'>Currently Reading</option>
                <option value='wantToRead'>Want to Read</option>
                <option value='read'>Read</option>
                <option value='none'>None</option>
              </select>
            </div>
          </div>
          <div className='book-title'>{title}</div>
          <div className='book-authors'>
            {authors?.length > 1 ? authors?.join(' & ') : authors?.[0]}
          </div>
        </div>
      )}
    </li>
  )
}

export default Book
