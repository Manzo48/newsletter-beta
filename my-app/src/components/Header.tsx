import {Routes, Route, Link, useLocation} from 'react-router-dom'


function Header() {
  return (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/registr'>Registration</Link>
        <Link to='/login'>Login</Link>
    </div>
  )
}

export default Header