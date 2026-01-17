import React, { useState, useEffect } from "react";
import { Database } from "lucide-react";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [tab1, setTab1] = useState(true);
  const [string1, setString1] = useState("");
  const [string2, setString2] = useState("");
  const [logs, setLogs] = useState([]);
  const [showString, setShowString] = useState(""); // will store current submission

  useEffect(() => {
    console.log("string1:", string1);
    console.log("string2:", string2);
  }, [string1, string2]);

  const submitHandler = (event) => {
    event.preventDefault();

    if (!string1 || !string2) {
      toast.error("Please fill all the fields");
      return;
    }

    const now = new Date().toLocaleString();
    setLogs((prev) => [...prev, `(${now})`]);

    // Set current submitted string for showing below fields
    setShowString(`${string1} - ${string2}`);

    toast.success("Entity added successfully");

    // Clear inputs
    setString1("");
    setString2("");
  };

  return (
    <div className="space-y-8">
      {/* Header */}
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

      {/* Tabs */}
      <div className="flex gap-2">
        <button
          onClick={() => setTab1(true)}
          className={`px-3 py-1 text-xs font-medium rounded-md transition ${
            tab1
              ? "bg-[#2E8B57] text-white"
              : "border border-[#2E8B57] text-[#2E8B57] hover:bg-[#2E8B57] hover:text-white"
          }`}
        >
          Tab1
        </button>

        <button
          onClick={() => setTab1(false)}
          className={`px-3 py-1 text-xs font-medium rounded-md transition ${
            !tab1
              ? "bg-[#2E8B57] text-white"
              : "border border-[#2E8B57] text-[#2E8B57] hover:bg-[#2E8B57] hover:text-white"
          }`}
        >
          Tab2
        </button>
      </div>

      {/* Tab Content */}
      {tab1 ? (
        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">
            Add New Entity
          </h2>
          <p className="text-gray-500 mb-6">Enter basic entity details</p>

          <form
            onSubmit={submitHandler}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Entity Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Entity Name
              </label>
              <input
                value={string1}
                onChange={(e) => setString1(e.target.value)}
                placeholder="Enter entity name"
                className="w-full h-11 rounded-lg border px-4 focus:ring-2 focus:ring-[#2E8B57]"
              />
            </div>

            {/* Entity Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Entity Type
              </label>
              <select
                value={string2}
                onChange={(e) => setString2(e.target.value)}
                className="w-full h-11 rounded-lg border px-4 focus:ring-2 focus:ring-[#2E8B57]"
              >
                <option value="" disabled>
                  Select entity type
                </option>
                <option value="Private">Private</option>
                <option value="Public">Public</option>
              </select>
            </div>

            {/* Show current submission below fields */}
            {showString && (
              <div className="md:col-span-2 bg-gray-50 border rounded-lg p-3 text-sm text-gray-700">
                <span className="font-medium">Current Submission:</span>{" "}
                {showString}
              </div>
            )}

            {/* Submit */}
            <div className="md:col-span-2 flex justify-end">
              <button
                type="submit"
                className="px-6 py-2.5 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="bg-white border rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-900 mb-2">
            Submitted on
          </h3>

          <div className="space-y-2">
            {logs.length === 0 ? (
              <p className="text-sm text-gray-500">No entries yet</p>
            ) : (
              logs.map((item, index) => (
                <div
                  key={index}
                  className="text-sm text-gray-700 px-2 py-1 rounded bg-gray-50"
                >
                  {item}
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
