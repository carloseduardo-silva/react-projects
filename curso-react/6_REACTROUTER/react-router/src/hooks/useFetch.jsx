import { useEffect, useState } from "react"


export const useFetch = (url) =>{

    const[config, setConfig] = useState()
    const[method, setMethod] = useState()
    const[callFetch, setCallFetch] = useState()
    const[data, setData] = useState()
    const[loading, setLoading] = useState(false)
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
    

    //get datas
    useEffect(() =>{

        async function fetchData(){

            setLoading(true)

            try {
                const res = await fetch(url)

                const json = await res.json()
    
                setData(json)
            } catch (error) {

                console.log(error.message)
                
            }

            setLoading(false)
        }

        fetchData()

    },[url, callFetch]);

    //get unique data by id
    useEffect(() =>{

    }, [])

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


    return {data, loading, httpRequisition}
}

