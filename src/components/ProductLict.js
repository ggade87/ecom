import React from "react";
import "../App.css";
class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      nam: "a",
    };
  }
  handleChange = (event) => {
    this.setState({ nam: event.target.value });
  };
  render() {
    return (
      <div className="item">
        <button onClick={this.props.click}>Delete</button>
        {this.props.name} <br></br>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        ></input>
        <button onClick={this.props.addcart}>Add Cart</button>
      </div>
    );
  }
}

export default ProductList;
