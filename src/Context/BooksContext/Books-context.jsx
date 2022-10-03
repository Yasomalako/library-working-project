import React, { useEffect } from "react";
import { useState, createContext } from 'react'
import getBooks from "../../Serivce/Boocks_Cards.service";

export const booksContext = createContext()

function BooksProvider({children}) {
    const [books, setBooks] = useState([])

    useEffect(()=>{getBooks()
    .then(res => setBooks(res))},[])
    console.log(books)

    return (
      <div className="booksProvider">
        <booksContext.Provider value={{books, setBooks}}>
          {children}
        </booksContext.Provider>
      </div>
    );
  }
  
  export default BooksProvider;
  