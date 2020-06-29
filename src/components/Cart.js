import React from "react";

class Cart extends React.Component {
  render() {
    return (
      <div>
        {this.props.id} {this.props.name}
        <button onClick={this.props.click}>Delete</button>
      </div>
    );
  }
}

export default Cart;
