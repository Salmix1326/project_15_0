import { useEffect, useState } from "react";

function SortByNameField({ onChangeValue }) {
  const [inputData, setInputData] = useState("");

  useEffect(() => {
    if (onChangeValue) {
      onChangeValue(inputData);
    }
  }, [inputData, onChangeValue]);

  return (
    <div>
      <label>
         Sort By Name
        <input
          onChange={(e) => setInputData(e.target.value)}
          type="text"
          value={inputData}
        />
      </label>
    </div>
  );
}

export default SortByNameField;
