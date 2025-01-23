import React from 'react'
import { useState } from 'react'
import { useImperativeHandle } from 'react'
import { forwardRef } from 'react'
import { useRef } from 'react'

const SomeComponent = forwardRef(
    (props, ref) => {

        const inputComponentRef = useRef()

        const [showMsg, setShowMsg] = useState(false)
    
        useImperativeHandle(ref, () =>{
            return{
                validate: () =>{
                    if(inputComponentRef.current.value.length > 3){
                        inputComponentRef.current.value = "";
                        setShowMsg(false)
                    }  
                    else{
                        setShowMsg(true)
                    }
                },
            };
        });

      return (
        <div>
           <p> Insira no máximo 3 caracteres</p>
    
           <input type="text" ref={inputComponentRef} />
           {showMsg && <p>Mensagem correta</p>}
        </div>
      )
    }
    
)
export default SomeComponent