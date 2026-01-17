import React, { useState } from "react";

const Calculator = () => {
  const [value, setValue] = useState("");

  const handleClick = (val) => {
    setValue((prev) => prev + val);
  };

  // const calculate = () => {
  //   try {
  //     setValue(eval(value).toString());
  //   } catch {
  //     setValue("Error");
  //   }
  // }; // not using this 




  // making a custom cal 
  const operatorMap = {
    '+' : 'add' , 
    '-' : 'multiply' , 
    '*':  'divide' , 
    '/' : 'subtract' , 
  };



  function calculating(a, b, operator) {
  switch (operator) {
    case "add":
      return a + b;

    case "multiply":
      return a * b;

    case "divide":
      return b !== 0 ? a / b : "Error";

    case "subtract":
      return a - b;

    default:
      return a;
     }
   }

   
   function calculate(){
        let foundoperator = null;

        for(let op of Object.keys(operatorMap)){
           if(value.includes(op)){
            foundoperator = op;
            break;
           }
        }

        if(!foundoperator) return;

        const parts = value.split(foundoperator);
        if(parts.length != 2) return;

        const a = Number(parts[0]);
        const b = Number(parts[1]);
        
        if (isNaN(a) || isNaN(b)) {
        setValue("Error");
        return;
        }

        const mappedOperator = operatorMap[foundoperator];
        const result = calculating(a , b, mappedOperator);
        console.log(result);  
        setValue(String(result));
   } 
   const clear = () => setValue("");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-xl bg-gradient-to-br from-[#2E8B57] to-[#3CB371]" />
        <div>
          <h1 className="text-2xl font-bold text-gray-900">calc</h1>
          <p className="text-gray-500">Direct emissions from owned sources</p>
        </div>
      </div>

      {/* Calculator */}
      <div className="bg-white rounded-xl p-6 shadow-sm border max-w-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Simple Calculator
        </h2>

        {/* Display */}
        <input
          value={value}
          readOnly
          className="w-full h-12 mb-4 text-right px-4 border rounded-lg text-gray-900"
        />

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">
          {["7", "8", "9", "/",
            "4", "5", "6", "*",
            "1", "2", "3", "-",
            "0", ".", "=", "+"
          ].map((btn) => (
            <button
              key={btn}
              onClick={() =>
                btn === "=" ? calculate() : handleClick(btn)
              }
              className="h-10 rounded-md border text-sm font-medium
                         hover:bg-gray-100 transition"
            >
              {btn}
            </button>
          ))}

          <button
            onClick={clear}
            className="col-span-4 h-10 rounded-md bg-[#2E8B57] text-white text-sm font-medium hover:bg-[#3CB371] transition"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
