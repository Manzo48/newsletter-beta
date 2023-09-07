
import { Route, Routes } from "react-router";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrPage from "./pages/RegistrPage/RegistrPage";
import './App.css'
import FullPost from "./pages/FullPostPage/FullPostPage";
import AddPage from './pages/AddPage/AddPage'
function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/fullpost/:postId" element={<FullPost/>} />
        <Route path="/addPage" element={<AddPage/>}/>
        <Route path='/registr' element={<RegistrPage/>}/>
        <Route path='/login'  element={<LoginPage/>}/>
      </Routes>
    </>
  )
}

export default App
