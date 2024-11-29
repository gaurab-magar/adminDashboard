import React from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import Ttitle from './shared/Ttitle';

const data = [
  {
    name: 'Jan',
    Expense: 1920,
    Income: 5000,
  },
  {
    name: 'Feb',
    Expense: 2500,
    Income: 6500,
  },
  {
    name: 'Mar',
    Expense: 3100,
    Income: 7000,
  },
  {
    name: 'Apr',
    Expense: 2200,
    Income: 5800,
  },
  {
    name: 'May',
    Expense: 1800,
    Income: 4900,
  },
  {
    name: 'Jun',
    Expense: 3000,
    Income: 7200,
  },
  {
    name: 'Jul',
    Expense: 2750,
    Income: 6200,
  },
  {
    name: 'Aug',
    Expense: 2000,
    Income: 5600,
  },
  {
    name: 'Sep',
    Expense: 3300,
    Income: 7500,
  },
  {
    name: 'Oct',
    Expense: 2900,
    Income: 6800,
  },
  {
    name: 'Nov',
    Expense: 2500,
    Income: 6100,
  },
  {
    name: 'Dec',
    Expense: 2800,
    Income: 6400,
  },
];


const TransactionCharts = () => {
  return (
    <div className='h-[22rem] bg-white p-4 rounded-md border border-gray-200 flex flex-col flex-1 shadow-md'>
      <Ttitle>Transaction Charts</Ttitle>
      <div className='w-full mt-4 flex-1 text-xs'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20, right: 10, left: -10, bottom: 0
              }}>
                <CartesianGrid strokeDasharray='3 3 0 0' vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />      
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Income" fill="#00C49F" />
                  <Bar dataKey="Expense" fill="#FF8042" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default TransactionCharts