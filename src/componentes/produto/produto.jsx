import "./produto.css";
import React from "react";
import pratos from '../../img/pratos.jpg';
import QR_25 from '../../img/25.png';

function ProdutoJSX({ produto }) {
  return template(produto);
}

function template(produto) {
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
              <p>Esse valor será utlizado para comprar: {produto.id}</p>
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
            </div>
            <div class="col">
              <p>Para realizar o pagamento scanei o QR code utilizando o app do seu banco!</p>
            </div>
          </div>
          <div class="row">
              <p>Caso tenha problemas com o QR-code, você pode realizar o pagamento usando a seguite chave pix: </p><b>(11) 998006615</b>
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
