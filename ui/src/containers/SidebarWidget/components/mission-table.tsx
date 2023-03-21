import React, { useState } from 'react';
import { InfiniteScrollTable } from '@contentstack/venus-components';
import { useNavigate } from "react-router-dom";
interface MissionTableRow {
  mission: String
  revenue: String
  traffic: String
  conversion: String
}

interface TableProps {
  args:{ 
    canSearch?:Boolean;
    fullRowSelect?:Boolean;
  }
  data: MissionTableRow[]
  totalCounts:Number
}
const MissionTable:React.FC<TableProps>  = ({ args, data, totalCounts}) => {
  const [loading, setLoading] = useState(false)
  const [tableData, setTableData] = useState<MissionTableRow[]>([])
  let [itemStatusMap, setItemStatusMap] = useState({})
    const columns = [
      {
        Header: 'Mission',
        id: 'mission',
        accessor: 'mission',
        default: false,
        // addToColumnSelector: true,
        disableSortBy: true,
      },
      {
        Header: 'Revenue',
        accessor: 'revenue',
        default: false,
        disableSortBy: true,
      },
      {
        Header: 'Traffic',
        accessor: 'traffic',
        default: false,
        disableSortBy: true,
      },
      {
        Header: 'Conv. Rate',
        accessor: 'conversion',
        default: false,
        disableSortBy: true,
      },
    ]
    let navigate = useNavigate(); 
  const fetchData = () => {
    let itemStatusMap:{[key: number]: string} = {}
    for (let index = 0; index <= 8; index++) {
      itemStatusMap[index] = 'loading'
    }
    setItemStatusMap(itemStatusMap)
    setLoading(true)
    let updateditemStatusMapCopy = { ...itemStatusMap }
    for (let index = 0; index <= 8; index++) {
      updateditemStatusMapCopy[index] = 'loaded'
    }
    console.log({updateditemStatusMapCopy,data})
    setItemStatusMap({ ...updateditemStatusMapCopy })
    setLoading(false)
    setTableData(data)
  }
  const onRowClick = (args: any)=>{
    console.log(args)
    navigate(`/mission/${args.mission}`);
  }
    return (
      <InfiniteScrollTable 
        data={tableData}
        columns={columns}
        loading={loading}
        fetchTableData={fetchData}
        uniqueKey={'uid'}
        totalCounts={totalCounts}
        itemStatusMap={itemStatusMap}
        // initialSortBy={[{ id: 'mission', desc: true }]}
        canSearch={args.canSearch}
        onRowClick={onRowClick}
        />
    )
  }
              
export default MissionTable;