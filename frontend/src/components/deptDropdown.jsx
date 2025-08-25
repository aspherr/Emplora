import React from 'react'

const DeptDropdown = ({value, onChange, placeholder}) => {
    const departments = [
      "Human Resources",
      "Finance",
      "Marketing",
      "Sales",
      "Information Technology",
      "Operations",
      "Customer Support",
      "Legal",
      "Engineering",
      "Product Management",
    ];

    return (
        <div className='flex items-center gap-3'>
            <input type="text" placeholder={placeholder} className="input w-70 min-w-0" value={value} disabled />
            <div className="dropdown dropdown-left dropdown-end">
            <label tabIndex={0} className="btn m-0 whitespace-nowrap px-4">Select</label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32">
                {departments.map((dept, idx) => (
                    <li key={idx}>
                    <a onClick={() => {onChange(dept); document.activeElement.blur();}}>{dept}</a>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}

export default DeptDropdown
