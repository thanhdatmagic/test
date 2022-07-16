import React from 'react'
import {TbArrowsLeftRight} from 'react-icons/tb'
import {AiOutlineSearch} from 'react-icons/ai'

export default function (flight) {
    console.log(flight)
  return (
    <div className="bg-white w-full h-[100px] mt-[-50px] grid grid-cols-3">
        <div className="destinationinfo grid grid-cols-3 ml-[165px] mt-[20px]">
            <p className='text-blue-600 font-bold font-size text-xl'>{flight.props.props.StartPoint}
                 <p className='text-slate-600 font-light font-size text-sm'>{flight.props.props.StartDate}</p>
            </p>
            <TbArrowsLeftRight className='mt-[20px] ml-[20px]'/>
            <p className='text-blue-600 font-bold font-size text-xl'>{flight.props.props.EndPoint}
                <p  className='text-slate-600 font-light font-size text-sm'>{flight.props.props.EndDate}</p>
            </p>
            
        </div>
        <div className="custominfo grid grid-cols-3 ml-[150px] mt-[20px] pr-[50px]">
            <p className='text-black font-bold font-size text-md'>Round Trip</p>
            <p className='text-black font-bold font-size text-md'><span className='text-blue-600 font-bold font-size text-md'>02</span>Adult,<span className='text-blue-600 font-bold font-size text-sm'>01</span>children</p>
            <p className='text-black font-bold font-size text-md ml-[70px]'>Business Class</p>
        </div>
        <button className='text-white  text-[16px] bg-orange-600 rounded-lg h-[45px] w-[160px] ml-[180px] mt-[20px]  '> Change Flights < AiOutlineSearch className='inline'/></button>

    </div>
  )
}
