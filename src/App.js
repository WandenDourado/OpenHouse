import React from 'react'
import Produto from "./componentes/produto";
import './App.css';
import home from './img/banner.png';


function App() {
  
  const lista = [
    {
        id: "produtoUm",
        valor: "R$25,00",
        itens: [
            "Canecas personalizadas",
            "Jogos de copos",
            "Porta-retratos",
            "Panos de prato decorativos",
            "Vasos de flores ou plantas pequenas"
        ]
    },
    {
        id: "produtoDois",
        valor: "R$50,00",
        itens: [
            "Conjunto de lençóis",
            "Conjunto de panelas",
            "Cafeteira ou chaleira elétrica",
            "Jogo de talheres",
            "Conjunto de potes de armazenamento"
        ]
    },
    {
        id: "produtoTres",
        valor: "R$75,00",
        itens: [
            "Liquidificador",
            "Grill ou churrasqueira elétrica",
            "Jogo de pratos",
            "Kit de organização para armários",
            "Balança de cozinha"
        ]
    }
];



  return (
    <div className="App">
      <header className="App-header"><div class="container">
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>

    <div class="row">
    <img src={home} alt="home"/>
      <p>Olá amigos, bem vindos ao meu Chá de casa nova!</p>
    </div>
    <div class="row">
      <p>Segue produtos</p>
    </div>
  <div class="row">
    <div class="col">
      <Produto produto={lista[0]}/>
    </div>
    <div class="col">
      <Produto produto={lista[1]}/>
    </div>
    <div class="col">
      <Produto produto={lista[2]}/>
    </div>    
  </div>

</div>
      </header>
    </div>
  );
}

export default App;
