import { useState } from "react";
import axios from 'axios';
import { useFormik } from 'formik';
import { useLogin } from "./Login-Hook";

export function Login() {

    const [handleLogin, user] = useLogin();

    const formik = useFormik({
        initialValues: {
            email: '', //'yariv@nerdeez.com',
            password: '' //'12345678'
        },
        onSubmit: values => {
            handleLogin(values.email, values.password)
            
            // axios({
            //     method: 'post',
            //     data: values,
            //     url: 'https://academeez-login-ex.herokuapp.com/api/users/login',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            // }).then((response) => {
            //     setUser({ firstName: response.data.firstName, lastName: response.data.lastName })
            // }, (error) => {
            //     alert("שם או סיסמא שגויים")
            //     console.log(error);
            // });
        },
      });

    return (
        <form onSubmit={formik.handleSubmit}>
            <input
                value={formik.values.email}
                type="email"
                name="email"
                onChange={formik.handleChange}
                placeholder="Enter your email"
            />
            <input
                value={formik.values.password}
                type="password"
                name="password"
                onChange={formik.handleChange}
                placeholder="Enter your password"
            />

            <button type="submit">Login</button>

            {
                user && <h1>Hello {user.firstName} {user.lastName} you are now logged in</h1>
            }
        </form>
    )
}