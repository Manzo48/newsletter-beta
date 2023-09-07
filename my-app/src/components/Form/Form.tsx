import style from './Form.module.css'

interface FormProps {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  onSubmit: (event: React.FormEvent) => void;
}

function Form({ onSubmit, setEmail, setPassword, email, password }: FormProps) {
  return (
    <>
    <div className={style.block}>
    <div className={style.input__div}>
      <input
        className={style.input}
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email..."
        value={email}
      />
      <input
        className={style.input}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password.."
        value={password}
      />
      <div>
      <button className={style.button} onClick={onSubmit}>
        Войти
      </button>
      </div>
    </div>
    </div>
    </>
  );
}

export default Form;

