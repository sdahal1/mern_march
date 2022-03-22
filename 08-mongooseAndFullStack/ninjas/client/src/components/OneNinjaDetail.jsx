import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';

const OneNinjaDetail = () => {

    const {_id} = useParams();
    const [info, setInfo] = useState({})


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/ninjas/${_id}`)
            .then(res=>{
                console.log("res->", res)
                setInfo(res.data.results);
            })
            .catch(err=>{
                console.log("err->", err)
            })

    }, [])

    return (
        <div>
            <h3>Details about {info.firstName}</h3>
            <p>Id: {_id}</p>
            <p>Age: {info.age}</p>
            <p>Veteran Status: <b>{info.isVeteran? "Veteran": "Not a Veteran"}</b></p>
        </div>
    ); 
};

export default OneNinjaDetail;