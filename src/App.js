import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function App() {
const [user , setUser] = useState(null)
/*!!! Lo que hacemos en este momento es crear un estado que guarda la informacion de usuario, para luego crear una condicion que dice : "Si existe el usuario muestra el home, si no existe el usuario muestra Login"
*/

  return (
    user ? <Home user={user} /> : <Login />
  ) 
}

export default App;

/*  user ? <Home user={user} /> : <Login /> */