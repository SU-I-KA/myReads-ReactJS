import React from 'react'
import Book from './Book'

import PropTypes from 'prop-types'
import Loading from './Loading'

const Bookshelf = ({ title, bookList }) => {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{title}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {bookList.length > 0 ? (
            bookList.map((book) => {
              return <Book {...book} key={book.id} />
            })
          ) : (
            <Loading />
          )}
        </ol>
      </div>
    </div>
  )
}

Bookshelf.propTypes = {
  title: PropTypes.string,
  bookList: PropTypes.array,
}

export default Bookshelf
