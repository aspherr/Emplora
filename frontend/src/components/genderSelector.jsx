import { useState } from 'react';

const GenderSelector = () => {
  const [gender, setGender] = useState('Male');

  return (
    <div className="form-control w-full max-w-sm">
      <div className="btn-group grid grid-cols-3 w-full gap-3">
        <label className={`btn btn-soft btn-accent ${gender === 'Male' ? 'btn-active' : ''}`}>
          <input
            type="radio"
            name="gender"
            value="Male"
            className="hidden"
            checked={gender === 'Male'}
            onChange={() => setGender('Male')}
          />
          Male
        </label>

        <label className={`btn btn-soft btn-accent ${gender === 'Female' ? 'btn-active' : ''}`}>
          <input
            type="radio"
            name="gender"
            value="Female"
            className="hidden"
            checked={gender === 'Female'}
            onChange={() => setGender('Female')}
          />
          Female
        </label>

        <label className={`btn btn-soft btn-accent ${gender === 'Other' ? 'btn-active' : ''}`}>
          <input
            type="radio"
            name="gender"
            value="Other"
            className="hidden"
            checked={gender === 'Other'}
            onChange={() => setGender('Other')}
          />
          Other
        </label>
      </div>
    </div>
  );
}


export default GenderSelector;