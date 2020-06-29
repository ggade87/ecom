import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";

export const ThemeContext = React.createContext("light");

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="main">
          <div className="header">
            <div className="headerInner">
              <div className="logodiv">
                <div style={{ float: "left" }}>Logo</div>
                <div style={{ marginLeft: "70px" }}>
                  <table>
                    <tr>
                      <td>
                        <input
                          id="searchTxt"
                          type="text"
                          placeholder="Search for products, brands and more"
                        ></input>
                      </td>
                      <td>
                        <button type="submit" style={{ marginLeft: "28px" }}>
                          <svg
                            width="20"
                            height="27"
                            viewBox="0 0 17 18"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g fill="#2874F1" fill-rule="evenodd">
                              <path d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path>
                              <path d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path>
                            </g>
                          </svg>
                        </button>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="logindiv">
                <button className="_3Ep39l">Login</button>
                <a href="/viewcart?otracker=Cart_Icon_Click">
                  <img src="C:/workspace/ecom/src/Images/cartlogo.png"></img>{" "}
                  <span>Cart</span>
                </a>
              </div>
            </div>
          </div>
          <div className="bodyDiv">
            <Search />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
/*
 {this.state.itemes.map((itm, index) => {
            return (
              <ProductList
                click={() => this.deleteProductHandler(index)}
                changed={(event) => this.nameChangeHandler(event, itm.id)}
                name={itm.name}
                key={itm.id}
                addcart={(event) => this.addCartHandler(event, itm.id)}
              ></ProductList>
            );
          })}

          */
