import React, {useEffect, useRef} from 'react';
import './App.css';

function App() {

  const inputRef  = useRef(null);
  const searchRef = useRef(null);
  console.log(inputRef);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function searchKeyDown(e){
    if(e.key === "Enter"){
      searchRef.current.focus();
    }
  }

  function submitKeyDown(){
    alert('Submitted');
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Search your book</h1>
        <input type="text" onKeyDown={searchKeyDown}  ref={inputRef} id="name" name="name" required placeholder="Search a book..." minLength="1" maxLength="40" size="30"/>
      </header>
      <button onKeyDown={submitKeyDown} ref={searchRef}>Search</button>
    </div>
  );
}

export default App;
