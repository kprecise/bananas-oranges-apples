import React from "react"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import '../styles.css'

const ShoppingForm = (
  {
    incrementCounter,
    decrementCounter,
    fruitList,
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
          <FormGroup key={result.key}>
            <Label for={result.name}>{result.name}</Label>
            <Input className="smallInput" type="text" name={result.name} value={result.value} readOnly />
            <Button className="smallButton" color="secondary" value={result.name} onClick={e => decrementCounter(e.target.value, result.value)}>-</Button>
            <Button className="smallButton" color="secondary" value={result.name} onClick={e => incrementCounter(e.target.value, result.value)}>+</Button>
          </FormGroup>
        ))}
        <Button color="primary">Submit</Button>
      </Form>
    </div>
  )
}

export default ShoppingForm