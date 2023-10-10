import React    from "react";
import template from "./produto.jsx";

class Produto extends React.Component {
  render() {
    return template.call(this);
  }
}



export default Produto;
