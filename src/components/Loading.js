import React from 'react'

const Loading = () => {
  const loop = Array.from(Array(3).keys())
  return (
    <ol className='books-grid'>
      {loop.map((item) => {
        return (
          <li key={item}>
            <div className='book'>
              <div className='book-top'>
                <div
                  className='image'
                  style={{
                    width: 128,
                    height: 193,
                  }}
                />
                {/* <div className='book-shelf-changer'>
                  <select>
                    <option value='move' disabled>
                      Move to...
                    </option>
                    <option value='currentlyReading'>Currently Reading</option>
                    <option value='wantToRead'>Want to Read</option>
                    <option value='read'>Read</option>
                    <option value='none'>None</option>
                  </select>
                </div> */}
              </div>
              <div className='text-line'></div>
              <div className='text-line'></div>
            </div>
          </li>
        )
      })}
    </ol>
  )
}

export default Loading
