import { useState, useEffect } from "react";

import { collection, query, orderBy, onSnapshot, where, QuerySnapshot} from "firebase/firestore";

import { db } from "../firebase/config";

export const useFetchDocuments = (docCollection, search=null, uid=null) => {

    const [documents, setDocuments] = useState(null)
    const[error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    //memory leak
    const [cancelled, setCancelled] = useState(false)


     useEffect(() =>{

        async function loadData() {
            if (cancelled) return
            setLoading(true)

            const collectionRef = await collection(db, docCollection)

            try {
                
                let q;

                //if we have a value passed in the search filter 
                if(search){
                    q = await query(collectionRef, where("tags", "array-contains", search), orderBy("createdAt", "desc"));

                }
                else{
                    q = await query(collectionRef, orderBy("createdAt", "desc"));
                }

            
                await onSnapshot(q, (querySnapshot) =>{
                    setDocuments(
                        querySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data(),
                        }))
                    )
                })

                setLoading(false)

            } catch (error) {

                setError(error.message)
                setLoading(false)
            }
        }

        loadData();
     }, [docCollection, uid, search, cancelled])


     useEffect(() =>{
        return () => setCancelled(true)
     }, [])

     return { error, loading, documents}
}