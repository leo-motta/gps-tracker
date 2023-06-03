import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function Login({dispatch}: any) {
    const navigate = useNavigate();
    const [loginFormData, setLoginFormData] = useState({
        email:'',
        password:''
    });

    const { email, password } = loginFormData;

    const onChange = (e: any) => {
        setLoginFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e: any) => {
        e.preventDefault()

        const loginData = {
            email,
            password
        };

        axios.post('http://localhost:5000/api/users/login', loginData)
            .then((res) => {
                console.log(res);
                dispatch({ type: 'login', payload: res.data });
                navigate('./home');
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
    <div className="formContainer">
        <div className="formWrapper">
                <div className="logo">
                    <img src="./icons/car-front2.png" className="menu-icon" alt="icon"/>
                    <div>iTracker</div>
                </div>
                <form>
                    <input 
                        className="input" 
                        type="email" 
                        placeholder="Email"
                        name="email"
                        onChange={onChange} />
                    <input 
                        className="input"
                        type="password"
                        placeholder="Senha"
                        name="password"
                        onChange={onChange} />
                    <input 
                        className="button"
                        type="submit"
                        value="Entrar"
                        onClick={onSubmit} />
                </form>
                <div className="text">Não é membro? <a href="/register">Criar conta</a></div>
        </div>
    </div>
    );
}