import React, {useState} from 'react';
import Chart from "react-apexcharts";
import "./styles.scss"
import { Icon, Tooltip } from '@contentstack/venus-components';
import OverviewGraph from './OverviewGraph';

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
const Overview = () => {
  const [trafficTimeFilterState,setTrafficTimeFilterState] = useState<DatetimeFilterState>({
    dateRange:"Week",
    label:"Today",
    startWeekYear: null,
    endWeekYear: null
  })
  const [revenueTimeFilterState,setRevenueTimeFilterState] = useState<DatetimeFilterState>({
    dateRange:"Week",
    label:"Today",
    startWeekYear: null,
    endWeekYear: null
  })
  const [conversionTimeFilterState,setConversionTimeFilterState] = useState<DatetimeFilterState>({
    dateRange:"Week",
    label:"Today",
    startWeekYear: null,
    endWeekYear: null

  })
  const [trafficData, setTrafficData] = useState({options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  })
  const [revenueData, setRevenueData] = useState({options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,2000]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91, 100,120]
      }
    ]
  })
  const [conversionData, setConversionData] = useState({options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,2000,2001]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91,100,120,150]
      }
    ]
  })
  const [currentFullReportView, setCurrentFullReportView] = useState<FullReportView|null>(null)


  return (

            <div className='overviewContainer'>
                <h2>Overview</h2>
                <div>
                <OverviewGraph
                  cardHeading="Traffic"
                  cardHeadingTooltipContent="A measure of all the users that visit your website. 
                  They are split into the users which have their journeys influenced
                  and personalised by Personify XP and those who haven’t."
                  timeFilterState={trafficTimeFilterState}
                  setTimeFilterState={setTrafficTimeFilterState}
                  graphData={trafficData}
              />
              </div>
                <OverviewGraph
                  cardHeading="Revenue"
                  cardHeadingTooltipContent="A measure of all the users that visit your website. 
                  They are split into the users which have their journeys influenced
                  and personalised by Personify XP and those who haven’t."
                  timeFilterState={revenueTimeFilterState}
                  setTimeFilterState={setRevenueTimeFilterState}
                  graphData={revenueData}
              />
                <OverviewGraph
                  cardHeading="Conversion"
                  cardHeadingTooltipContent="A measure of all the users that visit your website. 
                  They are split into the users which have their journeys influenced
                  and personalised by Personify XP and those who haven’t."
                  timeFilterState={conversionTimeFilterState}
                  setTimeFilterState={setConversionTimeFilterState}
                  graphData={conversionData}
              />
          </div>
  )
}

export default Overview