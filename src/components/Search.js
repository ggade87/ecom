import React from "react";
import logo from "../logo.svg";
import "../App.css";
import Itemes from "../components/Itemes";
import ProductList from "../components/ProductLict";
import CartC from "../components/Cart";
export const ThemeContext = React.createContext("light");
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemes: [
        { id: 1, name: "Ganesh" },
        { id: 2, name: "Ganesh2" },
        { id: 3, name: "Ganesh3" },
        { id: 4, name: "Ganesh4" },
        { id: 5, name: "Ganesh5" },
        { id: 6, name: "Ganesh6" },
        { id: 7, name: "Ganesh7" },
      ],
      cart: [],
      currentPage: 1,
      todosPerPage: 3,
    };

    this.pname = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
    });
  }
  nameChange = (event) => {
    this.setState({
      itemes: [
        { id: 1, name: "GaneshG" },
        { id: 2, name: event.target.value },
        { id: 3, name: "AshuG" },
        { id: 4, name: "Ganesh4" },
        { id: 5, name: "Ganesh4" },
        { id: 6, name: "Ganesh4" },
        { id: 7, name: "Ganesh4" },
      ],
    });
  };
  deleteProductHandler = (personIndex) => {
    const itemes = this.state.itemes; // array act like object and we get pointe
    itemes.splice(personIndex, 1);
    this.setState({ itemes: itemes });
  };
  nameChangeHandler = (event, id) => {
    console.log(id);
    const itemesIndex = this.state.itemes.findIndex((p) => {
      return p.id === id;
    });
    console.log(itemesIndex);
    const itemes = { ...this.state.itemes[itemesIndex] };
    console.log(itemes);
    itemes.name = event.target.value;
    const itemes2 = [...this.state.itemes];
    itemes2[itemesIndex] = itemes;
    this.setState({
      itemes: itemes2,
    });
  };
  addProduct = (personIndex) => {
    const itemes2 = [...this.state.itemes];
    console.log(this.pname.current.value);
    const obj = {
      id: itemes2[itemes2.length - 1].id + 1,
      name: this.pname.current.value,
    };
    itemes2.push(obj);
    this.setState({
      itemes: itemes2,
    });

    console.log(this.state.itemes);
  };
  addCartHandler = (event, id) => {
    const itemesIndex = this.state.itemes.findIndex((p) => {
      return p.id === id;
    });
    const itemes = this.state.itemes[itemesIndex];
    const tempCart = [...this.state.cart];
    const obj = {
      id: itemes.id,
      name: itemes.name,
    };
    console.log(obj);
    console.log(tempCart);
    tempCart.push(obj);
    console.log(tempCart);
    this.setState({
      cart: tempCart,
    });
    console.log(this.state.cart);
  };
  deleteCartProductHandler = (personIndex) => {
    const itemes = this.state.cart; // array act like object and we get pointe
    itemes.splice(personIndex, 1);
    this.setState({ cart: itemes });
  };
  render() {
    const { itemes, currentPage, todosPerPage } = this.state;

    // Logic for displaying current todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = itemes.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderTodos = currentTodos.map((itm, index) => {
      return (
        <div key={index}>
          <ProductList
            click={() => this.deleteProductHandler(index)}
            changed={(event) => this.nameChangeHandler(event, itm.id)}
            name={itm.name}
            key={itm.id}
            addcart={(event) => this.addCartHandler(event, itm.id)}
          ></ProductList>
        </div>
      );
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(itemes.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map((number) => {
      return (
        <div
          key={number}
          id={number}
          onClick={this.handleClick}
          className="pageClass"
        >
          {number}
        </div>
      );
    });

    const ele = (
      <ThemeContext.Provider value={this.state.itemes}>
        <Itemes />
      </ThemeContext.Provider>
    );

    return (
      <div className="App">
        <header className="App-header">
          {this.state.cart.map((itm, index) => {
            return (
              <div>
                <CartC
                  id={itm.id}
                  name={itm.name}
                  click={() => this.deleteCartProductHandler(index)}
                ></CartC>
              </div>
            );
          })}
          <input type="text" ref={this.pname}></input>
          <button onClick={this.addProduct}>Add</button>{" "}
          <div>
            {renderTodos}
            {renderPageNumbers}
          </div>
        </header>
      </div>
    );
  }
}

export default Search;
