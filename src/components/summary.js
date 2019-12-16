import React  from "react"
import '../styles.css'

const Summary = (
  {
    isFormSubmitted,
    firstName,
    surname,
    fruitList
  }) => {
  return (
    <div className="summary">
      <h2 className="heading">Your order</h2>
      {isFormSubmitted ?
        <div className="order">
          <h3 className="heading">Personal Info</h3>
          <div className="element">First Name: {firstName}</div>
          <div className="element">Surname: {surname}</div>
          <hr />
          <h3 className="heading">Order</h3>
          {fruitList.map(fruit => {
            return (
              <div key={fruit.key} className="element">
                {fruit.name}: {fruit.value}
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