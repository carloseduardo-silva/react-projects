import { useState, useEffect } from "react";

import { doc, getDoc} from "firebase/firestore";

import { db } from "../firebase/config";

export const useFetchDoc = (docCollection, id) => {

    const [document, setDocument] = useState(null)
    const[error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    //memory leak
    const [cancelled, setCancelled] = useState(false)


     useEffect(() =>{

        async function loadDoc() {
            
            if (cancelled) return

            setLoading(true)

            try {
                
                const docRef = await doc(db, docCollection, id);
                const docSnap = await getDoc(docRef)

                setDocument(docSnap.data())

                setLoading(false)

            } catch (error) {
                console.log(error)
                setError(error.message)
                setLoading(false)
            }

           
        }

        loadDoc();
     }, [docCollection, id, cancelled])


     useEffect(() =>{
        return () => setCancelled(true)
     }, [])

     return { error, loading, document}
}