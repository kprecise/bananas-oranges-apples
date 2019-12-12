import React from "react"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import '../styles.css'

const ShoppingForm = (
  {
    incrementCounter,
    decrementCounter,
    resetCounter,
    fruitList,
    checkFruitType,
    addFirstName,
    addSurname,
    firstName,
    surname,
    submitForm
  }) => {

  return (
    <div className="shoppingForm">
      <h2 className="heading">Order Form</h2>
      <Form onSubmit={submitForm}>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input type="text" name="firstName" onChange={e => addFirstName(e.target.value)} value={firstName}/>
        </FormGroup>
        <FormGroup>
          <Label for="surname">Surname</Label>
          <Input type="text" name="surname" onChange={e => addSurname(e.target.value)} value={surname}/>
        </FormGroup>
        {fruitList.map(result => (
          <FormGroup key={result.id}>
            <Label for={result.text}>{result.text}</Label>
            <Input className="smallInput" type="text" name={result.text} value={checkFruitType(result.text)} />
            <Button className="smallButton" color="secondary" value={result.text} onClick={e => decrementCounter(e.target.value, checkFruitType(result.text))}>-</Button>
            <Button className="smallButton" color="secondary" value={result.text} onClick={e => incrementCounter(e.target.value,  checkFruitType(result.text))}>+</Button>
          </FormGroup>
        ))}
        <Button color="primary">Submit</Button>
        <Button color="secondary" onClick={resetCounter}>Reset</Button>
      </Form>
    </div>
  )
}

export default ShoppingForm