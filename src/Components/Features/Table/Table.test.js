import { Table } from "@mui/material"
import { render,screen} from "@testing-library/react"

describe("cheack table component ",()=>{
    test("cheack the head line",()=>{
        render(<Table/>)
        const divElement = screen.getByTestId("tableUsers_headline")
        expect(divElement).toHaveTextContent("Books-Details-Table")
    })
})