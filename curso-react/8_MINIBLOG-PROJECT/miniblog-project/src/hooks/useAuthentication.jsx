import React from 'react'
import {db} from "../firebase/config"


import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut} from "firebase/auth";
import { useState, useEffect } from 'react';


export const useAuthentication = () => {

    const[error, setError] = useState(null)
    const[loading, setLoading] = useState(null)

    //cleanup - deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth();

    function checkIfIsCancelled(){
        if(cancelled){
            return;
        }
    }

    const createUser = async (data) =>{
        checkIfIsCancelled()
        setError(null)
        setLoading(true)

        try {

            const {user} = await createUserWithEmailAndPassword(auth, data.email, data.password)

            await updateProfile(user, {displayName: data.displayName})

            setLoading(false)
            return user;
            
        } catch (error) {
            
            console.log(error.message)
            setError(error.message)

            if(error.message.includes("Password")){
                setError("A senha precisa conter pelo menos 6 caracteres")

            }
            else if(error.message.includes("email-already")){
                setError("E-mail já cadastrado")
            }
            else{
                setError("Ocorreu um erro, por favor tente mais tarde")
            }
        }

        setLoading(false)

    }

    const login = async (data) =>{
        checkIfIsCancelled()
        setLoading(true)
        setError(null)

        try {

            await signInWithEmailAndPassword(auth, data.email, data.password)
            setLoading(false)

        } catch (error) {
            console.log(error.message)
            setError(error.message)
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

 return {auth, createUser, error, loading, logout, login};
};

