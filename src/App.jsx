import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {

  const inputRef = useRef(null);
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);  

  //initial load only
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleChange(event){
    const book = event.target.value;
    setBook(book);
  }

  function handleSubmit(event){
    event.preventDefault();

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}&maxResults=40`)
      .then(response => response.json())
      .then(data => {
        setResult(data.items);
      })
      .catch(err => console.log('error is ', err))   
  }


  return (
    <div className="App">
      <header>
        <h1>Book Search App</h1>
      </header>

      <form onSubmit={handleSubmit}>       
        <div>
          <input ref={inputRef} type="text" onChange={handleChange} id="name" placeholder="Search a book..." size="30"/>
        </div>
        <button type="submit" id="search">Search</button>
      </form>


      {result.map( (book, index) => (
          <div key={index} className="title-book">

            <div className="title-book-details">{index + 1}.{book.volumeInfo.title} <span className="title-book-details2">by {book.volumeInfo.authors}</span></div>

            <div className="description">{book.volumeInfo.description}</div>

            <div className="categories">Categories: {book.volumeInfo.categories}</div>

            {book.volumeInfo.imageLinks !== undefined &&
              <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
            }

          </div>
      ))}
    </div>
  )
}

export default App;
