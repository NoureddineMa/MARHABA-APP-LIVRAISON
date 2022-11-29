import {render , fireEvent } from "@testing-library/react";
import Login from "../login";
import { BrowserRouter } from "react-router-dom";

describe("login",() => {
    test("Login form should be in he document", () => {
        
        const component = render(<BrowserRouter><Login /></BrowserRouter>);
        // console.log(component);
        expect(component).toBeInDocument()
    })
})