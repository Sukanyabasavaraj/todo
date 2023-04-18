import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

const EmpDetail = () => {
    const {empid} = useParams();

    const [empdata,empdatachange]=useState({});
    useEffect(()=>{
        fetch("http://localhost:8000/employee/"+empid).then((res)=>{
            return res.json()
        }).then((resp)=>{
            empdatachange(resp)
        }).catch((err)=>{
            console.log(err.message)
        })
    },[])
    return (
        <div className="container">
            <div className="card row" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h2>Employee Detail</h2>
                </div>
                <div className="card-body">

                    {
                        empdata &&
                        <div>
                            <h2>The employee name is:<b>{empdata.name}</b> ({empdata.id})</h2>
                            <h3>contact details</h3>
                            <h5>Email is : {empdata.email}</h5>
                            <h5>phone is: {empdata.phone}</h5>
                            <Link className="btn btn-danger" to="/">Back to Listing</Link>
                        </div>
                    }
                </div>
            </div>
        </div>

    )

}
export default EmpDetail