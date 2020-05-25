import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Books from './Books'


function App() {

  const inputRef = useRef(null);
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);  

  //initial load only
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleChange(event){
    setBook(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    fetchData(); 
  }

  function fetchData(){
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}&maxResults=40`)
    .then(response => response.json())
    .then(data => {
      setResult(data.items);
    })
    .catch(err => console.log('error is ', err))   
  }


  return (
    <section className="App">
      <header>
        <h1>Book Search App</h1>
      </header>
      
      <form onSubmit={handleSubmit}>       
        <div>
          <input ref={inputRef} type="search" onChange={handleChange} id="name" placeholder="Search a book..." size="30"/>
        </div>
        <button type="submit" id="search">Search</button>
      </form>

      <div className="container">
        {result.map( (book, index) => (
          <Books key={index} index={index} book={book} />
        ))}
      </div>

    </section>
  )
}

export default App;
