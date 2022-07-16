import React from 'react'
import Searchticket from '../../components/Search Ticket/Searchticket'


export default function Home(data) {
  const flight=data
  return (
    <div className="w-full h-650">
           <img className="bg-home-bg w-full h-full bg-cover " />
           <div className="slogan mr-[100px] mt-5">
              <p className='text-[60px] font-light absolute bottom-[320px] left-[140px]'>
                Hello! 
                <p>Where are</p>
                <p>you <span className="font-medium text-blue-700">flying</span> to...</p>
              </p>
              <Searchticket props={flight}/>
           </div>
           
    </div>
  )
}
