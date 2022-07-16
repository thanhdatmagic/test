import React from 'react'
import {BsCalendar3} from 'react-icons/bs'
import {VscArrowRight} from 'react-icons/vsc'
import {TiArrowSortedDown} from 'react-icons/ti'
import {TbArrowsLeftRight} from 'react-icons/tb'
import {Link} from  'react-router-dom'

export default function Searchticket(flight) {
    console.log(flight);
  return (
    <div className='searchticket grid grid-rows-2 w-4/5 h-[250px] left-[130px] bottom-[50px]  bg-white  absolute rounded-lg  z-40 shadow-slate-600' >
            <div className="option-flight mt-[40px] ml-[40px]  w-3/5 ">
            <input type="radio" className=" h-[20px] w-[30px] rounded-full" />
            <p className='justify-self-start font-bold inline ml-[10px] mt-[5px]'>One way/Round-trip</p>
            <input type="radio" className="red-500 h-[20px] inline w-[30px] rounded-full" />
            <p className='font-bold inline ml-[10px]'>Multi-city</p>
            <p className='font-bold inline ml-[60px]'>
                <span className='font-bold text-[#4d46fa]'>02</span> Adult, <span className='font-bold text-[#4d46fa]'>01</span> children
            </p>
            <TiArrowSortedDown className='text-[#4d46fa] inline cursor-pointer'/>
            <p className='font-bold inline ml-[50px]'>Bussiness Class</p>
            <TiArrowSortedDown className='text-[#4d46fa] inline   cursor-pointer'/>
            
            </div>
            <div className="flight-destination grid grid-cols-2 mt-[-40px] ml-[40px]">
                        <div className="pickdestination grid grid-cols-2">
                            <div className="from border border-slate-300 mr-[20px] rounded-lg box-border h-32 w-100 p-4  ">
                                <p className='text-slate-300 text-xl'>FROM</p>
                                <p className='text-[#4d46fa] font-bold font-size text-2xl'>{flight.props.props.StartPoint}</p>
                                <p className='text-black font-bold text-xl'> Viet Nam</p>
                                <TbArrowsLeftRight className='absolute ml-[260px] mt-[-50px]' />
                            </div>
                            
                            <div className="to border border-slate-300  mr-[20px] rounded-lg  h-32 w-100 p-4 ">
                            <p className='text-slate-300 text-xl'>TO</p>
                                <p className='text-[#4d46fa] font-bold font-size text-2xl'>{flight.props.props.EndPoint}</p>
                                <p className='text-black font-bold text-xl'> Viet Nam</p>
                            </div>
                        </div>
                        <div className="picktime grid grid-cols-2 border border-slate-300 rounded-lg mr-[20px] h-32 p-2">
                        <div className="departure">
                                <p className='text-slate-300 text-xl'>DEPARTURE</p>
                                <p className='text-[#4d46fa] font-bold font-size text-2xl'>{flight.props.props.StartDate} <BsCalendar3 className='inline cursor-pointer'/></p>
                                <p className=' text-xl'> <span className='text-black underline font-bold '>Prev</span> <span className='text-slate-300'>Next</span></p>
                            </div>
                            <div className="return">
                            <p className='text-slate-300 text-xl'>RETURN</p>
                                <p className='text-[#4d46fa] font-bold font-size text-2xl'>{flight.props.props.EndDate} <BsCalendar3 className='inline cursor-pointer'/></p>
                                <p className=' text-xl'> <span className='text-black underline font-bold '>Prev</span> <span className='text-slate-300'>Next</span></p>
                            </div>

                        </div>
                        <Link to='/listflights'className='text-white  text-[18px] bg-blue-600 rounded-lg h-[60px] w-[270px] left-[900px] text-center bottom-[-30px] absolute text-center' onClick={() =>window.reload()} >Search Flights <VscArrowRight className='inline'/> </Link>
            </div>
    </div>
  )
}
