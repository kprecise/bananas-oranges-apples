# Bananas, Oranges & Apples
The objective of this app is to produce a simple form where a user can order a quantity of fruit items. We are using React `useState` and `useReducer` to replace `Redux.`


## Combine Reducers
To count the ordered fruit items, we use `countReducer` and to store and summarize the order we use an `orderReducer.` The are combined and both state and dispatch is extracted for use within our store.

    const [state, dispatch] = useReducer(rootReducer,[]);

## Context
A `Store` is created with `useContext` that passes in state and dispatch from the above reducers.

```
<Store.Provider value={{state, dispatch}}>
  <Container>
    <Row>
      <Col xs="12">
        <h1 className="heading">Bananas, Oranges and Apples</h1>
      </Col>
    </Row>
    <FormPage/>
  </Container>
</Store.Provider>
```

## Components

### Summary
A functional component that is used to display the order once submitted:

### Shopping Form
A functional component that contains a form to place an order.

## Container

### FormPage
The FormPage is a container that has all of the `functions`, `states`, `variables` and `dispatch` actions that are passed to the `Summary` and and `Shopping Form` components via `props`.    

```
<Summary
  dispatchOrder={dispatchOrder}
  fruitList={fruitList}
  checkFruitType={checkFruitType}
  firstName={firstName}
  surname={surname}
  isFormSubmitted={formSubmitted}
/>
<ShoppingForm
  resetCounter={resetCounter}
  incrementCounter={incrementCounter}
  decrementCounter={decrementCounter}
  fruitList={fruitList}
  checkFruitType={checkFruitType}
  addFirstName={addFirstName}
  addSurname={addSurname}
  firstName={firstName}
  surname={surname}
  submitForm={submitForm}
/>
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Quick Start

``` bash
# Install dependencies
npm install

# Serve on localhost:3000
npm start

# Build for production
npm run build
```

### Author

Kyri Kyriacou

### Version

1.0.0

### License

This project is licensed under the MIT License

