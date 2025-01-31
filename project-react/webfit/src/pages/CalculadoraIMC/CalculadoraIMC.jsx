import React, { useEffect, useState } from 'react'
import styles from "./Calculadora.module.css"

export const CalculadoraIMC = () => {

  const [typeAge, setTypeAge] = useState(null)
  const [age, setAge] = useState()
  const [weight, setWeight] = useState()
  const [height, setHeight] = useState()
  const [imcValue, setImcValue] = useState(null)


  const handleIMCForm = (e) =>{

    e.preventDefault()

    if(document.querySelector(".result_selected")){
      document.querySelector(".result_selected").classList.remove("result_selected")
    }

    let imc = 0;
    let weightVal = weight.replace(/,/g, '.');
    let heightVal= height.replace(/,/g, '.');

    imc = (weightVal/heightVal**2).toFixed(2)
      
    setImcValue(imc)

    if(imc > 40.0){
      document.querySelector("#obesidade3").classList.add("result_selected")
    }
    else if( 39.99 > imc && imc > 35.0){
      document.querySelector("#obesidade2").classList.add("result_selected")
    }
    else if( 34.99 > imc && imc > 30.0){
      document.querySelector("#obesidade1").classList.add("result_selected")
    }
    else if( 29.99 > imc && imc > 25.0){
      document.querySelector("#sobrepeso").classList.add("result_selected")
    }
    else if( 24.99 > imc &&  imc > 18.6){
      document.querySelector("#normal").classList.add("result_selected")
    }
    else {
      document.querySelector("#abaixo-normal").classList.add("result_selected")
    }
  }

  const heightInput = (inputVal) => {
      // Remove any non-digit characters except for the decimal point
      let value = inputVal.replace(/[^0-9.]/g, '');

      // If there's more than one decimal point, remove the extra ones
      const parts = value.split('.');
      if (parts.length > 2) {
          value = parts[0] + '.' + parts.slice(1).join('');
      }

      // Limit to two decimal places
      if (parts.length > 1) {
          value = parts[0] + '.' + parts[1].substring(0, 2);
      }

      // Format the value to have at least one digit before the decimal
      if (value) {
          if (!value.includes('.')) {
              value += '.';
          }
          // Ensure there's at least one digit before the decimal
          if (value.startsWith('.')) {
              value = '0' + value;
          }
      }

      setHeight(value)
  }

  useEffect(() =>{
    setHeight("")
    setWeight("")
    setImcValue("")
    setAge("")
    if(document.querySelector(".result_selected")){
      document.querySelector(".result_selected").classList.remove("result_selected")
    }


  }, [typeAge])

  return (
    <div className={styles.calculadora_container}>     

      <form className={styles.form_imc} onSubmit={handleIMCForm}>

          {/* <div className={styles.options_typeage}>
            <div>
              <div className={styles.typeAge_div}>
                Adulto
                <input onChange={(e) => setTypeAge("Adulto")} type="radio" name="typeAge" id="typeAge" />
            
              </div>
              <span>Acima de 18 anos</span>
            </div>
            <div>
              <div className={styles.typeAge_div}>
                Jovem
                <input onChange={(e) => setTypeAge("Jovem")} type="radio" name="typeAge" id="typeAge" />
            
              </div>
              <span>18 anos ou menos</span>
            </div>
          </div> */}
       

      <div className={styles.form_container}>
        <h3>Calculadora de IMC</h3>

        <label htmlFor="weight">
          <span>Peso (kg)</span>
          <input required value={weight} onChange={(e) => setWeight(e.target.value)} type="text" id='weight' placeholder='60.0'/>
        </label>

        <label htmlFor="height">
          <span>Altura (m)</span>
          <input required value={height} onChange={(e) => heightInput(e.target.value)} type="text" id='height' placeholder='1.70'/>
        </label>
        <button className='btn-green' type='submit'>Calcular</button>
      </div>


      </form>


      <div className={styles.result_container}>
        <h4>Seu IMC é: <span style={{color:"var(--banner-green)", fontSize:"50px"}}>{imcValue}</span></h4>
        <p>  Como chegamos ao seguinte número: o índice de massa corporal de um adulto é o seu peso em quilos (por exemplo, 80 kg), dividido por sua altura ao quadrado (vamos imaginar, 1,80 m x 1,80 m). </p>
      </div>  

      <div style={{backgroundColor:"#fafafa"}} className={styles.desc_result_container}>
        <h1>Entenda o seu resultado </h1>
        <div className={styles.img_results_container}>

          <div id='obesidade3'>
            <img src="https://abeso.org.br/wp-content/uploads/2019/12/imc_01.png.webp" alt="" />
            <h5>Acima de 40,0</h5>
            <h4>Obesidade
            grau III</h4>
            <p>Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.</p>
          </div>
          
          <div id='obesidade2'>
            <img src="https://abeso.org.br/wp-content/uploads/2019/12/imc_02.png.webp" alt="" />
            <h5>Entre 35,0 e 39,9</h5>
            <h4>Obesidade
            grau II</h4>
            <p>Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.</p>
          </div>

          <div id='obesidade1'>
            <img src="https://abeso.org.br/wp-content/uploads/2019/12/imc_03.png.webp" alt="" />
            <h5>Entre 30,0 e 34,9</h5>
            <h4>Obesidade grau I</h4>
            <p>Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.</p>
          </div>

          
          <div id='sobrepeso'>
            <img src="https://abeso.org.br/wp-content/uploads/2019/12/imc_04.png.webp" alt="" />
            <h5>Entre 25,0 e 29,9</h5>
            <h4>Sobrepeso</h4>
            <p>Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.</p>
          </div>

          
          <div id='normal'>
            <img src="https://abeso.org.br/wp-content/uploads/2019/12/imc_05.png.webp" alt="" />
            <h5>Entre 18,6 e 24,9</h5>
            <h4>Normal</h4>
            <p>Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.</p>
          </div>

          <div id='abaixo-normal'>
            <img src="https://abeso.org.br/wp-content/uploads/2019/12/imc_06.png.webp" alt="" />
            <h5>18,5 ou menos</h5>
            <h4>Abaixo do Normal</h4>
            <p>Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.</p>
          </div>
        </div>
      </div>

      <div className={styles.circunference_container}>
        <div style={{maxWidth:"650px"}}>
          <h3 style={{color:"grey", fontSize:"36px", marginTop:"-30px"}}>Gordura na barriga, perigo à vista!</h3>
          <p>Quando a gordura se acumula entre os órgãos do abdômen e aumenta a barriga, é perigosa, sempre merece ser combatida. Este tipo de gordura está por trás de muitos males fatais associados à obesidade. A medida da circunferência abdominal reﬂete de forma indireta o conteúdo de gordura entre os órgãos da região. A Organização Mundial da Saúde estabelece que a medida igual ou superior a 94 cm em homens e 80 cm em mulheres, já aumenta o risco, especialmente, para doenças ligadas ao coração. Eliminar gordura abdominal por meio da redução da ingestão calórica e prática de atividades aeróbicas, como caminhada, bicicleta, corrida, pode trazer muitos benefícios, ao reduzir os riscos de doenças. Mudando hábitos, dá para viver mais e melhor.</p>
        </div>

        <div className={styles.flex_row}>
          <p style={{color:"grey", fontSize:"26px"}}>Medidas de risco da circunferência abdominal</p>
         
         <div> <h4 style={{fontSize:"28px", color:"grey"}}>Masculino:<span style={{color:"var(--banner-green)", fontSize:"50px", marginLeft:"10px"}}>94cm</span></h4></div>

         <div> <h4 style={{fontSize:"28px", color:"grey"}}>Feminino:<span style={{color:"var(--banner-green)", fontSize:"50px", marginLeft:"10px"}}>80cm</span></h4></div>
         
          
          </div>

      </div>
    

    </div>
  )
}
