import React from 'react'

function Right({details}) {
  return (
    <div className='bg-slate-600 p-2 text-slate-200 flex flex-col justify-start items-center text-transform scale-100 hover:scale-105 transition-transform duration-300 ease-in-out'>
        <h1 className='text-sm mt-2'>{details.title}</h1>
        <div className='mt-2 '>
            <span className='text-4xl font-bold'>{details.value}</span>
            <span className='text-2xl '>{details.unit}</span>
        </div>
        {
            details.direction?( <div className='mt-2 flex mb-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-slate-200">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
    </svg>
    <div className='ms-1 text-slate-200'>{details.direction}</div>
            </div>):null
        
        }

{
    details.title=="Humidity"?(
<div className="w-full mt-4 bg-slate-800 rounded-full h-1.5 mb-4 dark:bg-gray-700">
  <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500" style={{width: `${details.value}%`}}></div>
</div>
    ):null
    }
    </div>
  )
}

export default Right