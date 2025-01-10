import React from 'react'
import styles from "./CarDetails.module.css"

export const CarDetails = ({brand, color, km}) => {
  return (
    <div className={styles.carDetails}>

        <h2>{brand}</h2>
        <ul>
            <li>Cor: {color}</li>
            <li>Km: {km}</li>
        </ul>

    </div>
  )
}
