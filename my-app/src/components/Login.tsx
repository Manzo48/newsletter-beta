import React, { useState } from 'react'
import { AppDispatch } from "../app/store";
import { useDispatch } from "react-redux";
import { signIn } from '../store/AuthSlice';
import Form from './Form';

function Login() {
    const dispatch = useDispatch<AppDispatch>()
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const onSubmit = () => {
        dispatch(signIn({login, password}))
        console.log('типа работает')
    }
  return (
    <>
        <Form
        login={login}
        password={password}
        setLogin={setLogin}
        setPassword={setPassword}
        onSubmit={onSubmit}
      />
    </>
  )
}

export default Login