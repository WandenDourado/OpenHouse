import React from 'react'
import Produto from "./componentes/produto";
import './App.css';
import home from './img/banner.png';
import kit_um from './img/kitum.jpg';
import kit_dois from './img/kitdois.jpg';
import kit_tres from './img/kittres.jpg';
import kit_quatro from './img/kitquatro.jpg';
import QR_50 from './img/50.png'
import QR_75 from './img/75.png'
import QR_100 from './img/100.png'
import QR_CORACAO from './img/coracao.png'

function App() {
  
  const lista = [
    {
        id: "produtoUm",
        valor: "R$50,00",
        imagem: kit_um,
        code: "00020126560014BR.GOV.BCB.PIX0111321403228350219Gui Open House R$50520400005303986540550.005802BR5924GUILHERME DOURADO SANTOS6009SAO PAULO622605225iCOhoz3d5CzClOeD4QD7l630442FB",
        qr: QR_50,
        itens: [
            "Jogo de xícaras",
            "Jogo de copos",
            "Pano de pratos",
            "Jogo de talheres",
            "Conjunto de potes"
        ]
    },
    {
        id: "produtoDois",
        valor: "R$75,00",
        imagem: kit_dois,
        code: "00020126560014BR.GOV.BCB.PIX0111321403228350219Gui Open House R$75520400005303986540575.005802BR5924GUILHERME DOURADO SANTOS6009SAO PAULO622605221wW9T0K3qx2RHHonc7BVfT63047B10",
        qr: QR_75,
        itens: [
            "Jogos de pratos",
            "Jogos de faca",
            "Chaleira",
            "Jogo de banheiro",
            "Lixeira"
        ]
    },
    {
        id: "produtoTres",
        valor: "R$100,00",
        imagem: kit_tres,
        code: "00020126570014BR.GOV.BCB.PIX0111321403228350220Gui Open House R$1005204000053039865406100.005802BR5924GUILHERME DOURADO SANTOS6009SAO PAULO622605222Cc60ZXgpRawEjqlSJBW846304B2CF",
        qr: QR_100,
        itens: [
            "Liquidificador",
            "Air fryer",
            "Jogo de panelas",
            "Jogo de lençol",
            "Kit de toalhas"
        ]
    },
    {
        id: "produtoQuatro",
        imagem: kit_quatro,
        code: "00020126540014BR.GOV.BCB.PIX0111321403228350217Gui Open House <35204000053039865802BR5924GUILHERME DOURADO SANTOS6009SAO PAULO622605224ENQiLLDAQCObvGrKXkZFn63049433",
        qr: QR_CORACAO,
        valor: "O que seu coração mandar",
        itens: [
            "Aquele produto muito especial, que irá me ajudar muito nessa nova fase da minha vida!"
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
    <div class="row justify">
      <p>Segue a lista de produtos para aqueles que puderem ajudar-me nesta nova fase da minha vida. Serei profundamente grato por qualquer quantia que possam contribuir.</p>
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

  <div class="row">
    <div class="col">
    <Produto produto={lista[3]}/>
    </div>
  </div>

</div>
      </header>
    </div>
  );
}

export default App;
