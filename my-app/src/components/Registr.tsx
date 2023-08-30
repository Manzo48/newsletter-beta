import React, { useState } from "react";
import Form from "./Form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { registr } from "../store/AuthSlice";

function Registr() {
  const dispatch = useDispatch<AppDispatch>();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    dispatch(registr({ login, password }));
    console.log('типа работает')
  };

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
  );
}

export default Registr;

