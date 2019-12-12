import React from "react";

const FruitContext = React.createContext({
  fruit: [
    { id: 1, text: "Bananas", quantity: 0},
    { id: 2, text: "Apples", quantity: 0},
    { id: 3, text: "Oranges", quantity: 0}
  ],
  currentOrder: {}
});

export default FruitContext;