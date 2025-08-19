import React, { useState } from 'react'
import axios from "axios";

import Status from "./status";
import GenderSelector from './genderSelector';

const RecordCard = ({record, onDelete, onStatusChange}) => {
  const detailsId = `modal_${record._id}`;

  const statuses = [
    "Active",
    "On-Leave",
    "Terminated"
  ];

  const updateStatus = async (id, updatedStatus) => {
    try {
      await axios.put(`http://localhost:3000/api/records/${id}`, {status: updatedStatus});
      onStatusChange?.(id, updatedStatus);

    } catch (error) {
      console.error(`Error updating status for record ID: ${id}`, error);
    }
  };

  const [editing, setEditing] = useState(false);
  const handleEditing = () => {setEditing(false)};
  
  return (
    <div key={record.id} className="bg-white border rounded shadow p-4 h-34 relative">
      <div className='space-y-1'>
        <h1 className='font-bold text-2xl'>{record.name}</h1>
        <h3 className='text-sm opacity-50'>• {record.role}</h3>
      </div>

      <div className='flex flex-row items-center gap-4 text-xs font-mono mt-1'>
        <Status key={record._id} record={record} />

        <div className='flex bg-base-200 rounded item-center justify-center p-2 w mt-2'>
          {record.email}
        </div>
      </div>
      
      <div className="absolute top-3 right-3">
        <button className='btn p-2' onClick={()=>document.getElementById(`modal_${record._id}`).showModal()}>
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
        </button>
        
        <dialog id={`modal_${record._id}`} className="modal">
          <div className="modal-backdrop backdrop-blur-sm bg-black/30"></div>

          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => setEditing(false)}>✕</button>
            </form>

            {editing ? (
              <div className='mt-7 space-y-3 flex flex-col items-center'>
                <div>
                  <label className="input validator w-96">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </g>
                    </svg>
                  
                    <input name="name" type="text" required placeholder={record.name} pattern="[A-Za-z\s]*" minlength="1" maxlength="256"/>
                  </label>
                </div>

                <div>
                  <label className="input validator w-96">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-[1em] opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <input name="role" type="text" required placeholder={record.role} pattern="[A-Za-z\s]*" minlength="1" maxlength="256"/>
                  </label>
                </div>

                <div>
                    <label className="input validator w-96">
                      <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </g>
                      </svg>
                      <input name="email" type="email" placeholder={record.email} required />
                    </label>
                  </div>

                  <div>
                    <label className="input validator w-96">
                      <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <g fill="none">
                          <path d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z" fill="currentColor"></path>
                          <path fillRule="evenodd" clipRule="evenodd" d="M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z" fill="currentColor"></path>
                        </g>
                      </svg>
                      <input name="phone" type="tel" className="tabular-nums" required placeholder={record.phone} pattern="[0-9]*" minlength="10" maxlength="10" title="Must be 10 digits"
                      />
                    </label>
                  </div>

                  <div className='w-96'>
                    <GenderSelector />
                  </div>

                  <div className="form-control validator w-96">
                    <label className="input input-bordered flex items-center gap-3 w-full">
                      <span className="text-gray-400 shrink-0">DOB</span>
                      <input name="dob" type="date" className="grow min-w-0" placeholder={record.dob} required />
                    </label>
                  </div>

                  <div>
                    <label className="input validator w-96">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-[1em] opacity-50">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                      </svg>

                      <input name="address" type="text" placeholder={record.address} required/>
                    </label>
                  </div>
              </div>
            ) : (
              <>
                <div className='space-y-1'>
                  <div className='flex flex-row items-center gap-5 text-xs font-mono'>
                    <h1 className='font-bold text-3xl'>{record.name}</h1>
                    <Status key={record._id} record={record} />
                  </div>
                  <h3 className='font-sembold font-mono text-sm opacity-50'>{record.role} • {record._id}</h3>
                </div>

                <div className="h-px bg-gray-300 my-4" />

                <div className='space-y-3 mt-5 font-sm'>
                  <div className='flex flex-row items-center gap-2 bg-base-200 rounded py-2 px-3 w-fit font-mono'>
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </g>
                    </svg>
                    <span>{record.email}</span>
                  </div>

                  <div className='flex flex-row items-center gap-2 bg-base-200 rounded py-2 px-3 w-fit font-mono'>
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                      <g fill="none">
                      <path d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z" fill="currentColor"></path>
                      <path fillRule="evenodd" clipRule="evenodd" d="M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z" fill="currentColor"></path>
                      </g>
                    </svg>
                    <span>{record.phone}</span>
                  </div>

                  <div className='flex flex-row items-center gap-2 bg-base-200 rounded py-2 px-3 w-fit font-mono'>
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </g>
                    </svg>
                    <span>{record.gender}</span>
                  </div>

                  <div className='flex flex-row items-center gap-2 bg-base-200 rounded py-2 px-3 w-fit font-mono'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-[1em] opacity-50">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
                    </svg>
                    <span>{new Date(record.dob).toLocaleDateString()}</span>
                  </div>

                  <div className='flex flex-row items-center gap-2 bg-base-200 rounded py-2 px-3 w-fit font-mono'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-[1em] opacity-50">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <span>{record.address}</span>
                  </div>
                </div>

                <div className="h-px bg-gray-300 my-4" />

                <div className='space-y-3 mt-5 font-sm'>
                  <div className='flex flex-row items-center gap-2 bg-base-200 rounded py-2 px-3 w-fit font-mono'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.0" stroke="currentColor" className="h-[1em] opacity-50">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/>
                    </svg>
                    <span>{record.department}</span>
                  </div>

                  <div className='flex flex-row items-center gap-2 bg-base-200 rounded py-2 px-3 w-fit font-mono'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-[1em] opacity-50">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"/>
                    </svg>
                    <span>{record.manager}</span>
                  </div>
                </div>
              </>
            )}

            {editing ? (
              <>
              <div className='flex flex-row items-center gap-4 mt-10'>
                  <button type="button" className='btn flex-1' onClick={(e) => { e.preventDefault(); e.stopPropagation(); setEditing(false)}}>
                    Cancel Changes
                  </button>

                  <button type="button" className='btn btn-accent flex-1' onClick={(e) => {e.preventDefault(); e.stopPropagation(); setEditing(false);}}>
                    Confirm Changes
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className='flex flex-row items-center gap-4 mt-10'>
                  <div className="dropdown dropdown-top">
                    <div tabIndex={0} role="button" className="btn btn-accent m-0 whitespace-nowrap px-4">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-[1em] opacity-50"> <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"/> </svg>
                      Update Status
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32 text-sm font-semibold">
                      {statuses.map((status, idx) => (
                        <li key={idx}>
                          <a onClick={(e) => { e.preventDefault(); e.stopPropagation(); updateStatus(record._id, status); }}>
                            {status}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button type="button" className='btn btn-accent' onClick={() => setEditing(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-[1em] opacity-50">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"/>
                    </svg>
                    Edit Details
                  </button>

                  <button type="button" className='btn btn-error' onClick={() => {document.getElementById(detailsId)?.close(); onDelete();}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-[1em] opacity-50">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
                    </svg>
                    Delete Record
                  </button>
                </div>
              </>
            )}
          </div> 
        </dialog>
      </div>
    </div>
  )
}

export default RecordCard
