import { useContext } from "react";
import { 
  BrowserRouter as Router, 
  Route, 
  Routes, 
  Navigate } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Contato from "./pages/Contato/Contato.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Perfil from "./pages/Perfil/Perfil.jsx";
import { AuthContext } from "./context/AuthContext/AuthContext.jsx";
import "./App.css";

function App() {
  const {isLoggedIn} = useContext(AuthContext);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/"  element={isLoggedIn ? <Home/> : <Navigate to = "/login"/>} />
          <Route path="login" element={!isLoggedIn ? <Login/> : <Navigate to= "/"/>} />
          <Route path="contato" element={isLoggedIn ? <Contato/> : <Navigate to = "/login"/>} />
          <Route path="perfil" element={isLoggedIn ? <Perfil/> : <Navigate to= "/login" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App