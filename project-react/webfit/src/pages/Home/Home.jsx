import React from 'react'
import styles from "./Home.module.css"

import imcImg from "../../assets/bennefit-imc.png"
import dietaImg from "../../assets/bennefit-dieta.png"
import supImg from "../../assets/bennefit-sup.png"
import shopImg from "../../assets/el-visual.png"

export const Home = () => {
  return (
    <>
    
    <div className={styles.home_container}></div>
    
    <div className={styles.description}>

        <h4 className='cursive'>Lorem ipsum dolor</h4>
      <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia nobis, ut repellendus possimus, expedita numquam quod ipsam, atque libero provident dicta! Ad recusandae voluptatem voluptate repudiandae ducimus ut repellendus possimus, expedita numquam quod ipsam, atque libero provident dicta perspiciatis aliquid amet?</p>
    </div>
    
    <div className={styles.banner_secundario}></div>

    
    <div style={{backgroundColor:"#fafafa"}}>
      <div className={styles.about_container}>
        <div className={styles.aboutDesc_container}>
          <h4 className='cursive'>Conheça nossa Loja</h4>
          <span>Aqui na WEBFIT nós podemos</span>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse repellendus mollitia incidunt est debitis quaerat omnis cum eaque facere! Laboriosam animi molestiae provident atque voluptatum accusamus quidem tempore quae officia! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex laborum illo blanditiis quae quo architecto eos eum corporis asperiores doloribus, nobis nulla animi, iste nesciunt dolor.</p>
          <button className='btn-green'>Saiba mais</button>
        </div>

        <div className={styles.aboutImg_container}>
          <img src={shopImg} alt="" />
        </div>



      </div>
    </div>

    <div className={styles.bennefits_container}>
      <h4 className='cursive'>Pronto para otimizar seu estilo de vida?</h4>
      <span>Aqui na WEBFIT nós podemos te auxiliar com</span>

      <div className={styles.card_container}>

        <div className={styles.card}>
          <img src={dietaImg} alt="dietas-personalizadas" />
          <h3>Dietas Personalizadas</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing repellendus possimus</p>
          <button className='btn-green'>Saiba Mais</button>
        </div>

        <div className={styles.card}>
          <img src={supImg} alt="suplementos" />
          <h3>Suplementos</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing repellendus possimus</p>
          <button className='btn-green'>Saiba Mais</button>
        </div>

        <div className={styles.card}>
          <img src={imcImg} alt="calc-imc" />
          <h3>Calculadora IMC</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing repellendus possimus</p>
          <button className='btn-green'>Saiba Mais</button>
        </div>

      </div>
    </div>


    </>

  )
}
