import axios from 'axios';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useLogin() {

    const [userDetails, setUser] = useState(null)

    const navigate = useNavigate (null);

    const handleLogin = async (userName, passWord) => {
        const values = {
            email: userName,
            password: passWord
        }
        const result = await axios({
            method: 'post',
            data: values,
            url: 'https://academeez-login-ex.herokuapp.com/api/users/login',
            headers: {
                'Content-Type': 'application/json',
            },
        }).finally({
           
        })


        setUser(result.data)
    }
navigate ('/TodoList')
    return [handleLogin,  userDetails]   
};