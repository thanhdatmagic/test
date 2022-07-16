import React from 'react'
import {BsTelephone} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {ImFacebook} from 'react-icons/im'
import {AiOutlineInstagram} from 'react-icons/ai'

export default function 
() {
  return (
    <div className='footer mt-[120px] grid grid-cols-3 '>
                <div className="callus ml-[160px]">
                        <BsTelephone className='bg-blue-600 inline rounded-full text-white h-[22px] w-[25px] mr-[10px]'/>
                        <p className='inline'>Call us: +84 908 02 02 58</p>
                </div>
                <div className="email">
                <AiOutlineMail className='bg-blue-600 inline rounded-full text-white h-[22px] w-[25px] mr-[10px]'/>
                    <p className='inline'>Email: chucinog@gmail.com</p>
                </div>
                <div className="followus inline ml-[190px]">
                    Follow us ---
                    <ImFacebook className='bg-blue-600 inline rounded-full text-white h-[22px] w-[25px] mr-[10px]'/>
                    <AiOutlineInstagram className='bg-blue-600 inline rounded-full text-white h-[22px] w-[25px] mr-[10px]'/>

                </div>
    </div>
  )
}
