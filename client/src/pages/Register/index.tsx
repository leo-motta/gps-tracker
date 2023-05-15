import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {
    const navigate = useNavigate();
    const [registerFormData, setRegisterFormData] = useState({
        email:'',
        username:'',
        password:''
    });

    const { email, username, password } = registerFormData;

    const onChange = (e: any) => {
        setRegisterFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e: any) => {
        e.preventDefault()

        const registerData = {
            email,
            username,
            password
        };

        console.log(registerData);
        navigate('/');
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
                        type="text"
                        placeholder="Nome de usuário"
                        name="username"
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
                        value="Cadastrar"
                        onClick={onSubmit} />
                </form>
                <div className="text">Já tem conta? <a href="/">Entrar</a></div>
        </div>
    </div>
    )
}
