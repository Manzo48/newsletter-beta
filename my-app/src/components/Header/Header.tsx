import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import style from './Header.module.css';


function Header() {
  // Используйте useSelector для извлечения токена из Redux Store
  const token = useSelector((state: RootState) => state.authReducer.token);
  const removeToken = () => {
    localStorage.removeItem("token");
    window.location.reload()
    console.log("work");
  };
  return (
    <div className={style.main__div}>
      <div>
        <Link className={style.h1} to='/'>MANZOBLOG</Link>
        <Link to='addpage'>admon</Link>
      </div>
      <div className={style.register__div}>
        {token ? (
          // Если есть токен, покажите кнопку "Выйти" или выполните логику выхода
          <button onClick={removeToken} >Logout</button>
        ) : (
          // Если нет токена, покажите кнопку "Войти"
          <Link to='/login'><button className={style.button}>Login</button></Link>
        )}
      </div>
    </div>
  );
}

export default Header;
