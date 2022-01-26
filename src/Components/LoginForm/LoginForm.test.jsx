import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from './LoginForm';
import {Toaster} from 'react-hot-toast';

describe('LoginForm', () =>{
    test('renders LoginForm component', () => {
        render(<LoginForm/>)
        
        expect(screen.getByText(/Username/)).toBeInTheDocument();
        expect(screen.getByText(/Password/)).toBeInTheDocument();
    });

    test('VALID TEST | valid username and password', () => {
        render(<LoginForm/>)
        fireEvent.input(
            screen.getByRole(
                "textbox", 
                {name: /username/i}),
            {target: {value: "sabrina23@gmail.com"}}
        );
        fireEvent.input(
            screen.getByRole(
                "textbox", 
                {name: /password/i}).toHaveAttribute('type', 'password'),
            {target: {value: "password"}}
        );

        //expect
        expect(screen.getByLabelText(/Username/)).toHaveValue("sabrina23@gmail.com")
        expect(screen.getByLabelText(/Password/)).toHaveValue("password")
    });

    test('INVALID TEST | empty username and password', () => {
        render(<LoginForm/>)
        fireEvent.input(
            screen.getByRole(
                "textbox", 
                {name: /username/i}),
            {target: {value: ""}}
        );
        fireEvent.input(
            screen.getByRole(
                "textbox", 
                {name: /password/i}),
            {target: {value: ""}}
        );

        //expect
        expect(screen.getByText('Username tidak boleh kosong')).toBeInTheDocument();
        expect(screen.getByText('Password tidak boleh kosong')).toBeInTheDocument();
        expect(screen.getByLabelText(/Username/)).toHaveValue("")
        expect(screen.getByLabelText(/Password/)).toHaveValue("")
    });

    test('INVALID TEST | show toast when invalid data submitted', () => {
        render(
            <>
                <Toaster/>
                <LoginForm/>
            </>
        )
        jest.spyOn(window, 'alert').mockImplementation(() => {})

        fireEvent.input(
            screen.getByRole(
                "textbox", 
                {name: /username/i}),
            {target: {value: "sabrina23"}}
        );
        fireEvent.input(
            screen.getByRole(
                "textbox", 
                {name: /password/i}),
            {target: {value: "sabrina23gmail.com"}}
        );
        
        //submit
        fireEvent.submit(screen.getByText("Login"))

        //expect
        expect(screen.getAllByText).toBeInTheDocument("masih ada data yg salah!");
        expect(screen.getByLabelText(/Username/)).toHaveValue("sabrina23")
        expect(screen.getByLabelText(/Password/)).toHaveValue("sabrina23gmail.com")
    });
    
})