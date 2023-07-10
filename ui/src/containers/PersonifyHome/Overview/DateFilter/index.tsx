import React, {useState} from 'react';
import { Dropdown, Select, Icon } from '@contentstack/venus-components';
import DatePicker from "react-datepicker";

import "./styles.scss"
interface DatetimeFilterState {
    dateRange:String,
    label:String,
    startWeekYear: Date | null
    endWeekYear: Date | null
}
interface DateFilterProps {
    filterFormIsActive: Boolean,
    dateTimeFilters:DatetimeFilterState;
    setDateTimeFilter:React.Dispatch<React.SetStateAction<DatetimeFilterState>>
}
interface WeekOption {
    id:Number
    label:String
    searchableLabel:String
    value: Number
}
const DateFilter:React.FC<DateFilterProps> = (props:DateFilterProps) => {
    const [startvalue, updateStartvalue] = useState<WeekOption|null>(null)
    const [endvalue, updateEndvalue] = useState<WeekOption|null>(null)
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(new Date());
    const handleStartValueUpdate = (data:WeekOption) => {
        console.log(data)
        updateStartvalue(data)
      }
    
    const handleEndValueUpdate = (data:WeekOption) => {
        console.log(data)
        updateEndvalue(data)
      }
    console.log('props.dateTimeFilters',props.dateTimeFilters)
  return (
    <div  className={props.filterFormIsActive ? "overviewCardFooterFilterFormIsActive":"overviewCardFooterFilterForm"}>
            <div className='daterangeDropdown'>
                <label>Date Range</label>
                      <div className="dropdownWrapper">
                          <Dropdown
                              closeAfterSelect
                              highlightActive
                              list={[
                                  {
                                      action: function noRefCheck() { },
                                      default: true,
                                      disable: false,
                                      label: 'Week',
                                      value: 'Week'
                                  },
                                  {
                                      action: function noRefCheck() { },
                                      default: false,
                                      disable: false,
                                      label: 'Month',
                                      value: 'Month'
                                  },
                                  {
                                      action: function noRefCheck() { },
                                      default: false,
                                      disable: false,
                                      label: 'Year',
                                      value: 'Year'
                                  }
                              ]}
                              type="select"
                              withArrow
                              onChange={(args)=>{props.setDateTimeFilter({...props.dateTimeFilters,dateRange:args.label})}}
                          >
                              <Icon icon="Settings" />
                          </Dropdown>
                      </div>
                </div>
        {
            props.dateTimeFilters.dateRange === 'Week' ?
            <div>
                  <div className="startFilterContainer">
                    <div className='weekYearContainer'>
                        <label>Start Year</label>
                        <DatePicker
                        selected={props.dateTimeFilters.startWeekYear}
                        onChange={(date: any) => props.setDateTimeFilter({...props.dateTimeFilters, startWeekYear: date})}
                        showYearPicker
                        dateFormat="yyyy"
                        />
                    </div>
                    <div className='weekContainer'>
                        <label>Start Week</label>
                            <Select
                                hideSelectedOptions
                                maxMenuHeight={200}
                                onChange={handleStartValueUpdate}
                                options={[...Array(52).keys()].map(key=>{
                                    return {
                                        id: key,
                                        label: `Week ${key+1}`,
                                        searchableLabel: `Week ${key+1}`,
                                        value: key+1
                                    }                                      
                                })}
                                isClearable={true}
                                placeholder="Select Week"
                                value={startvalue}
                                width="200px"
                            />
                    </div>
                  </div>
                  <div className="endFilterContainer">
                    <div className='weekYearContainer'>
                    <label>End Year</label>
                            <DatePicker
                            selected={props.dateTimeFilters.endWeekYear}
                            onChange={(date: any) => props.setDateTimeFilter({...props.dateTimeFilters, endWeekYear: date})}
                            showYearPicker
                            dateFormat="yyyy"
                            />
                    </div>
                    <div className='weekContainer'>
                        <label>End Week</label>
                            <Select
                                hideSelectedOptions
                                maxMenuHeight={200}
                                onChange={handleEndValueUpdate}
                                options={[...Array(52).keys()].map(key=>{
                                    return {
                                        id: key,
                                        label: `Week ${key+1}`,
                                        searchableLabel: `Week ${key+1}`,
                                        value: key+1
                                    }                                      
                                })}
                                isClearable={true}
                                placeholder="Select Week"
                                value={endvalue}
                                width="200px"
                            />
                    </div>
                  </div>

            </div>:null
        }
        {
            props.dateTimeFilters.dateRange === 'Month' ?
            <div>
                  <div className="yearAndMonthContainer">
                    <div >
                        <label>Start Month</label>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>

                    <div>
                    <label>End Month</label>
                    <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
                    </div>
                    
                  </div>
            </div>:null
        }
        {
            props.dateTimeFilters.dateRange === 'Year' ?
            <div>
                  <div className="yearAndMonthContainer">
                    <div >
                        <label>Start Year</label>
                        <DatePicker
                        selected={props.dateTimeFilters.startWeekYear}
                        onChange={(date: any) => props.setDateTimeFilter({...props.dateTimeFilters, startWeekYear: date})}
                        showYearPicker
                        dateFormat="yyyy"
                        />
                    </div>
                    <div>
                    <label>End Year</label>
                            <DatePicker
                            selected={props.dateTimeFilters.endWeekYear}
                            onChange={(date: any) => props.setDateTimeFilter({...props.dateTimeFilters, endWeekYear: date})}
                            showYearPicker
                            dateFormat="yyyy"
                            />
                    </div>
                  </div>
            </div>:null
        }

        <button className='applyBtn'>Apply</button>
    </div>
            
  )
}

export default DateFilter