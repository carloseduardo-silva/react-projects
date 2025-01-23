import React from 'react'
import { useMemo } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


const HookUseMemo = () => {

    const[number, setNumber] = useState()

    // const premiumNumbers = ["0", "100", "200"]

    const premiumNumbers = useMemo(() =>{
        return ["0", "5", "100"]
    }, [])

    useEffect(() =>{
        console.log("premium numbers foi alterado!")
    }, [premiumNumbers])

  return (
    <div className='separate'>
        <h2>Hook: useMemo</h2>

        <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
        {premiumNumbers.includes(number) ? <p>Acertou o numero!</p> :""}

    </div>
  )
}

export default HookUseMemo