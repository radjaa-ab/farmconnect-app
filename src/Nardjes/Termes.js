import React, { useState } from 'react';

const TermsAndConditions = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <h2>Terms and Conditions</h2>
      <p>Here are the terms and conditions...</p>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        I accept the terms and conditions
      </label>

      
      {isChecked && <button>Proceed</button>}
    </div>
  );
};

export default TermsAndConditions;
