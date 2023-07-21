import { useState } from "react";
import { ILaunch } from "../../models/Launch.type";
import LaunchDetailModal from "./LaunchDetails";
import "./LaunchList.style.css";

type Props ={
    list :ILaunch[];
}
const LaunchList =(props:Props) =>{
    const {list} = props;
    const [showModal,setShowModal] = useState(false);
    const viewDetails= ()=>{
        setShowModal(true);
    }    
    return (
        <div className="table-responsive">
            <table className="table ">
            <thead className="thead-dark">
                <tr>
                <th scope="col">Flight No.</th>
                <th scope="col">Mission Name</th>
                <th scope="col">Year</th>
                <th scope="col">Upcoming</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {list.map((launch,index) =>{
                    return(
                        <tr key={launch.flight_Number}>
                        <td scope="row">{launch.flight_Number}</td>
                        <td>{launch.mission_Name}</td>
                        <td>{launch.launch_Year}</td>
                        <td>{launch.upcoming ? "Yes": "No"}</td>
                        <td>
                            <LaunchDetailModal data={launch}/>
                                {/* <input type='button' value="View Details" onClick={()=> setShowModal(true)}></input> */}
                        </td>
                        </tr>
                    );
                })}
            </tbody>
            </table>
            
        </div>
    )
}

export default LaunchList;