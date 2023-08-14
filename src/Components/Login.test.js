import { fireEvent, render, screen } from "@testing-library/react"
import Login from "./Login"

test('check if Username placeholder is there',()=>{
    render(<Login/>)
    const user = screen.getByPlaceholderText('userName');
    expect(user).toBeInTheDocument();
})

test('check if button is there',()=>{
    render(<Login/>)
    const btn = screen.getByRole('button');
    // expect(btn).toBeVisible();
    expect(btn).toBeInTheDocument();
})

test('to check if username is empty',()=>{
    render(<Login/>)
    const name = screen.getByPlaceholderText('userName');
    expect(name.value).toBe("");
})

test('to check if password is empty',()=>{
    render(<Login/>)
    const psw = screen.getByPlaceholderText('passWord');
    expect(psw.value).toBe("");
})

test('Button is disabled when there is no Data',()=>{
    render(<Login/>)
    const btn = screen.getByRole('button');
    expect(btn).toBeDisabled();
})

test('check for correct data received for userName',()=>{
    render(<Login/>)
    const user = screen.getByPlaceholderText('userName');
    const data = "Anuj";
    fireEvent.change(user,{target:{value:data}});
})