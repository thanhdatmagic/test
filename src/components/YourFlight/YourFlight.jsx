import React from 'react'

export default function (flight) {
    const totalPay=flight.props.props.PriceAdult - flight.props.props.TaxAdult
  return (
    <div className='bg-white grid grid-cols-1 divide-y rounded-lg w-[280px] mt-[20px]'>
        <div className="label h-[40px]">
            <p className='text-md font-bold text-left mt-[15px] ml-[20px]'>YOUR FLIGHT</p>
        </div>
        <div className="info text-center">
        <p>{flight.props.props.StartDate}</p>
                <p className='font-bold mt-[10px] ml-[-70px]'>{flight.props.props.StartPoint}-{flight.props.props.EndPoint}</p>

                    <img src="https://pbs.twimg.com/profile_images/981789250109632512/MV_jHh4c_400x400.jpg" className='mt-[20px] mr-[30px] border h-[30px] w-[35px] inline' alt="" />
                    
                    <p className='font-bold text-md inline mr-[60px]'>BAMBOO AIRWAYS </p> 
                    <p className='font-medium text-sm underline text-blue-600 cursor-pointer mt-[-10px] mr-[90px]'>Details</p>
            <button className='mt-[10px] w-[250px] font-bold cursor-pointer h-[42px] bg-blue-200 rounded-lg text-center text-[14px] text-blue-600'>Change depature flight</button>
        </div>
        <div className="time text-center">
                <p>{flight.props.props.EndDate}</p>
                <p className='font-bold ml-[-70px]'>{flight.props.props.EndPoint}-{flight.props.props.StartPoint}</p>
        </div>  
        <div className="total bg-slate-200 ">
            <p className="font-thin mt-[20px]">Subtotal</p>
            <p className="font-semibold text-orange-600"> {totalPay.toString()} vnd</p>
        </div>

    </div>
  )
}
