import {useEffect, useState} from "react";
import client from "../client"

export default function useSanity(query){
    const[data,setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await client.fetch(query);
            setData(result);
        };

        fetchData();
    }, [query]);

    return data;
}