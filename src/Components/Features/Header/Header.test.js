import Header from "./Header";
import { screen,render } from "@testing-library/react";

describe("Cheack header component",()=>{
    test("test the headline",()=>{
      render(<Header/>)
      const divElement = screen.getByTestId("")
      expect(divElement)
    })
})