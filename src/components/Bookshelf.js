import React from 'react'
import Book from './Book'

const Bookshelf = ({ title, bookList }) => {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{title}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {bookList.length > 0 &&
            bookList.map((book) => {
              return <Book {...book} key={book.id} />
            })}
        </ol>
      </div>
    </div>
  )
}

export default Bookshelf
