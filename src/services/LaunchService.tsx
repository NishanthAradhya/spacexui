import http from "../http-common";
import { ILaunch } from "../models/Launch.type";
const getAll = () => {
  return http.get<Array<ILaunch>>("/launch");
};

const get = (id: any) => {
  return http.get<ILaunch>(`/launch/${id}`);
};
const getPastLaunches = () => {
    return http.get<Array<ILaunch>>("/launch/past");
  };
const getUpcoming = () => {
    return http.get<Array<ILaunch>>("/launch/upcoming");
  };
  
const LaunchService = {
    getAll,
    get,
    getPastLaunches,
    getUpcoming,
  };

  export default LaunchService