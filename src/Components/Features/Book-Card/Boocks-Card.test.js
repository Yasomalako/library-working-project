import{render,screen} from "react-dom"
import BookCard from "./Book-Card"

describe("test books card",()=>{
test("cheack booksCards compo returns",()=>{
    render(<BookCard/>)
    const divElement = screen.getByTestId("bookCard")
    expect(divElement).toHaveTextContent("Card Book")
})
})

describe("test booksscreen",()=>{
    test("book screen headline",()=>{
        const divElement = screen.getByTestId("headLine_h1")
        expect(divElement)
    })
})