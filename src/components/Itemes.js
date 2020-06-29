import React from "react";
import { ThemeContext } from "../App.js";

const getUsers = () => {
  return new Promise((resolve, reject) => {
    return setTimeout(
      () => resolve([{ id: "jon" }, { id: "andrey" }, { id: "tania" }]),
      600
    );
  });
};
const getIdFromUser = (users) => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => resolve(users.id), 500);
  });
};
const capitalizeIds = (id) => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => resolve(id.toUpperCase()), 200);
  });
};
const runAsyncFunctions = async () => {
  const users = await getUsers();

  for (let user of users) {
    const userId = await getIdFromUser(user);
    console.log(userId);

    const capitalizedId = await capitalizeIds(userId);
    console.log(capitalizedId);
  }

  console.log(users);
};

class Itemes extends React.Component {
  start = () => {
    runAsyncFunctions();
  };
  render() {
    return (
      <div className="item">
        <button onClick={this.start}>Clikc</button>
        <ThemeContext.Consumer>
          {(value) =>
            value.map((itm) => {
              return <h1>{itm.name}</h1>;
            })
          }
        </ThemeContext.Consumer>
      </div>
    );
  }
}

export default Itemes;
