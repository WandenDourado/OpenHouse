import React from 'react'
import logo from './logo.svg';
import Produto from "./componentes/produto";
import bootstrap from 'bootstrap'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header"><div class="container">
    <div class="row">
      <p>Olá amigos, bem vindos ao meu Chá de casa nova!</p>
    </div>
    <div class="row">
      <p>Segue produtos</p>
    </div>
  <div>
  <Produto/>
  </div>
</div>
      </header>
    </div>
  );
}

export default App;
