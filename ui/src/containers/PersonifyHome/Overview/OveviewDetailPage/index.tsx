import React, {useState} from 'react';
import Chart from "react-apexcharts";
import "./styles.scss"
import { Icon, Tooltip } from '@contentstack/venus-components';
import OverviewGraph from '../OverviewGraph';
import { useLocation } from 'react-router-dom';

// import OverviewGraph from './OverviewGraph';

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
const OverviewDetailPage = () => {
    const location = useLocation()
      const [timeFilterState,setTimeFilterState] = useState<DatetimeFilterState>({
        dateRange:"Week",
        label:"Today",
        startWeekYear: null,
        endWeekYear: null
      })
  return (
    <div className='overviewDetailContainer'>
        <h2>Overview / {location.state.cardHeading}</h2>
        <div className='overviewContainer'>
      <div className='overviewCardContainer'>
        <div className='overviewCardHeading'>
          <h3><span>{location.state.cardHeading}</span></h3>
          <span>
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
          </span>
        </div>
      <div className="row">
          <div className="mixed-chart">
            <Chart
              options={location.state.graphData.options}
              series={location.state.graphData.series}
              type="bar"
              width="1200"
              height="350"
            />
          </div>
        </div>

        </div>
    </div>
    </div>

  )
}

export default OverviewDetailPage