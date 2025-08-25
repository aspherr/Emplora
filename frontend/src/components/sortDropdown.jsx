import React from 'react'

const SortDropdown = ({value, onChange}) => {
    const options = [
       "A-Z",
       "Z-A",
       "Newest",
       "Oldest"
    ];

    return (
        <div className="flex items-center gap-3">
          <div className="dropdown dropdown-bottom dropdown-end ml-8">
            <div className="relative">
              <input type="text" placeholder="Sort By" className="input disabled:bg-white disabled:text-black w-40 min-w-0 pr-10" value={value} disabled />

              <button type="button" tabIndex={0} aria-haspopup="listbox" aria-expanded={false} className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center" style={{ width: 24, height: 24 }}>
                <svg className="w-5 h-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path
                    d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <ul tabIndex={0} role="listbox" className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40">
              {options.map((opt) => (
                <li key={opt}>
                  <button type="button" onClick={() => onChange(opt)}>
                    {opt}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    };
    

export default SortDropdown;
