import { Route, Routes } from "react-router-dom";

import Apps from "./App.jsx";
import Funds from "./Funds.jsx";
import Holdings from "./Holdings";

import Orders from "./Orders.jsx";
import Positions from "./Positions.jsx";
import Summary from "./Summary.jsx";
import WatchList from "./WatchList.jsx";
import { GeneralContextProvider } from "./GeneralContext.jsx";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
          <WatchList />
      </GeneralContextProvider>
        
      <div className="content">
        <Routes>
          <Route index element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;