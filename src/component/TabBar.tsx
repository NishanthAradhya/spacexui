import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Home from './Home';
import UpcomingLaunches from './UpcomingLaunches';
import PastLaunches from './PastLaunches';
import { Outlet } from 'react-router-dom';

function TabComponent() {
  return (
    <>
    <Tabs
      defaultActiveKey="home"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="All Launches">
        <Home/>
      </Tab>
      <Tab eventKey="profile" title="Upcoming Launches">
        <UpcomingLaunches></UpcomingLaunches>
      </Tab>
      <Tab eventKey="longer-tab" title="Past Launches">
        <PastLaunches/>
      </Tab>
    </Tabs>
    <Outlet></Outlet>

    </>
  );
}

export default TabComponent;