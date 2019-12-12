import React  from "react"
import '../styles.css'

const Summary = (
  {
    isFormSubmitted,
    firstName,
    surname,
    fruitList,
    checkFruitType
  }) => {
  return (
    <div className="summary">
      <h2 className="heading">Your order</h2>
      {isFormSubmitted ?
        <div className="order">
          <div className="element">First Name: {firstName}</div>
          <div className="element">Surname: {surname}</div>
          {fruitList.map(fruit => {
            return (
              <div className="element">
                {fruit.text}: {checkFruitType(fruit.text)}
              </div>
            )
          })}
        </div>
        :
        <div>Order In progress.......</div>
      }
    </div>
  )
}

export default Summary