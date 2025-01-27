import React from 'react'
import styles from "./Home.module.css"
export const Home = () => {
  return (
    <>
    
    <div className={styles.home_container}></div>
    
    <div className={styles.description}>

        <h4 className='cursive'>Lorem ipsum dolor</h4>
      <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia nobis, ut repellendus possimus, expedita numquam quod ipsam, atque libero provident dicta! Ad recusandae voluptatem voluptate repudiandae ducimus ut repellendus possimus, expedita numquam quod ipsam, atque libero provident dicta perspiciatis aliquid amet?</p>
    </div>
    
    <div className={styles.banner_secundario}></div>

    <div className={styles.bennefits_container}>
      <h4 className='cursive'>Pronto para otimizar seu estilo de vida?</h4>
      <span>Aqui na WEBFIT nós podemos te auxiliar com</span>

      <div className={styles.card_container}>

        <div className={styles.card}>
          <img src="../../assets/bennefit-dieta.png" alt="" />
          <h3>Dietas Personalizadas</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing repellendus possimus</p>
          <button className='btn-green'>Saiba Mais</button>
        </div>

        <div className={styles.card}>
          <img src="../../assets/bennefit-sup.png" alt="" />
          <h3>Suplementos</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing repellendus possimus</p>
          <button className='btn-green'>Saiba Mais</button>
        </div>

        <div className={styles.card}>
          <img src="../../assets/bennefit-imc.png" alt="" />
          <h3>Calculadora IMC</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing repellendus possimus</p>
          <button className='btn-green'>Saiba Mais</button>
        </div>

      </div>
    </div>

    </>

  )
}
