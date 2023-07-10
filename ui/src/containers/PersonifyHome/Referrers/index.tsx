import React, { useState } from 'react'
import './styles.scss';
import { InfiniteScrollTable } from '@contentstack/venus-components';

const Tabledata =[ 
  {
    source:'220429_gbp_cy_u20_cat',
    users:5,
    revenue:'361,108',
    traffic: "3.92%",
    conversion: "0.65%",
    uid: 0
  },
  {
    source:'Partnerize',
    users:2,
    revenue:'61,523',
    traffic: "3.92%",
    conversion: "0.29%",
    uid: 1
  },
  {
    source:'Prospecting%2520-%2520Brand%252213456643%13245465764365453',
    users:3,
    revenue:'31,202',
    traffic: "3.92%",
    conversion: "0.32%",
    uid: 2
  },
  {
    source:'Smart%2520Shopping%2520-%25and%252213456643%132454657',
    users:1,
    revenue:'121,531',
    traffic: "3.92%",
    conversion: "0.52%",
    uid: 3
  },
  {
    source:'UK%2B-%2BProspecting%%2520Brand%252213456643%13245465764365453',
    users:4,
    revenue:'118,368',
    traffic: "1.23%",
    conversion: "0.45%",
    uid: 4
  },
  {
    source:'UK%2B-%2BProspecting%2B0Brand%252213456643%13245465764365453',
    users:2,
    revenue:'218,305',
    traffic: "0.83%",
    conversion: "0.93%",
    uid: 5
  },
  {
    source:'UK%2B-%2BRe-engage%2B-%Prospecting%2520-%2520Brand%252213456643%13245465764365453',
    users:5,
    revenue:'218,334',
    traffic: "0.23%",
    conversion: "0.73%",
    uid: 6
  }
]
interface MissionTableRow {
  source: String
  users:Number
  revenue: String
  traffic: String
  conversion: String
}

const Referrers = () => {
  const [loading, setLoading] = useState(false)
  const [tableData, setTableData] = useState<MissionTableRow[]>([])
  let [itemStatusMap, setItemStatusMap] = useState({})
    const columns = [
      {
        Header: 'Source',
        id: 'source',
        accessor: 'source',
        default: false,
        // addToColumnSelector: true,
        disableSortBy: true,
      },
      {
        Header: 'Users',
        accessor: 'users',
        default: false,
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
    console.log({updateditemStatusMapCopy,Tabledata})
    setItemStatusMap({ ...updateditemStatusMapCopy })
    setLoading(false)
    setTableData(Tabledata)
  }
  return (
    <div className="referrersContainer">
      <h2>Referrers</h2>
      <InfiniteScrollTable 
        data={tableData}
        columns={columns}
        loading={loading}
        fetchTableData={fetchData}
        uniqueKey={'uid'}
        totalCounts={7}
        itemStatusMap={itemStatusMap}
        // initialSortBy={[{ id: 'mission', desc: true }]}
        canSearch={true}
        onRowClick={(args: any)=>{console.log(args)}}
        />
    </div>
  )
}

export default Referrers