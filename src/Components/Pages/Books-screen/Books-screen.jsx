import "./Books-screen.css";
import React, {useContext} from "react";
import BookCard from "../../Features/Book-Card/Book-Card";
import { booksContext } from "../../../Context/BooksContext/Books-context";



function BooksScreen() {
const {books,setBooks} = useContext(booksContext)
  
  return (
    <div className="books-screen">
      <h1 className="h1_BooksScreen" data-testid="headLine_h1">Books-screen</h1>
      <br/>
      {books?.map((books)=> <BookCard books={books}/>)}
    </div>
  );
};

export default BooksScreen;
