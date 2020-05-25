import React from 'react';


function Books({ book, index }){
    return(
        <div key={index} className="book">

            <div className="title-book">{index + 1}. {book.volumeInfo.title} <span className="author">by {book.volumeInfo.authors}</span></div>

            <div className="categories">Categories: {book.volumeInfo.categories}</div>

            <div className="description">{book.volumeInfo.description}</div>

            {book.volumeInfo.imageLinks !== undefined &&
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
            }
            <hr />
        </div> 
    )
}

export default Books;