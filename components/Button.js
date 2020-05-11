import React from 'react'
import PropTypes from 'prop-types'

export const Button = ({ onClick, person }) => (
  <div>
    <p>
      <button
      onClick={onClick}
      >
      Click!
      </button>
    </p>
    name: {person.name}<br />
    age:{person.age} 
  </div>
)

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  person: PropTypes.object.isRequired
}
