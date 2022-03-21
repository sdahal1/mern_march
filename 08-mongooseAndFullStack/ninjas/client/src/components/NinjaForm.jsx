import React, {useState} from 'react';
import axios from 'axios';

const NinjaForm = () => {

    let [firstName,setFirstName] = useState("");
    let [age,setAge] = useState(null);
    let [isVeteran,setIsVeteran] = useState(false);
    let [profilePicUrl,setProfilePicUrl] = useState("");


    const createNinja = (e)=>{
        e.preventDefault();
        //create an object to store the from info in
        let formInfo = {firstName, age, isVeteran,profilePicUrl};

        axios.post("http://localhost:8000/api/ninjas",formInfo)
            .then(res=>{
                console.log("res after posting the form is this-->", res);
            })
            .catch(err=>{
                console.log("err->", err);
            })
        
    }


    return (
        <div>
            <form onSubmit={createNinja}>
                <div className="form-group">
                    <label htmlFor="">First Name:</label>
                    <input type="text" name="" id="" className="form-control" onChange={(e)=>{setFirstName(e.target.value)}} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Age:</label>
                    <input type="number" name="" id="" className="form-control" onChange={(e)=>{setAge(e.target.value)}} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Profile Picture URL:</label>
                    <input type="text" name="" id="" className="form-control" onChange={(e)=>{setProfilePicUrl(e.target.value)}} />
                </div>
                <div className="form-group">
                    <label htmlFor="isVeteran">Is Veteran?</label>
                    <input type="checkbox" name="" id="isVeteran" onChange={(e)=>{setIsVeteran(e.target.checked)}}/>
                </div>
                <input type="submit" value="Create Ninja!" />
            </form>
        </div>
    );
};

export default NinjaForm;