import { useState, useEffect } from "react";
import {db} from "../firebase/config"

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut} from "firebase/auth"



export const useAuthentication = () =>{

    const [error, setError] = useState()
    const [loading, setLoading] = useState()
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIfIsCancelled(){
        if(cancelled){
            return;
        }
    }

    const createUser = async (data) =>{
        checkIfIsCancelled()
        setError("")
        setLoading(true)

        try {

            const {user} = await createUserWithEmailAndPassword(auth, data.email, data.password)
            
            await updateProfile(user, {displayName: data.displayName})

            setLoading(false)
            return user
        } catch (error) {
            
            if(error.message.includes("Password")){
                setError("A senha precisa conter pelo menos 6 caracteres")
            }   
            else if(error.message.includes("email-already")){
                setError("E-mail já cadastrado")
            }
            else{
                setError(error.message)
            }


            setLoading(false)
        }


    }

    const login = async (data) =>{
        checkIfIsCancelled()
        setError("")
        setLoading(true)

        try {
            
            await signInWithEmailAndPassword(auth, data.email, data.password)

            setLoading(false)
        } catch (error) {
            
            setLoading(false)
            if(error.message.includes("invalid-credential")){
                setError("E-mail ou senha incorreto")

            }
            else{
                setError("Ocorreu um erro, por favor tente mais tarde")
            }
        }
    }

    const logout = () =>{
        checkIfIsCancelled()
        signOut(auth)
    }

     useEffect(() =>{
            return () => setCancelled(true);
        }, [])

    return {auth, createUser, login, logout, loading, error};
};