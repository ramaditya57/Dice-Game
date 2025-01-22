import React from 'react'
import styles from './Button.module.css'

const Button = ({text, isColorProperty, ...props}) => {
  return (
    <div>
      <button {...props} className={isColorProperty ? styles.property : styles.pro}>
        {text}
      </button>
    </div>
  )
}

export default Button
