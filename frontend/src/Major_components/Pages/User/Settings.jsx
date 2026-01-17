import React from 'react'
import { Settings as SettingsIcon } from "lucide-react";


const Settings = () => {
  return (
     <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-xl bg-gradient-to-br from-[#2E8B57] to-[#3CB371]">
          <SettingsIcon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-500">Manage your preferences</p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Account Settings</h2>
        <p className="text-gray-500">Settings options will appear here...</p>
      </div>
    </div>
  )
}

export default Settings