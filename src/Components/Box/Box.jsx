import React from 'react'
import styles from './Box.module.css'

const Box = ({text, isSelected, ...props}) => {
  return (
    <div className={isSelected ? styles.newContainer : styles.container}  {...props}>
      {text}
    </div>
  )
}

export default Box
