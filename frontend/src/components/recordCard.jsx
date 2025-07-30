import React from 'react'

const RecordCard = ({record}) => {
  return (
    <div key={record.id} className="bg-white border rounded shadow p-4 h-32 relative">
      <div className='space-y-1'>
        <h1 className='font-bold text-2xl'>{record.name}</h1>
        <h3 className='text-sm opacity-50'>• {record.title}</h3>
      </div>

      <div className='flex flex-row items-center gap-4 text-xs font-mono'>
        <div className='flex bg-base-200 rounded item-center justify-center p-2 mt-2'>
          <span className={` ${ record.status === 'active'
          ? 'text-green-600'
          : record.status === 'on leave'
          ? 'text-yellow-500'
          : record.status === 'terminated'
          ? 'text-red-600'
          : 'text-gray-500'
          }`}>
            {record.status}
          </span>
        </div>

        <div className='flex bg-base-200 rounded item-center justify-center p-2 w mt-2'>
          {record.email}
        </div>
      </div>
      
      <div className="absolute top-3 right-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 opacity-50 hover:opacity-100 cursor-pointer transition"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"/>
        </svg>
      </div>
    </div>
  )
}

export default RecordCard
