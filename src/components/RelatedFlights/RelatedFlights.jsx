import React from 'react'
import {BsBagPlus} from 'react-icons/bs'
import {GiMeal} from 'react-icons/gi'
import { useState } from 'react';
import {AiOutlineMinus} from 'react-icons/ai'
export default function (flight) {
    console.log(flight);
   const [isChoosed,setIsChoosed]=useState(false)
   const [isChoosed2,setIsChoosed2]=useState(true)
   const totalPay=flight.props.props.PriceAdult - flight.props.props.TaxAdult
   const Seat =flight.props.props.SearRemain

  


   function ChooseHandle(){
    setIsChoosed(!isChoosed)
   } 
   function ChooseHandle2(){
    setIsChoosed2(!isChoosed)
   } 
  
  return (
    <div className='RelatedFlight mt-[-35px] rounded-lg bg-white justify-self-start w-[1000px]  ml-[-170px] h-auto grid grid-rows-2' >
        <div className="generalflight grid grid-cols-5 w-full ">
                <div className="branchname mt-[40px] ml-[20px]">
                    <img src="https://pbs.twimg.com/profile_images/981789250109632512/MV_jHh4c_400x400.jpg" className='h-[25px] w-[25px] inline' alt="" />
                    <p className='font-bold text-md inline '>BAMBOO AIRWAYS</p>
                </div>
                <div className="timeflight ">
                   
                </div>
                <div className="serviceflight mt-[25px]">
                    
                        <p className='font-thin '><BsBagPlus className='inline'/>Baggage<span className="text-blue-600 font-bold ">{flight.props.props.Freebag}</span></p>
                        
                    <GiMeal className='inline'/>
                     <p className='font-thin inline  '>In-Flight <span className="text-blue-600 font-bold">{flight.props.props.Freebag}</span></p>
                </div>
                <div className="feeprice mt-[25px]">
                    <p className='font-bold text-slate-300 line-through'>199000 VND</p>
                    <p className='font-bold text-orange-600 '>{totalPay.toString()} VND</p>
                </div>

                <div className={isChoosed?"button font-bold text-orange-600 bg-orange-100 w-[90px] h-[30px] rounded-lg text-center mt-[25px] cursor-pointer ":"button font-bold text-orange-100 bg-orange-600 w-[90px] h-[30px] rounded-lg text-center mt-[25px] cursor-pointer "} onClick={ChooseHandle}>
                        Choose
                </div>
        </div>
        <div className="labledetailflight  mt-[20px]  ">
                <div className={isChoosed?"inline text-blue-600 font-semibold mr-[30px] cursor-pointer ":"text-blue-600 font-semibold mr-[30px] cursor-pointer inline"} onClick={() =>setIsChoosed2(true)}>FlIGHT DETAIL</div>
                <div className='inline text-blue-600 font-semibold mr-[30px] cursor-pointer' onClick={() =>setIsChoosed2(false)}>FARE INFO</div>
                ---------------------------------------------------------------------------------------------------
                {isChoosed ? 
         <div className="detailflight">
            {isChoosed2?
            <div className="infodetailflight grid grid-cols-2 mt-[10px]  ">
                   <div className="left grid grid-cols-3">
                        <div className="time">
                            <p className='font-bold text-[14px] mb-[30px]'>{flight.props.props.StartDate}</p>
                            <p className='font-thin  text-[14px] '>2h0m</p>
                            <p className='font-bold text-[14px] mt-[30px]'>{flight.props.props.EndDate}</p>
                        </div >
                        <div className="line">

                        </div>
                        <div className="destinationair">
                        <p className='font-bold text-[16px] mb-[50px] '>{flight.props.props.StartPoint}<p className='font-thin text-[13px]'>HaiPhong Airport</p></p>
                            
                        <p className='font-bold text-[16px] '>{flight.props.props.EndPoint}<p className='font-thin text-[13px]'>TanSonNhat Airport</p></p>
                        </div>
                           
                            
                   </div>
                   <div className="right">
                   <img src="https://pbs.twimg.com/profile_images/981789250109632512/MV_jHh4c_400x400.jpg" className='h-[50px] w-[25px] inline' alt="" />
                    <p className='font-bold text-md inline '>BAMBOO AIRWAYS </p> 
                    <p className='font-thin text-black inline'>{flight.props.props.FlightNumber}-{flight.props.props.GroupClass}</p>

                    <div className="detailright grid grid-cols-2 bg-slate-100 rounded-lg pl-[20px] w-[400px]">
                        <div className="threel">
                            <p className='font-thin'>Baggage <span className='font-bold text-blue-600'>{flight.props.props.Freebag}</span></p>
                            <p className='font-thin'>In-flight <span className='font-bold text-blue-600'>Meal</span></p>
                            <p className='font-thin'>In-flight <span className='font-bold text-blue-600'>Entertainment</span></p>
                        </div>
                        <div className="threer">
                            <p className='font-thin'>Aircraft <span className='font-bold text-blue-600'>{flight.props.props.FlightNumber}</span></p>
                            <p className='font-thin'>Seat layout <span className='font-bold text-blue-600'>3-3</span></p>
                            <p className='font-thin'>Seat pitch <span className='font-bold text-blue-600'>78</span></p>
                        </div>
                    </div>
                   </div>
            </div>
            :<div className="fareinfo grid grid-cols-2">
                <div className="condition ml-[30px]">
                    <p className='font-bold text-md mb-[20px] '>CONDITIONS </p> 
                    <img src="https://pbs.twimg.com/profile_images/981789250109632512/MV_jHh4c_400x400.jpg" className=' border h-[30px] w-[35px] inline' alt="" />
                    <p className='font-bold text-md inline '>BAMBOO AIRWAYS </p> 
                    <p className='font-thin text-black inline'>{flight.props.props.FlightNumber}-{flight.props.props.GroupClass}</p>    
                    <p className='font-thin '>{flight.props.props.StartPoint}<AiOutlineMinus className='inline w-[100px]'/><p className='font-thin inline'>{flight.props.props.EndPoint}</p></p>
                    <p className='font-thin mt-[20px]'>{flight.props.props.NoRefund ? 'Non Refundable':'Refundable'}</p>
                    
                </div>
                <div className="fee">
                <p className='font-bold text-md mb-[20px]'>PRICE DETAILS</p> 
                <p className='font-thin'>Adult Basic Fare <span className='ml-[120px] font-bold'>{flight.props.props.PriceAdult. toString()} VND</span> </p>
                <p className='font-thin'>Tax <span className='ml-[210px] font-thin'>{flight.props.props.TaxAdult !=0 ? 'Included':'Not Included'}</span></p>
                <p className='font-thin'>Regular Total Price <span className='ml-[100px] font-thin'>{flight.props.props.PriceAdult.toString()} VND</span></p>
                <p className='font-thin text-orange-400'>Save <span className='ml-[200px] font-thin text-black'>-{flight.props.props.TaxAdult.toString()} VND</span></p>
                <p className='font-thin'>You pay <span className='ml-[170px] text-orange-400'>{totalPay.toString()} VND</span></p>
                </div>

            </div>}
            
            
        </div> 
        
    : <></>   
    }
              
        </div> 
        
       
    </div>
  )
}
