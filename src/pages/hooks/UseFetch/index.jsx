
import React from "react";
import fetchData from './useFetchData'

function UseFetch() {
    const {data,loading,error} = fetchData("https://jsonplaceholder.typicode.com/posts");
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error loading data</p>

    return (
        <div>
        <h1>Custom Hooks</h1>
        <p>Custom hook created to fetch data and display</p>
        {
            data && data.length > 0 ? (
                <ol>
                    {data.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ol>
            ) : (
                <p>No data available</p>
            )
        }
        </div>
    );
}
export default UseFetch;