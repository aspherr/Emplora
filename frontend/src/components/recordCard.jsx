import React from 'react'

const RecordCard = ({record}) => {
  return (
    <div key={record.id} className="bg-white border rounded shadow p-4">
        <p><strong>Name:</strong> {record.name}</p>
        <p><strong>Email:</strong> {record.email}</p>
    </div>
  )
}

export default RecordCard
