import React, { useState } from "react";
import useExample from "../../hooks/contextHooks/useExample";

const ContextComponent2 = () => {
  const { changeName, changeAge, setEnablePost } = useExample();
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
    const [enableToggle, setEnableToggle] = useState(false);
    
  const updateName = (updatedName) => {
    setName((prev) => updatedName);
  };

  const updateAge = (updatedAge) => {
    setAge((prev) => updatedAge);
    };
    
    const updateToggle = (updatedToggle) => {
        setEnableToggle((prev) => updatedToggle);
        setEnablePost(updatedToggle);
    }

  return (
    <div className="shadow-lg border p-4 w-[100%]">
      <h2 className="my-2">Context Component 2</h2>

      <div className="flex flex-col justify-stretch">
        <div>
          <input
            type="text"
            className="shadow-md p-2  border border-b-1"
            placeholder="change the name"
            onChange={(e) => updateName(e.target.value)}
          />
          <button
            className="btn bg-purple-200 p-2 rounded mx-2 w-[200px]"
            onClick={() => changeName(name)}
          >
            Change Name to {name}
          </button>
        </div>

        <div className="my-2">
          <input
            type="text"
            className="shadow-md p-2  border border-b-1"
            placeholder="change the age"
            onChange={(e) => updateAge(e.target.value)}
          />
          <button
            className="btn bg-teal-500 p-2 rounded mx-2 w-[200px]"
            onClick={() => changeAge(age)}
          >
                      Change Age to { age}
          </button>
              </div>
              

              <div className="my-2">
                 <label className="inline-flex items-center cursor-pointer">
      <input    
        type="checkbox" 
        className="sr-only peer" 
        checked={enableToggle}
        onChange={(e) => updateToggle(e.target.checked)}
      />
      <div className="relative w-11 h-6 bg-gray-200  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {enableToggle ? 'Disable' : 'Enable'}
      </span>
    </label>

        </div>
      </div>
    </div>
  );
};

export default ContextComponent2;
