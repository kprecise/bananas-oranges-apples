import React, { useReducer } from "react"
import { Button, Form, FormGroup, Label, Input, ButtonGroup, FormText } from 'reactstrap'
import { INCREMENT, DECREMENT, RESET } from '../actionTypes'
import countReducer from '../reducers/countReducer';
import '../styles.css'

const Counter = () => {
  const [{bananas, oranges, apples}, dispatch] = useReducer(countReducer, initialState);

  const incrementCounter = (itemName) => {
    dispatch({type: INCREMENT, payload: itemName })
  }

  const decrementCounter = (itemName) => {
    dispatch({type: DECREMENT, payload: itemName })
  }

  const resetCounter = () => {
    dispatch({type: RESET })
  }

  return (
    <React.Fragment>
      <Button className="smallButton" color="secondary" value={result.text} onClick={e => decrementCounter(e.target.value)}>-</Button>
      <Button className="smallButton" color="secondary" value={result.text} onClick={e => incrementCounter(e.target.value)}>+</Button>
    </React.Fragment>
  )


}