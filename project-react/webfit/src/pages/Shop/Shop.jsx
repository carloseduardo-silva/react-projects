import React from 'react'
import styles from "./Shop.module.css"

export const Shop = () => {
  return (
    <div>

    <h1>Nossos Produtos</h1>

    <div className={styles.shop_container}>

      <div className={styles.filter_container}>
 
        <div class={styles.filter_card}>
          <p>Tamanho</p>
          <span class="material-symbols-outlined">close</span>
        </div>
          <form class={styles.filter_check}>
            <label><input type="radio" name="size" id="P/S" value="P/S"/>P/S</label>
            <label><input type="radio" name="size" id="M" value="M"/>M</label>
            <label><input type="radio" name="size" id="G/L" value="G/L"/>G/L</label>
            <label><input type="radio" name="size" id="GG/XL" value="GG/XL"/>GG/XL</label>
            <label><input type="radio" name="size" id="XGG/XXL" value="XGG/XXL"/>XGG/XXL</label>
            
          </form>

          <div class={styles.filter_card}>
            <p>Preço</p>
            <span class="material-symbols-outlined">close</span>
          </div>
              
          <form class={styles.filter_price}>
            <label>R$<input placeholder="0" type="number" value="0"/>  </label>
            
            <h2>-</h2>
            
            <label> R$<input placeholder="349" type="number" value="349"/>  </label>
            
            <button> Filtrar</button>
            
            </form>
                
          <div class={styles.filter_card}>
            <p>Ordenar </p>
            <span class="material-symbols-outlined">close</span>
            </div>
                  
          <form class={styles.filter_check}>
              <label><input type="radio" name="order" id="Relevância" value="Mais-Vendidos"/>Relevância</label>
              <label><input type="radio" name="order" id="Alfabética" value="Alfabética"/>Ordem Alfabética</label>
              <label><input type="radio" name="order" id="Menor-preço" value="Menor-preço"/>Menor Preço</label>
              <label><input type="radio" name="order" id="Maior-preço" value="Maior-preço"/>Maior Preço</label>
            </form>
      </div>

      <div className={styles.products_container}>

      </div>
    </div>  

    </div>
  )
}
