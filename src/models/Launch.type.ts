import { Url } from "url";

export interface ILaunch {
        flight_Number :number;
        mission_Name : string;
        launch_Year :string;
        launch_Date_Utc :Date;
        details :string;
        links : ReferenceLinks;
        upcoming:boolean;
        launch_Site:LaunchSite;
}
interface ReferenceLinks {
    wikipedia:string;
    video_Link:string;
    flickr_Images:Array<string>;
}

interface LaunchSite{
    site_Id:string;
    site_Name:string;
    site_Name_Long:string;
}
