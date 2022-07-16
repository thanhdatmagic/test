import React from 'react'

export default function () {
  return (
    <div className='justify-end mt-[20px] mr-[200px]'>
            <label for="cars" className='text-slate-300 mr-[20px] font-semibold'>FILTER:</label>

                    <select name="transit"  className="h-[35px] w-[140px] rounded-full mr-[10px]">
                    <option value="transit">Transit</option>
                    </select>
                    <select name="transit"  className="h-[35px] w-[140px] rounded-full mr-[10px]">
                    <option value="transit">Time</option>
                    </select>
                    <select name="transit"  className="h-[35px] w-[140px] rounded-full mr-[10px]">
                    <option value="transit">Airline</option>
                    </select>
                    <select name="transit"  className="h-[35px] w-[140px] rounded-full mr-[10px] ">
                    <option value="transit">Low Price</option>
                    </select>
    </div>
  )
}
