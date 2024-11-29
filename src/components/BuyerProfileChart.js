import React from 'react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts';
import Ttitle from './shared/Ttitle';

const data = [
    {
        name:'Male',value: 540
    },
    {
        name:'Female',value: 460
    },
    {
        name:'Other',value: 100
    }
]

const RADIAN = Math.PI / 180
const COLORS = ['#00C49F','#FFBB28','#FF8042']

const renderCustomizedLabel =({cx, cy ,midAngle, innerRadius, outerRadius, percent })=>{
    const radius = innerRadius +(outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return(
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline={'central'} fontSize={16}>
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    )
}
const BuyerProfileChart = () => {
  return (
    <div className='w-[28rem] h-[22rem] bg-white p-4 rounded-md border border-gray-200 flex flex-col shadow-md'>
            <Ttitle>Buyers Charts</Ttitle>
        <div className='w-full mt-4 flex-1 text-xs'>
        <ResponsiveContainer width='100%' height='100%'>
            <PieChart width={730} height={250}>
                <Pie data={data} 
                    dataKey="value"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    cx="50%" 
                    cy="45%" 
                    outerRadius={105}
                    fill="#8884d8" >
                    {data.map((_,index)=>(
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Legend />
            </PieChart>
        </ResponsiveContainer>
        </div>
    </div>
  )
}

export default BuyerProfileChart