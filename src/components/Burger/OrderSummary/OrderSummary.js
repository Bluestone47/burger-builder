import React from 'react';
import Aux from '../../../hoc/Auxiliary';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      // The outer curly bracket is for marking dynamic entry
      return (
        <li key={igKey}>
          <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
        </li>
      )
    })

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to Checkout?</p>
    </Aux>
  )
}

export default orderSummary;