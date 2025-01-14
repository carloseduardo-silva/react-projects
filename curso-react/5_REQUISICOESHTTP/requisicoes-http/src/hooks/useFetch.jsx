import { useState, useEffect } from "react";

export const useFetch = (url) =>{

    const[data, setData] = useState(null)
    const [method, setMethod] = useState()
    const[config, setConfig] = useState()
    const [callFetch, setCallFetch] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const [id, setId] = useState()

    const httpRequisition =  (data, method) => {
        if(method == "POST"){
            setConfig({
                method: "POST",
                headers: {
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(data)
            });
        }

        else if(method == "DELETE"){

            setId(data.id)
            setConfig({
                method:"DELETE",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
        }

        setMethod(method)
    }
    

    //get the datas
    useEffect(()=>{

        const fetchData = async () =>{
            setLoading(true)
           
            try {
                const res = await fetch(url)

                const json = await res.json()
    
                setData(json)

            } catch (error) {
                console.log(error)
                setError("Houve algum erro durante a requisição")
            }

            setLoading(false)
        }

        fetchData()
    }, [url, callFetch])

    //post the new datas
    useEffect(() =>{

        if(method == "POST"){
            const postData = async () =>{

                setLoading(true)

                const res = await fetch(url, config)

                const json = await res.json()

                setCallFetch(json);
                setLoading(false)
            }

            postData()
        }
       
    }, [config, method, url])

    //delete the datas
    useEffect(() =>{

        if(method == "DELETE"){
            const deleteData = async () =>{

                setLoading(true)

                const res = await fetch(url+"/"+id, config)

                const json = await res.json()

                setCallFetch(json);
                setLoading(false)
            }

            deleteData()
        }
        
    }, [config, method, url])

    return { data, httpRequisition, loading, error };

}