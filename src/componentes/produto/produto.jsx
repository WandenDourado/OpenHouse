import "./produto.css";
import React from "react";
import pratos from '../../img/pratos.jpg';
import QR_25 from '../../img/25.png';

function template() {
  return (
    <div class="container">
      <div class="row">
        <div class="col">
        <img src={pratos} alt="pratos" />
        </div>
        <div class="col">
          <div class="row">
            <h1>Valor: R$ 25,00</h1>
          </div>
          <div class="row left">
            <div class="col-12">
              <p>Esse valor será utlizado para comprar:</p>
            </div>
            <div class="col-12">
              <ul>
                <li>Pratos</li>
                <li>Talheres</li>
                <li>Copos</li>
              </ul>  
            </div>            
          </div>
        </div>
      </div>

      
      <div class="d-grid gap-2">
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Vou te dar esse!</button>
      </div>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg black">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Pagamento via QR-code</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <div class="row">
            <div class="col">
            <img src={QR_25} alt="25" style={{ width: '250px', height: '250px' }} />
            </div>
            <div class="col">
              <p>Para realizar o pagamento scanei o QR code utilizando o app do seu banco!</p>
            </div>
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

export default template;
