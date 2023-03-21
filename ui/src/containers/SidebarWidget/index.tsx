/* Import node module CSS */
/* Import our CSS */
import "./styles.scss";

import ReferencesTable, { ReferencesTableLoading } from "./components/references-table";

/* Import other node modules */
import ContentstackAppSdk from "@contentstack/app-sdk";
import Extension from "@contentstack/app-sdk/dist/src/extension";
import { IAdvancedPublishingConfig } from "./models/models";
import Options from "./components/options";
/* Import React modules */
import React from "react";
import ShowWarning from "./components/show-warning";
/* Import our modules */
import { useApp } from "./store/store";
import MissionTable from './components/mission-table';
import SidebarAccordion from "./components/sidebar-accordion";

function Error() {
  const { error } = useApp();
  return <>Error...: {JSON.stringify(error)}</>;
}

const SidebarWidget: React.FC = function () {
  const { loading, error, showWarning, setExtensionConfig } = useApp();

  React.useEffect(() => {
    ContentstackAppSdk.init().then((appSdk: Extension) => {
      appSdk
        ?.getConfig()
        .then((sidebarConfig: any) => {
          console.log("Config", sidebarConfig);
          if (sidebarConfig && sidebarConfig.advancedPublishingConfig) {
            const config: IAdvancedPublishingConfig = {
              ...sidebarConfig.advancedPublishingConfig,
              location: appSdk.location,
              appSdkInitialized: true,
              entryUid: appSdk.location?.SidebarWidget?.entry?.getData()?.uid,
              contentTypeUid: appSdk.location?.SidebarWidget?.entry?.content_type?.uid,
            };
            console.log('config', config)
            setExtensionConfig(config);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }, [setExtensionConfig]);
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
      {error && <Error />}
      {showWarning && <ShowWarning />}
      {/* {!showWarning && !error && <Options />} */}
      {/* {!showWarning && !error && <MissionTable />} */}
      {!showWarning && !error && 
      <SidebarAccordion
      args={{
        title:"Personify Missions",
        renderExpanded:true,
        className:"personify-accordion"
        }}
      content={<MissionTable args={{ fullRowSelect: true}} data={Tabledata} totalCounts={7}/>}
      />}
      {/* {!showWarning && !error && <>{loading ? <ReferencesTableLoading /> : <ReferencesTable />}</>} */}
    </div>
  );
};

export default SidebarWidget;
