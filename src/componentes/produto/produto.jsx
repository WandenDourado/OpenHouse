import "./produto.css";
import React from "react";
import pratos from '../../img/pratos.jpg';
import QR_25 from '../../img/25.png';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';


function ProdutoJSX({ produto }) {
  return template(produto);
}

function template(produto) {


  function handleClick(){
    var exampleTriggerEl = document.getElementById('example')
    var popover = bootstrap.Popover.getOrCreateInstance(exampleTriggerEl) // Returns a Bootstrap popover instance
    popover.toggle();
    const texto = "00020126560014BR.GOV.BCB.PIX0111321403228350219Gui Open House R$25520400005303986540525.005802BR5924GUILHERME DOURADO SANTOS6009SAO PAULO622605222TOf4Z5nSlEKogiK6gxlGL6304EFC2";
    if (navigator.clipboard) {
      navigator.clipboard.writeText(texto)
        .then(function() {
          console.log('Texto copiado com sucesso!');
        })
        .catch(function(err) {
          console.error('Erro ao copiar texto: ', err);
        });
    } else {
      console.log('A API Clipboard não é suportada neste navegador.');
    }
  }

  return (
    <div class="fundo">
      <div class="row">
        <div class="col">
        <img class="redondo" src={pratos} alt="pratos" />
        </div>
        <div class="col left">
          <div class="row">
            <h1>Valor: {produto.valor}</h1>
          </div>
          <div class="row">
            <div class="col-12">
              <p>Esse valor será utlizado para comprar:</p>
            </div>
            <div class="col-12">
              <ul>
              {produto.itens.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>  
            </div>            
          </div>
        </div>
      </div>

      
      <div class="d-grid gap-2">
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${produto.id}`}>Vou te dar esse!</button>
      </div>

      <div class="modal fade" id={produto.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg black">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Pagamento via QR-code</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <div class="row">
            <div class="col">
              <p>Valor: {produto.valor}</p>
            <img src={QR_25} alt="25" style={{ width: '250px', height: '250px' }} />
              <button id="example" type="button" onClick={handleClick} class="btn btn-lg btn-success" data-bs-toggle="example" title="Pix copia e cola" data-bs-content="Código pix copiado para sua área de trasnferência, agora só ir para o seu app e colar.">Pix copia e cola</button>
            </div>
            <div class="col">
              <p>Para realizar o pagamento scanei o QR Code utilizando o app do seu banco ou utilize o botão "Pix copia e cola" para copiar o código e então cole-o no app do seu banco!</p>
            </div>
          </div>
          <div class="row">
              <p>Caso tenha problemas com o QR Code, você pode realizar o pagamento usando a seguite chave pix: </p><b>(11) 998006615</b>
          </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
          </div>
        </div>
      </div>
    </div>


    </div>
  );
};

export default ProdutoJSX;
