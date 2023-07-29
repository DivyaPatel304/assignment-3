import React, { useState } from 'react';
import Sidebar from '../component/Sidebar';

const UnitConverter = () => {
  // State hooks to manage input value, selected unit, and converted value
  const [inputValue, setInputValue] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('cm');
  const [convertedValue, setConvertedValue] = useState(null);

  // Function to handle input value change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    // Call the convertValue function with the new input value and selected unit
    convertValue(event.target.value, selectedUnit);
  };

  // Function to handle selected unit change
  const handleSelectChange = (event) => {
    setSelectedUnit(event.target.value);
    // Call the convertValue function with the current input value and new selected unit
    convertValue(inputValue, event.target.value);
  };

  // Function to convert the input value based on the selected unit
  const convertValue = (value, unit) => {
    let converted;
    if (unit === 'inch') {
      converted = parseFloat(value) * 2.54;
    } else if (unit === 'cm') {
      converted = parseFloat(value) / 2.54;
    } else if (unit === 'foot') {
      converted = parseFloat(value) * 0.0328084;
    } else if (unit === 'meter') {
      converted = parseFloat(value) / 39.3701;
    }
    // Set the converted value with 2 decimal places
    setConvertedValue(converted.toFixed(2)); 
  };

  return (
    <>
      {/* Sidebar component */}
      <div className='sidebar'>
        <Sidebar />
      </div>

      {/* Main content container */}
      <div className='main-container min-vh-100 d-flex justify-content-center align-items-center'>
        <div className="converter-container  p-3 bg-light shadow rounded">
          <h2 className="mb-4 text-center">Unit Converter</h2>
          <div className="form-group row mb-3">
            <div className="col-md-8">
              {/* Input field for user to enter the value */}
              <input
                type="number"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter value"
                className="form-control"
              />
            </div>
            <div className="col-md-4">
              {/* Select dropdown for user to choose the unit */}
              <select
                value={selectedUnit}
                onChange={handleSelectChange}
                className="form-control"
              >
                <option value="cm">cm</option>
                <option value="inch">inch</option>
                <option value="foot">foot</option>
                <option value="meter">meter</option>
              </select>
            </div>
          </div>
          {/* Display the converted value if it exists */}
          {convertedValue && (
            <div className="result bg-white p-3 rounded text-center">
              <h4 className="mb-0">Result:</h4>
              <p className="mb-0 display-4">{convertedValue}</p>
              <p className="mb-0">{selectedUnit}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UnitConverter;
