import React from 'react'
import { FileText } from "lucide-react";

const Reports = () => {
  return (
   <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-xl bg-gradient-to-br from-[#2E8B57] to-[#3CB371]">
          <FileText className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
          <p className="text-gray-500">View and generate reports</p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Reports</h2>
        <p className="text-gray-500">Reports will appear here...</p>
      </div>
    </div>
  )
}

export default Reports