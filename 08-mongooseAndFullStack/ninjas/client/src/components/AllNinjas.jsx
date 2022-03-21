import React, {useState, useEffect} from 'react';
import axios from 'axios';

const AllNinjas = () => {

    //state variable to store all ninjas in
    const [ninjaList, setNinjaList] = useState([]);


    useEffect(()=>{
        axios.get("http://localhost:8000/api/ninjas")
            .then(res=>{
                console.log("response is this-->",res.data.results)
                setNinjaList(res.data.results);
            })
            .catch(err=>{
                console.log("errr", err)
            })
    },[])


    return (
        <div>
            <h2>All the ninjas below</h2>
            {
                ninjaList.map((ninjaObj)=>{
                    return(
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">{ninjaObj.firstName}</h4>
                                <p className="card-text">
                                    Age: {ninjaObj.age}
                                </p>
                                <img src={ninjaObj.profilePicUrl} alt="" height="200px" width="200px" />
                                
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default AllNinjas;