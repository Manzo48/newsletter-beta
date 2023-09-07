import { useState } from 'react'
import { AppDispatch } from '../../app/store';
import { useDispatch } from "react-redux";
import { signIn } from '../../store/AuthSlice';
import Form from '../Form/Form';

function Login() {
    const dispatch = useDispatch<AppDispatch>()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState<boolean | null>(null);
    const [registrationError, setRegistrationError] = useState<string | null>(null);

  const onSubmit = async () => {
    try {
      const response = await dispatch(signIn({ email, password }));

      if (signIn.fulfilled.match(response)) {
        // Регистрация прошла успешно
        setIsRegistrationSuccessful(true);
        setRegistrationError(null);
        console.log("Авторизация прошла успешно");
      } else if (signIn.rejected.match(response)) {
        // Если сервер вернул ошибку, обрабатываем её
        const error = response.payload as Error;
        setRegistrationError(error.message);
        setIsRegistrationSuccessful(false);
      }
    } catch (error) {
      console.error("Произошла ошибка при Авторизации:", error);
      setIsRegistrationSuccessful(false);
      setRegistrationError("Произошла ошибка при авторизации. Пожалуйста, попробуйте ещё раз.");
    }
  };
  return (
    <>
      {isRegistrationSuccessful === true ? (
        <p>Поздравляем, вы успешно вошли!</p>
      ) : (
        <div>
          {registrationError && (
            <p style={{ color: "red" }}>{registrationError}</p>
          )}
          <Form
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            onSubmit={onSubmit}
          />
        </div>
      )}
    </>
  );
}

export default Login