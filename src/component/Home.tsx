import { useEffect, useState } from "react";
import "./Home.style.css"
import { ILaunch } from "../models/Launch.type";
import LaunchList from "./Launches/LaunchList";
import LaunchService from "../services/LaunchService"

const Home = () => {
    //using state to store the fetched launches list
    const [launchList, setLaunchList] = useState([] as ILaunch[]);
    const getLaunchList = () => {
        LaunchService.getAll()
            .then((response: any) => {
                setLaunchList(response.data);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    }
    useEffect(() => {
        getLaunchList();
    }, []);
    return (
        <div>
            <section className="section-content">
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

export default Home;