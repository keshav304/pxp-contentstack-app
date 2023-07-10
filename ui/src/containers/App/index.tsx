/* Import node module CSS */
import "@contentstack/venus-components/build/main.css";
/* Import our CSS */
import "./styles.scss";

import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

import ConfigScreen from "../ConfigScreen";
/* Import other node modules */
/* Import our modules */
import ErrorBoundary from "../../components/ErrorBoundary";
/* Import React modules */
import React from "react";
import SidebarWidget from "../SidebarWidget";
// import DashboardWidget from "../DashboardWidget";
import PersonifyHome from "../PersonifyHome";
import Mission from './../PersonifyHome/Mission/index';
import Overview from "../PersonifyHome/Overview";
import Referrers from "../PersonifyHome/Referrers";
import PersonifyMissionDetailPage from './../PersonifyHome/Mission/PersonifyMissionDetailPage/index';
import OverviewDetailPage from "../PersonifyHome/Overview/OveviewDetailPage";

const HomeRedirectHandler = function () {
  if (window?.location?.pathname !== "/") {
    return <Navigate to={{ pathname: window.location.pathname }} />;
  }
  return null;
};
// const RandomWidget = function () {
//     return <h1>Overview Widget</h1>;
  
// };

const App: React.FC = function () {
  return (
    <div className="app">
      <ErrorBoundary>
        <HashRouter>
          {/* If the path is changed here,
              be sure to update the path for corresponding UI location
              in Update App API */
          /* Below list has all the possible UI paths\.
              Keep only the paths that are required for your app and
              remove the remaining paths and their source code also. */}
          <Routes>
            <Route path="/" element={<HomeRedirectHandler />} />
            <Route path="/config" element={<ConfigScreen />} />
            <Route path="/home" element={<PersonifyHome />}>
              <Route index element={<Mission />}/>
              <Route path=":id" element={<PersonifyMissionDetailPage />} />
              <Route path="overview" element={<Overview />}/>
              <Route path="overview/:id" element={<OverviewDetailPage />}/>
              <Route path="referrers" element={<Referrers />} />
            </Route>
            <Route path="/sidebar-widget" element={<SidebarWidget />} />
          
            {/* <Route path="/mission" element={<DashboardWidget />} />
            <Route path="/overview" element={<RandomWidget />} /> */}

              {/* <Route path="/custom-field" element={<CustomField />} /> */}
            </Routes>
        </HashRouter>
      </ErrorBoundary>
    </div>
  );
};

export default App;
