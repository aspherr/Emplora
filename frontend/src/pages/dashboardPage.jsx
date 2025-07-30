import React, { useEffect, useState } from 'react'
import axios from "axios";

import Navbar from '../components/navbar'
import RecordCard from '../components/recordCard';

const DashboardPage = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/records");
        setRecords(res.data);
  
      } catch (error) {
        console.error("Error fetching records: ", error);
      }
    };

    fetchRecords();
  }, []);

  return (
    <div>
        <Navbar />

        <div className="min-h-[calc(100vh-64px)] bg-base-200 px-10 py-10">
          <div className='mb-10 ml-28'>
            <span className='font-bold text-4xl'>
              Hey User
            </span>
          </div>

          <div className="flex gap-5 ml-28">
            
            {/* Records list */}
            <div className="max-w-3xl w-full text-left h-[500px] overflow-y-auto space-y-4">
              {records.length > 0 ? (
                records.map((record) => (
                  <RecordCard key={record._id} record={record} />
                ))
              ) : (
                <p className="text-gray-500">No records found.</p>
              )}
            </div>

            {/* Search bar */}
            <div className="w-1/3">
              <label className="input w-full ml-10">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input type="search" className="grow" placeholder="Search" />
              </label>
            </div>
          </div>
        </div>

    </div>
  )
}

export default DashboardPage
