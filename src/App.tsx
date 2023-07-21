import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./component/Home";
import UpcomingLaunches from "./component/UpcomingLaunches";
import PastLaunches from "./component/PastLaunches";
import TabComponent from "./component/TabBar";
import NotFound from "./component/NotFound";

const router = createBrowserRouter([
    {
        element:<TabComponent />,
        children:[
            {
                path:"/",
            },
            {
                path:"/home",
                element: <Home/>
            },
            {
                path:"/pastLaunches",
                element: <PastLaunches/>
            },
            {
                path:"/upcomingLaunches",
                element: <UpcomingLaunches/>
            },
            {
                path:"*",
                element: <NotFound/>
            }
        ]
    }
])
function App(){
    return(
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    )
}

export default App;