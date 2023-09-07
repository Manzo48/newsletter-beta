import { useState } from "react";
import Form from "../Form/Form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { registr } from "../../store/AuthSlice";

function Registr() {
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState<boolean | null>(null);
  const [registrationError, setRegistrationError] = useState<string | null>(null);

  const onSubmit = async () => {
    try {
      const response = await dispatch(registr({ email, password }));

      if (registr.fulfilled.match(response)) {
        // Регистрация прошла успешно
        setIsRegistrationSuccessful(true);
        setRegistrationError(null);
        console.log("Регистрация прошла успешно");
      } else if (registr.rejected.match(response)) {
        // Если сервер вернул ошибку, обрабатываем её
        const error = response.payload as Error;
        setRegistrationError(error.message);
        setIsRegistrationSuccessful(false);
      }
    } catch (error) {
      console.error("Произошла ошибка при регистрации:", error);
      setIsRegistrationSuccessful(false);
      setRegistrationError("Произошла ошибка при регистрации. Пожалуйста, попробуйте ещё раз.");
    }
  };

  return (
    <>
      {isRegistrationSuccessful === true ? (
        <p>Поздравляем, вы успешно зарегистрировались!</p>
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

export default Registr;

