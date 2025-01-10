import React from 'react'

export const FirstChallenge = () => {

    const numA = 3;
    const numB = 8;

    const somar = () => {
        var soma = numA+numB;
        console.log(soma);
    }

  return (
    <div>
        <h3> Numero A: {numA}</h3>

        <br />

        <h3> Numero B: {numB}</h3>


        <button onClick={somar}> Somar Numeros!</button>

        <img src="/carro-fiat.webp" alt="carro" />
    </div>
  )
}
