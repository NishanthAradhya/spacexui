import { useEffect, useState } from "react";
import "./Home.style.css"
import { ILaunch } from "../models/Launch.type";
import LaunchList from "./Launches/LaunchList";
import LaunchService from "../services/LaunchService"

const UpcomingLaunches = () =>{
    const [launchList,setLaunchList] = useState([] as ILaunch[]);
    const getLaunchList =()=>{
        LaunchService.getUpcoming()
        .then((response:any)=>{
            setLaunchList(response.data);
        })
        .catch((e: Error) => {
        console.log(e);
      });
    }
    useEffect(() => {
        getLaunchList();
      }, []);
    return(
        <div>
            {/* <article className="article-header">
                <header>
                    <h1>Space X Launches</h1>
                </header>
            </article> */}
            <section className="section-content">
                {/* <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3>All Launches</h3>
                        </div>
                    </div>
                </div> */}
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <LaunchList list={launchList} />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default UpcomingLaunches;