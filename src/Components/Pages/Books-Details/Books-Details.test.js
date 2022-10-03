import BooksDetails from "./Books-Details";
import { screen,render } from "@testing-library/react";

describe("cheack Booksdetils component",()=>{
    test("cheack bookdetails headline",()=>{
     const divElement = screen.getByTestId("h1_books-detailsHeadline")
     expect(divElement).toHaveTextContent("Books-Details")
    })
})