import { useEffect, useState } from "react";

function useFetchData(url){
    const [data,setData] = useState("");
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        const fetchData = () =>{
            fetch(url)
            .then(response => {
                if(!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data =>{
                setData(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
        }
        fetchData();
    },[url])

    return {data,loading,error}
}

export default useFetchData;