import React from 'react'
import DashboardStatcGrid from './DashboardStatcGrid'
import TransactionCharts from './TransactionCharts'
import BuyerProfileChart from './BuyerProfileChart'
import RecentOrders from './RecentOrders'
import PopularProducts from './PopularProducts'

const Dashboard = () => {
  return (
   <div className='flex flex-col gap-4' >
      <DashboardStatcGrid />
      <div className='flex flex-row gap-4 w-full' >
        <TransactionCharts />
        <BuyerProfileChart />
      </div>
      <div className='flex flex-row gap-4 w-full' >
        <RecentOrders />
        <PopularProducts />
      </div>
   </div>
  )
}

export default Dashboard