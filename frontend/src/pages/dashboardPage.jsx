import React, { useEffect, useState } from 'react'
import axios from "axios";

import Navbar from '../components/navbar'
import RecordCard from '../components/recordCard';
import GenderSelector from '../components/genderSelector';
import MngrDropdown from '../components/mngrDropdown';
import DeptDropdown from '../components/deptDropdown';


const DashboardPage = () => {
  const [records, setRecords] = useState([]);
  const [selectedManager, setSelectedManager] = useState("");
  const [selectedDept, setSelectedDept] = useState("");

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


  const [recordToDelete, setRecordToDelete] = useState(null);
  const handleDeleteClick = (id) => {
    setRecordToDelete(id);
  };

  const confirmDelete = async () => {
    await deleteRecord(recordToDelete);
    setRecordToDelete(null);
  };
  

  const [successMsg, setSuccessMsg] = useState("");

  const deleteRecord = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/records/${id}`);
      setRecords(prev => prev.filter(r => r._id !== id));
      setSuccessMsg("Record has been deleted successfully!");
      setTimeout(() => setSuccessMsg(""), 3000);

    } catch (error) {
      console.error(`Error deleting record ID: ${id}`, error);
    }
  };

  const createRecord = async (form) => {
    form.preventDefault();

    const payload = {
      name: form.target.name.value.trim(),
      email: form.target.email.value.trim(),
      phone: form.target.phone.value.trim(),
      gender: form.target.gender.value,
      dob: form.target.dob.value,
      address: form.target.address.value.trim(),
      manager: selectedManager,
      status: "Active",
      role: form.target.role.value.trim(),
      department: selectedDept,
      isManager: form.target.isManager.checked
    };

    try {
      const res = await axios.post("http://localhost:3000/api/records", payload);
      const created = res.data?.record ?? res.data;
      setRecords(prev => [created, ...prev]);

      form.target.reset();
      setSelectedDept("");
      setSelectedManager("");

      setSuccessMsg("Record has been created successfully!");
      setTimeout(() => setSuccessMsg(""), 3000);
 
    } catch (error) {
      console.error("Error creating record: ", error);
    };
  };

  const handleStatusChange = (id, newStatus) => {
    setRecords(prev => prev.map(r => r._id === id ? { ...r, status: newStatus } : r));
  };


  return (
    <div>
        <Navbar />

        {recordToDelete && (
          <dialog id="confirmDeleteModal" className="modal modal-open">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Are you sure?</h3>
              <p className="py-4">This action cannot be undone.</p>
              <div className="modal-action">
                <button className="btn btn-error" onClick={confirmDelete}>
                  Confirm
                </button>
                
                <button className="btn" onClick={() => setRecordToDelete(null)}>
                  Cancel
                </button>
              </div>
            </div>
          </dialog>
        )}

        {successMsg && (
          <div className="toast toast-top toast-end">
            <div role="alert" className="alert alert-success alert-soft">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{successMsg}</span>
            </div>
          </div>
        )}

        <div className="min-h-[calc(100vh-64px)] bg-base-200 px-10 py-10">
          <div className="flex gap-5 ml-28">
            
            {/* Records list */}
            <div className="max-w-3xl w-full text-left h-[600px] overflow-y-auto space-y-4">
              {records.length > 0 ? (
                records.map((record) => (
                  <RecordCard key={record._id} record={record} onDelete={() => handleDeleteClick(record._id)} onStatusChange={handleStatusChange} />
                ))
              ) : (
                <p className="text-gray-500">No records found.</p>
              )}
            </div>

            <div className="w-1/3 space-y-5">
              <div className="w-full max-w-md p-8 bg-white rounded-xl border mb-20 ml-10">
                <form className="space-y-4" onSubmit={createRecord}>
                  <div>
                    <label className="input validator w-full">
                      <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </g>
                      </svg>
                    
                      <input name="name" type="text" required placeholder="Full Name" pattern="[A-Za-z\s]*" minlength="1" maxlength="256"/>
                    </label>
                  </div>

                  <div>
                    <label className="input validator w-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-[1em] opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                      <input name="role" type="text" required placeholder="Role" pattern="[A-Za-z\s]*" minlength="1" maxlength="256"/>
                    </label>
                  </div>

                  <div>
                    <label className="input validator w-full">
                      <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </g>
                      </svg>
                      <input name="email" type="email" placeholder="Email" required />
                    </label>
                  </div>

                  <div>
                    <label className="input validator w-full">
                      <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <g fill="none">
                          <path
                            d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z"
                            fill="currentColor"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z"
                            fill="currentColor"
                          ></path>
                        </g>
                      </svg>
                      <input
                        name="phone"
                        type="tel"
                        className="tabular-nums"
                        required
                        placeholder="Phone"
                        pattern="[0-9]*"
                        minlength="10"
                        maxlength="10"
                        title="Must be 10 digits"
                      />
                    </label>
                  </div>

                  <div>
                    <GenderSelector />
                  </div>

                  <div className="form-control validator w-full max-w-sm">
                    <label className="flex items-center gap-3 input input-bordered w-full">
                      <span className="text-gray-400">DOB</span>
                      <input
                        name="dob"
                        type="date" 
                        className="w-full" 
                        required 
                      />
                    </label>
                  </div>

                  <div>
                    <label className="input validator w-full">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-[1em] opacity-50">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                      </svg>

                      <input
                        name="address"
                        type="text"
                        placeholder="Address"
                        className="w-full"
                        required
                      />
                    </label>
                  </div>

                  <MngrDropdown value={selectedManager} onChange={setSelectedManager} />

                  <DeptDropdown value={selectedDept} onChange={setSelectedDept} />
                
                  <div className='flex items-center justify-center gap-3'>
                    <label className="flex items-center gap-2 cursor-pointer mt-2">
                      <input name="isManager" type="checkbox" className="checkbox checkbox-sm checkbox-accent"/>
                      <span className="text-sm italic opacity-50">Set to managerial permissions</span>
                    </label>
                  </div>
              
                  <div className='w-full'>
                    <button type="submit" className="btn btn-accent w-full">
                      Create Employee
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default DashboardPage
