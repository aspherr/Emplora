import { useState, useEffect } from 'react';

const GenderSelector = ({value}) => {
  const [gender, setGender] = useState(value);

  useEffect(() => {
    setGender(value);
  }, [value]);

  return (
    <div className="form-control w-full max-w-sm">
      <div className="btn-group grid grid-cols-3 w-full gap-3">
        {['Male', 'Female', 'Other'].map((opt) => (
          <label
            key={opt}
            className={`btn btn-soft btn-accent ${gender === opt ? 'btn-active' : ''}`}
          >
            <input
              type="radio"
              name="gender"
              value={opt}
              className="hidden"
              checked={gender === opt}
              onChange={() => setGender(opt)}
            />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
}


export default GenderSelector;