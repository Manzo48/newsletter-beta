import Login from "../../components/Login/Login"
import { Link } from "react-router-dom"
import style from './LoginPage.module.css'
function LoginPage() {
  return (
    <>
    <div className={style.block}>
    <h1>Login</h1>
    <div>
      <Login/>
      <p>if you are not registered</p>
      <Link to='/registr'> Register</Link>
    </div>
    </div>
    </>
  )
}

export default LoginPage