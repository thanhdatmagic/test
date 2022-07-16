import React from 'react'
import InfoFlight from '../../components/InfoFlight/InfoFlight'
import Filter from '../../components/Filter/Filter.jsx'
import RelatedFlights from '../../components/RelatedFlights/RelatedFlights.jsx'
import YourFlight from '../../components/YourFlight/YourFlight.jsx'
import {useState} from 'react'
export default function ListFlight(flight) {
      
  return (
    <div>
            <InfoFlight props={flight} />
            <div className="flex justify-end">
              <div className="left grid grid-rows-2 w-5/65">
                <Filter />
                <RelatedFlights props={flight}/>
              </div>
              <div className="right w-1/5">
                  <YourFlight props={flight}/>
              </div>

            </div>
    </div>
  )
}
