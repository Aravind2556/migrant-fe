import React from 'react';

const SuperadminDashboard = () => {
  return (
    <div>


      {/* Dashboard */}
      <div className="max-w-6xl mx-auto mt-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-10">Superadmin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* User Management */}
          <div className="bg-white rounded-lg shadow-lg text-center">
            <div className="bg-blue-600 text-white py-3 rounded-t-lg">
              <h2 className="text-xl font-semibold">User Management</h2>
            </div>
            <div className="p-6">
              <button className="w-full md:w-1/2 bg-green-100 text-black border border-green-600 rounded py-2 mb-3">Approve User</button>
              <button className="w-full md:w-1/2 bg-red-600 text-white rounded py-2 mb-3">Delete User</button>
              <p className="mt-2">Manage all user accounts and permissions.</p>
            </div>
          </div>

          {/* Grievance Overview */}
          <div className="bg-white rounded-lg shadow-lg text-center">
            <div className="bg-blue-600 text-white py-3 rounded-t-lg">
              <h2 className="text-xl font-semibold">Grievance Overview</h2>
            </div>
            <div className="p-6">
              <button className="w-full md:w-1/2 bg-green-100 text-black border border-green-600 rounded py-2 mb-3">View Grievances</button>
              <button className="w-full md:w-1/2 bg-yellow-100 text-black border border-yellow-600 rounded py-2 mb-3">Resolve Grievances</button>
              <p className="mt-2">Monitor and resolve reported grievances.</p>
            </div>
          </div>

          {/* System Settings */}
          <div className="bg-white rounded-lg shadow-lg text-center col-span-1 md:col-span-2 md:w-1/2 md:mx-auto">
            <div className="bg-blue-600 text-white py-3 rounded-t-lg">
              <h2 className="text-xl font-semibold">System Settings</h2>
            </div>
            <div className="p-6">
              <button className="w-full md:w-1/2 bg-green-100 text-black border border-green-600 rounded py-2 mb-3">Update System Settings</button>
              <button className="w-full md:w-1/2 bg-yellow-100 text-black border border-yellow-600 rounded py-2 mb-3">Generate Reports</button>
              <p className="mt-2">Configure platform settings and generate insights.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperadminDashboard;
