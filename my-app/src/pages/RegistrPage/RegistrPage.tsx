import Registr from "../../components/Register/Registr"
import { Link } from "react-router-dom"
import style from './RegistrPage.module.css'
function RegistrPage() {
  return (
    <div>
      <div className={style.block}>
        <h1>Registration</h1>
        <Registr/>
        <p>Already have an Account?</p>
       <Link to='/login'>Login</Link>
      </div>
    </div>

  )
}

export default RegistrPage