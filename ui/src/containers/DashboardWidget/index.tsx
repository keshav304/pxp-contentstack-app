/* Import our modules */
/* Import node module CSS */
/* Import our CSS */
import "./styles.scss";

/* Import React modules */
import React, { useEffect, useState } from "react";

/* Import other node modules */
import ContentstackAppSdk from "@contentstack/app-sdk";
import { TypeSDKData } from "../../common/types";
import MissionTable from "../SidebarWidget/components/mission-table";

const DashboardWidget: React.FC = function () {
  const [state, setState] = useState<TypeSDKData>({
    config: {},
    location: {},
    appSdkInitialized: false,
  });

  useEffect(() => {
    ContentstackAppSdk.init().then(async (appSdk) => {
      const config = await appSdk.getConfig();
      appSdk?.location?.DashboardWidget?.frame?.enableAutoResizing?.();
      setState({
        config,
        location: appSdk.location,
        appSdkInitialized: true,
      });
    });
  }, []);
  
  const Tabledata =[ 
    {
      mission:'Scarves',
      revenue:'361,108',
      traffic: "3.92%",
      conversion: "0.65%",
      uid: 0
    },
    {
      mission:'Crossbody vs Olympia',
      revenue:'61,523',
      traffic: "3.92%",
      conversion: "0.29%",
      uid: 1
    },
    {
      mission:'Womens Bags',
      revenue:'31,202',
      traffic: "3.92%",
      conversion: "0.32%",
      uid: 2
    },
    {
      mission:'Mens Footwear',
      revenue:'121,531',
      traffic: "3.92%",
      conversion: "0.52%",
      uid: 3
    },
    {
      mission:'Mens Jackets',
      revenue:'118,368',
      traffic: "1.23%",
      conversion: "0.45%",
      uid: 4
    },
    {
      mission:'Womens Jackets',
      revenue:'218,305',
      traffic: "0.83%",
      conversion: "0.93%",
      uid: 5
    },
    {
      mission:'Men Belts',
      revenue:'218,334',
      traffic: "0.23%",
      conversion: "0.73%",
      uid: 6
    }
  ]
  return (
    <div className="layout-container">
      {
        state.appSdkInitialized && 
        <div className="dashboard-table-container">
         <MissionTable args={{ canSearch:false}} data={Tabledata} totalCounts={7}/>
        </div>
      }
    </div>
  )
};

export default DashboardWidget;
