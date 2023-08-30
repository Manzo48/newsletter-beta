import React, { useState } from "react";

interface FormProps {
  login: string;
  password: string;
  setLogin: (login: string) => void;
  setPassword: (password: string) => void;
  onSubmit: (event: React.FormEvent) => void;
}

function Form({ onSubmit, setLogin, setPassword, login, password }: FormProps) {

  return (
    <>
      <input
        type="text"
        onChange={(e) => setLogin(e.target.value)}
        placeholder="login..."
        value={login}
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password.."
        value={password}
      />
      <button className="button" onClick={onSubmit}>
        Submit
      </button>
    </>
  );
}

export default Form;

