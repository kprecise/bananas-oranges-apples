import React, { createContext, useReducer } from "react"
import ReactDOM from "react-dom"
import rootReducer from './rootReducer'
import * as serviceWorker from "./serviceWorker"
import { Col, Container, Row } from 'reactstrap'
import FormPage from './containers/formPage';
import 'bootstrap/dist/css/bootstrap.css';

import './styles.css'

const Store = createContext()

const App =() => {
  const [state, dispatch] = useReducer(rootReducer,[]);
  return (
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
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();