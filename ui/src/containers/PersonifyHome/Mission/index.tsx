import React from "react";

import MissionTable from "../../SidebarWidget/components/mission-table";
import "./styles.scss";
import { Icon, cbModal } from "@contentstack/venus-components";
import { ModalBody, ModalHeader } from "@contentstack/venus-components";
import { useLocation } from "react-router-dom";
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
interface MissionProps {
 
//   setMissionDetailPageinfo: React.Dispatch<React.SetStateAction<{
//     mission: string;
//     traffic?: string;
//     conversion?: string;
//     revenue?: string;
// }>>
}
const Mission:React.FC<MissionProps> = (props:MissionProps) => {
  const onClose = () => {
    console.log('on modal close')
  }
  const ModalComponent = (props:any) => {
        return (
          <div className="missionDetailModal">
            <ModalHeader className="modalCloseBtn" closeModal={props.closeModal} />
    
            <ModalBody className='missionDetailModalBody'>
              <h3>‘Missions’ are Smart Collections of Users</h3> <br />
                  <p>
                  Our system is built to recognise users that are behaving in a similar way.
                  When enough data is collect PersonifyXP then collects these and groups them 
                  into ‘Missions’ which at it’s core are a collection of similar behaiving users.
                  </p>
            </ModalBody>
          </div>
        )
  }
const handleClick = (args: any) => {
console.log('handleClick', args)
    cbModal({
      component: (props:any) => <ModalComponent {...props}/>,
      modalProps: {
        onClose,
        onOpen: () => {
          console.log('onOpen gets called')
        },
        size: 'large',
      },
      testId: 'cs-modal-storybook',
    })
  }
  const location = useLocation()
  console.log('mdp', location)
  return (
    <div className="layout-container">
        <div className="dashboard-table-container">
        <h2 className="missionPageHeadingContainer">
          <span className="missionPageMainHeading">Missions</span>
          <span className="missionPageHeadingIconContainer" onClick={handleClick}>
            <Icon icon="Information" className="informationIcon" size="small"/>
            <span>what are missions?</span>
          </span>
          </h2>
         <MissionTable 
           args={{ canSearch:false}}
           data={Tabledata}
           totalCounts={7}
           />
        </div>
    </div>
  )
};

export default Mission;
