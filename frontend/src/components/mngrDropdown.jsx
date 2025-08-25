import React, { useEffect, useState } from 'react'
import axios from "axios";

const MngrDropdown = ({value, onChange, placeholder}) => {
    const [managers, setManagers] = useState([]);

    useEffect(() => {    
        const fetchManagers = async () => {
          try {
            const res = await axios.get("http://localhost:3000/api/records/managers");
            setManagers(res.data.map(doc => doc.name));
            
          } catch (error) {
            console.error("Error fetching manager(s) data: ", error);
          }
        };
      
        fetchManagers();
      }, []);

    return (
        <div className='flex items-center gap-3'>
            <input type="text" placeholder={placeholder} className="input w-70 min-w-0" value={value} disabled />
            <div className="dropdown dropdown-left dropdown-end">
            <label tabIndex={0} className="btn m-0 whitespace-nowrap px-4">Select</label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32">
                {managers.map((mngr, idx) => (
                    <li key={idx}>
                    <a onClick={() => {onChange(mngr); document.activeElement.blur();}}>{mngr}</a>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}

export default MngrDropdown
