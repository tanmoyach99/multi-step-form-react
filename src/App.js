import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Auth from "./pages/Auth";

function App() {
  const [isAuth, setIsAuth] = useState({
    open: false,
    form: "login",
  });
  return (
    <div className="App">
      <Home isAuth={isAuth} setIsAuth={setIsAuth} />
      <Auth isAuth={isAuth} setIsAuth={setIsAuth} />
    </div>
  );
}

export default App;
