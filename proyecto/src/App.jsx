import React from "react";
import "./App.css";
import headerImg from "./assets/header.png"; // Tu imagen del header

function App() {
  return (
    <div className="app">
      <header className="header">
        <img src={headerImg} alt="Header Pokémon GO" className="header-img" />
      </header>

      <main className="app-content">
        <h1>Bienvenido, Rivera Carlos Felipe 🎉</h1>
        <p>Aquí comienza tu aplicación en React con el header personalizado.</p>
      </main>
    </div>
  );
}

export default App;
