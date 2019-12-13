import React, { useReducer, useState } from "react"
import ShoppingForm from '../components/shoppingForm';
import Summary from '../components/summary';
import countReducer from '../reducers/countReducer';
import { DECREMENT, INCREMENT, RESET } from '../actionTypes';
import orderReducer from '../reducers/orderReducer';
import { Row, Col } from 'reactstrap'

const initialState = {
  bananas: 0,
  apples: 0,
  oranges: 0
}

const fruitList = [
  { id: 1, text: "bananas"},
  { id: 2, text: "apples"},
  { id: 3, text: "oranges"}
]

const FormPage = () => {
  const [firstName, setFirstName] = useState('')
  const [surname, setSurname] = useState('')
  const [{bananas, oranges, apples}, dispatchCounter] = useReducer(countReducer, initialState);
  const [dispatchOrder] = useReducer(orderReducer, initialState);
  const [formSubmitted, setFormSubmitted] = useState(false)

  const addFirstName = (name) => {
    setFirstName(name)
  }
  const addSurname = (surname) => {
    setSurname(surname)
  }

  const checkFruitType = (fruitName) => {
    if (fruitName === "bananas"){
      return bananas
    } else if (fruitName === "oranges") {
      return oranges
    } else {
      return apples
    }
  }

  const incrementCounter = (itemName, oldValue) => {
    const payloadObject = {}
    payloadObject[itemName] = oldValue + 1;
    dispatchCounter({type: INCREMENT, payload: payloadObject })
  }

  const decrementCounter = (itemName, oldValue) => {
    const payloadObject = {}
    if (oldValue <= 0) {
      payloadObject[itemName] = 0;
    } else {
      payloadObject[itemName] = oldValue - 1;
    }
    dispatchCounter({type: DECREMENT, payload: payloadObject })
  }

  const resetCounter = () => {
    dispatchCounter({type: RESET })
  }

  const submitForm = event => {
    setFormSubmitted(true)
    event.preventDefault()
    const formData = {
      firstName: event.target.firstName.value,
      surname: event.target.surname.value,
      bananas: parseInt(event.target.bananas.value,10),
      oranges: parseInt(event.target.oranges.value,10),
      apples: parseInt(event.target.apples.value,10),
    }
    dispatchCounter({type: "ADD_ORDER", payload: formData })
  }

  return (
    <div className="formPage">
      <Row>
        <Col xs="12">
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
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <Summary
            dispatchOrder={dispatchOrder}
            fruitList={fruitList}
            checkFruitType={checkFruitType}
            firstName={firstName}
            surname={surname}
            isFormSubmitted={formSubmitted}
          />
        </Col>
      </Row>
    </div>
  )
}
export default FormPage