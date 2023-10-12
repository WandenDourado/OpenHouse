import React    from "react";
import ProdutoJSX from "./produto.jsx";

class Produto extends React.Component {
  render() {
    const produto = this.props;
    //return ProdutoJSX.call(produto);
    return ProdutoJSX(produto);
  }
}



export default Produto;
