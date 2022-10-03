import BooksScreen from "./Books-screen";
import { screen,render } from "@testing-library/react";

describe("test Booksscreen component",()=>{
    test("cheack the headline",()=>{
       render(<BooksScreen/>)
       const divElement = screen.getByTestId("headLine_h1")
       expect(divElement).toHaveTextContent("Books-screen")
    })
})