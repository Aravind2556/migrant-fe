import React from "react";

const AdminDashboard = () => {

  const handleOpenMigrantData = (id) => {
    if(id === 'migrant'){
      window.location.href = '/migrant-details'
    }
    else if (id === 'company'){
      window.location.href ='/companyRegister'
    }
    else if (id === 'grievance'){
      window.location.href ='/fetch-grievance'
    }
    else if (id === 'fetchjobs'){
      window.location.href = '/fetch-jobs-dashborad'
    }
  }
  return (
    <div className="bg-gray-100 min-h-[75vh]">
       {/* Admin Dashboard */}
      <div className="container mx-auto px-4">
        <h1 className="text-center font-bold text-4xl mb-8">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Profile Management */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white text-center p-4 font-bold text-xl">
              Profile Management
            </div>
            <div className="p-6 text-center">
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4 cursor-pointer" onClick={() => handleOpenMigrantData('migrant')}>
                <button className="btn btn-outline-success w-full bg-green-600 text-white md:w-1/2 border border-green-500 hover:text-green-600 hover:bg-green-100 p-2 rounded">
                 Migrant Details
                </button>
                </div>
            </div>
          </div>

          {/* Job Management */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white text-center p-4 font-bold text-xl">
              Job Management
            </div>
            <div className="p-6 text-center" onClick={()=>handleOpenMigrantData('fetchjobs')}>
         
              <button className="btn w-full md:w-1/2 p-2 border border-red-500 text-red-600 hover:bg-red-100 mb-4">
                View Jobs
              </button>
             
            </div>
          </div>
        </div>

        {/* Grievance and Notifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Grievance Management */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white text-center p-4 font-bold text-xl">
              Grievance Management
            </div>
            <div className="p-6 text-center" onClick={() => handleOpenMigrantData('grievance')}>
              <button className="btn w-full md:w-1/2 p-2 border border-red-500 text-red-600 hover:bg-red-100 mb-4">
                View Grievances
              </button>

       
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white text-center p-4 font-bold text-xl">
              New Company Register
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-5 cursor-pointer" onClick={() => handleOpenMigrantData('company')}>
              <button className="btn btn-outline-success w-full bg-green-600 text-white md:w-1/2 border border-green-500 hover:text-green-600 hover:bg-green-100 p-2 rounded">
                Create Company
              </button>

        
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
