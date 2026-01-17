import React from "react";
import { Database } from "lucide-react";
import { useState , useEffect } from "react";

import toast from 'react-hot-toast';

const EntityOnboardin = () => {
  const [tab1, setTab1] = useState(true);
  const [adminStrings , setAdminStrings] = useState([]);
  const [string1 , setString1] = useState("");
  const [string2 , setString2] = useState("");
  
  useEffect(() => {
    console.log("string1" , string1);
    console.log("string2" , string2);
  } , [string1 , string2]);  
  const submitHandler = (event) => {
        
        event.preventDefault();
        
        if(!string1 || !string2){
            toast("please fill all the feilds");
        }     

        adminStrings.push(string1+string2);
        setString1("");
        setString2("");
        // if you want Luvish i can also make a db call and store it in data base 
  }
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-xl bg-gradient-to-br from-[#2E8B57] to-[#3CB371]">
          <Database className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Entity Data Onboarding
          </h1>
          <p className="text-gray-500">
            Add and manage your entity information
          </p>
        </div>
      </div>

      {/* Simple Entity Form */}
      <div className="flex gap-2">
        <div className="flex gap-2">
          {/* Tab 1 */}
          <button
            type="button"
            onClick={() => setTab1(true)}
            className={`px-3 py-1 text-xs font-medium rounded-md transition
      ${
        tab1
          ? "bg-[#2E8B57] text-white"
          : "border border-[#2E8B57] text-[#2E8B57] hover:bg-[#2E8B57] hover:text-white"
      }`}
          >
            Tab1
          </button>

          {/* Tab 2 */}
          <button
            type="button"
            onClick={() => setTab1(false)}
            className={`px-3 py-1 text-xs font-medium rounded-md transition

      ${
        !tab1
          ? "bg-[#2E8B57] text-white"
          : "border border-[#2E8B57] text-[#2E8B57] hover:bg-[#2E8B57] hover:text-white"
      }`}
          >
            Tab2
          </button>
        </div>
      </div>

      {tab1 ? (
        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">
            Add New Entity
          </h2>
          <p className="text-gray-500 mb-6">Enter basic entity details</p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit = {(e) => submitHandler(e)}>
            {/* Field 1 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Entity Name
              </label>
              <input
                type="text"
                value={string1}
                onChange = {(e) => setString1(e.target.value)}
                placeholder="Enter entity name"
                className="w-full h-11 rounded-lg border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-[#2E8B57]"
              />
            </div>

            {/* Field 2 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Entity Type
              </label>
              <input
                value ={string2}
                type="text"
                onChange = {(e) => setString2(e.target.value)}
                placeholder="Private / Public"
                className="w-full h-11 rounded-lg border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-[#2E8B57]"
              />
            </div>

            {/* Field 3 - full width */}
           

            {/* Submit */}
            <div className="md:col-span-2 flex justify-end">
              <button
                type="submit"
                className="px-6 py-2.5 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition"
              >
                Save Entity
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-lg p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-900 mb-2">
            Stored Values
          </h3>

          <div className="space-y-1">
            {adminStrings.map((item, index) => (
              <div
                key={index}
                className="text-sm text-gray-700 px-2 py-1 rounded bg-gray-50"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EntityOnboardin;
