import Home from "./Home"
import { screen,render } from "@testing-library/react"

describe("test Home component",()=>{
    test(("cheack home Headile"),()=>{
     render(<Home/>)
     const divElement = screen.getByTestId("headLine")
     expect(divElement).toHaveTextContent("Home")
    })
})