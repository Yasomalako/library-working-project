import "./Books-Details.css";
import React,{useContext} from "react"
import { booksContext } from "../../../Context/BooksContext/Books-context";
import  TableUsers  from "../../Features/Table/Table";

function BooksDetails() {
  
  const {books,setBooks}=useContext(booksContext)
  return (
    <div className="books-details">
      <h1 data-testid="h1_books-detailsHeadline">Books-Details</h1>
      <TableUsers books={books}/>
     </div>
  );
};

export default BooksDetails;
