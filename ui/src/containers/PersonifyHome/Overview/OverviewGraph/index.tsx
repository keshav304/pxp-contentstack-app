import React, {useRef, useState} from 'react';
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import "./styles.scss"
import { Icon, Tooltip } from '@contentstack/venus-components';
import useOutsideClick from '../useOutsideClick.js';
import DateFilter from '../DateFilter';
import { useNavigate } from 'react-router-dom';

type ApexAxisChartSeries = {
    name: string;
    data: number[] | { x: any; y: any }[] | [number, number][] | [number, number[]][];
  }[];
  

type ApexNonAxisChartSeries = number[];
enum FullReportView {
    Traffic="Traffic",
    Revenue="Revenue",
    Conversion="Conversion"
  }
interface DatetimeFilterState {
    dateRange:String,
    label:String,
    startWeekYear: Date | null,
    endWeekYear: Date | null
}
interface OverviewGraphProps {
    cardHeadingTooltipContent: String;
    cardHeading: String;
    timeFilterState:DatetimeFilterState
    setTimeFilterState:React.Dispatch<React.SetStateAction<DatetimeFilterState>>;
    graphData:{
        options: ApexOptions,
        series: ApexAxisChartSeries | ApexNonAxisChartSeries | undefined
    };
    setCurrentFullReportView?: React.Dispatch<React.SetStateAction<FullReportView | null>>
}
const OverviewGraph:React.FC<OverviewGraphProps> = (props:OverviewGraphProps) => {
    const impactRef = useRef(null);
    const [filterFormIsActive, setFilterFormIsActive] = useState(false)
    useOutsideClick(impactRef, () => setFilterFormIsActive(false));
//   const [timefilterstate,setTimefilterstate] = useState({
//     daterange:"Today"
//   })
//   const [trafficData, setTrafficData] = useState({options: {
//       chart: {
//         id: "basic-bar"
//       },
//       xaxis: {
//         categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
//       }
//     },
//     series: [
//       {
//         name: "series-1",
//         data: [30, 40, 45, 50, 49, 60, 70, 91]
//       }
//     ]
//   })
const navigate = useNavigate()
  return (
    <div className='overviewContainer'>
      <div className='overviewCardContainer'>
        <div className='overviewCardHeading'>
          <h3><span>{props.cardHeading}</span></h3>
          <span>
          <Tooltip
                content={props.cardHeadingTooltipContent}
                position="right"
                type="primary"
                variantType="dark"
                showArrow={true}
                maxWidth={175}
                >
                  <Icon icon="Information" className="informationIcon" size="small"/>
            </Tooltip>
          </span>
        </div>
      <div className="row">
          <div className="mixed-chart">
            <Chart
              options={props.graphData.options}
              series={props.graphData.series}
              type="bar"
              width="1200"
              height="350"
            />
          </div>
        </div>
                <div className="overviewCardFooterContainer">
                <div className="overviewCardFooterFilterAndNoteContainer">
                  <div ref={impactRef} className="overviewCardFooterFilter">
                      <div onClick={()=>setFilterFormIsActive(!filterFormIsActive)}>
                      <div ><Icon icon='Date' size="medium" /></div>
                        <div><span>{props.timeFilterState.label}</span></div>
                      </div>
                      <DateFilter filterFormIsActive={filterFormIsActive} 
                      dateTimeFilters={props.timeFilterState} 
                      setDateTimeFilter={props.setTimeFilterState}/>
                  </div>
                  <div className="overviewCardFooterNote">
                  <span>Note</span>
                  <Tooltip
                        content="the maximum difference between the start week/month/year
                        and the end week/month/year cannot be greater than 12"
                        position="right"
                        type="primary"
                        variantType="dark"
                        showArrow={true}
                        maxWidth={175}
                        >
                          <Icon icon="Information" className="informationIcon" size="small"/>
                        </Tooltip>
                  </div>
                </div>
                <div className='fullReportContainer' onClick={()=> {
                  if (props.cardHeading==="Traffic") {
                    console.log("cardHeading", props.cardHeading)
                    navigate(`/home/overview/${props.cardHeading}`, {state:{graphData:props.graphData,cardHeading:props.cardHeading}})
                  }
                  if (props.cardHeading==="Revenue") {
                    navigate(`/home/overview/${props.cardHeading}`, {state:{graphData:props.graphData,cardHeading:props.cardHeading}})
                  }
                  if (props.cardHeading==="Conversion") {
                    navigate(`/home/overview/${props.cardHeading}`, {state:{graphData:props.graphData,cardHeading:props.cardHeading}})
                  }
                  // if (props.setCurrentFullReportView) {
                  //     props.setCurrentFullReportView(props.cardHeading==="Traffic"?FullReportView.Traffic:
                  //     props.cardHeading==="Revenue"? FullReportView.Revenue : FullReportView.Conversion)
                  // }
                }}>
                  <h4>Full Report</h4>
                  <span><Icon icon="RightArrow" className="" size="small"/></span>
                </div>
              </div>

        </div>
    </div>
  )
}

export default OverviewGraph