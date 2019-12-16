import React, { useReducer, useState } from "react"
import ShoppingForm from '../components/shoppingForm';
import Summary from '../components/summary';
import countReducer from '../reducers/countReducer';
import { DECREMENT, INCREMENT } from '../actionTypes';
import orderReducer from '../reducers/orderReducer';
import { Row, Col } from 'reactstrap'

const fruitList = [
  {key: 1, name: 'bananas', value: 0},
  {key: 2, name: 'apples', value: 0},
  {key: 3, name: 'oranges', value: 0}
]

const FormPage = () => {
  const [firstName, setFirstName] = useState('')
  const [surname, setSurname] = useState('')
  const [counter, dispatchCounter] = useReducer(countReducer, fruitList);
  const [dispatchOrder] = useReducer(orderReducer, fruitList);
  const [formSubmitted, setFormSubmitted] = useState(false)

  const addFirstName = (name) => {
    setFirstName(name)
  }
  const addSurname = (surname) => {
    setSurname(surname)
  }

  const getItemFromName = (fruitName) => {
    const item = fruitList.filter( fruit => fruit.name === fruitName);
    return item[0]
  };

  const incrementCounter = (fruitName) => {
    const payloadObject = getItemFromName(fruitName);
    payloadObject.value += 1;
    dispatchCounter({type: INCREMENT, payload: payloadObject });
  }

  const decrementCounter = (fruitName) => {
    const payloadObject = getItemFromName(fruitName);
    if (payloadObject.value <= 0) {
      payloadObject.value = 0;
    } else {
      payloadObject.value = payloadObject.value - 1;
    }
    dispatchCounter({type: DECREMENT, payload: payloadObject })
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
            incrementCounter={incrementCounter}
            decrementCounter={decrementCounter}
            fruitList={fruitList}
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