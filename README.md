# MyReads Project

This is a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read.

## App Functionality

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

- Currently Reading
- Want to Read
- Read

![alt text](https://github.com/SU-I-KA/myReads-ReactJS/blob/master/preview/01.png?raw=true)

Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. Note that the default value for the control will always be the current shelf the book is in.

![alt text](https://github.com/SU-I-KA/myReads-ReactJS/blob/master/preview/02.png?raw=true)

The main page also has a link to `/search`, a search page that allows you to find books to add to your library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library.

![alt text](https://github.com/SU-I-KA/myReads-ReactJS/blob/master/preview/03.png?raw=true)

When a book is on a bookshelf, it will have the same state on both the main application page and the search page.

![alt text](https://github.com/SU-I-KA/myReads-ReactJS/blob/master/preview/04.gif?raw=true)

The search page also has a link to `/` (the root URL), which leads back to the main page.

When you navigate back to the main page from the search page, you will instantly see all of the selections you made on the search page in your library.

## Live Demo

You can find it in the link below:
[ud-my-reads](https://ud-my-reads.netlify.app/).

## General Structure

```bash
├── preview # Contains all preview imgs used in this file
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms.
├── package.json # npm package manager file.
├── public
│   ├── logo.png # Favicon for the app.
│   └── index.html
└── src
    ├── components
    |   ├── Book.js
    |   ├── Bookshelf.js
    |   └── Loading.js
    ├── pages
    |   ├── Home.js
    |   └── SearchPage.js
    ├── context
    |   └── BookContext.js
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of the app.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for the app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # This file is used for DOM rendering only.
```

## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in the app.

### `update`

Method Signature:

```js
update(book, shelf)
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
