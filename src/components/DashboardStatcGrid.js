import React from 'react'
import {IoBagHandle} from 'react-icons/io5'
import { DashboardStatcGridData } from '../lib/consts/DashboardStatcGridData'
const DashboardStatcGrid = () => {
  return (
    <div className='flex gap-4'>
        {
            DashboardStatcGridData.map((item)=>{
                return (
                        <BoxWrapper key={item.id}>
                            <div className={`h-10 w-10 flex items-center justify-center ${item.color} rounded-full`}>
                                <IoBagHandle className='text-2xl text-white' />
                            </div>
                            <div>
                                <h2 className='text-lg font-bold'>{item.title}</h2>
                                <div className='flex items-center gap-2'>
                                    <strong className='text-gray-500 font-semibold'>${item.value}</strong>
                                    <p className='text-sm text-sky-500'>{item.percentage}%</p>
                                </div>
                            </div>
                        </BoxWrapper>
                )
            })
        }      
    </div>
  )
}

export default DashboardStatcGrid

function BoxWrapper({children}){
    return (
        <div className='bg-white p-3 rounded-md border-gray-300 flex-1 shadow-md flex items-center gap-4 hover:scale-105 transition-all ease-in-out duration-300 transform cursor-pointer'>
            {children}
        </div>
    )
}