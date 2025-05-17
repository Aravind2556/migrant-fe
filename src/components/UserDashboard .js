import React from 'react';

const UserDashboard = () => {
  const handleNext = (id) => {
    if (id === "clinic") window.location.href = '/GovtSchemes';
    else if (id === 'jobs') window.location.href = '/AllJobs';
    else if (id === 'Grievance') window.location.href = '/GrievanceRedressalForm';
    else if (id === 'updateprofile') window.location.href = '/update-migrant';
  };

  const cardItems = [
    {
      title: "Profile Management",
      button: "Update Profile",
      id: "updateprofile",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Job Recommendations",
      button: "View Jobs",
      id: "jobs",
      gradient: "from-green-500 to-blue-500"
    },
    {
      title: "Healthcare Access",
      button: "HealthCare Scheme",
      id: "clinic",
      gradient: "from-pink-500 to-red-500"
    },
    {
      title: "Grievance Submission",
      button: "File Complaint",
      id: "Grievance",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-[90vh] bg-gradient-to-br from-gray-100 to-gray-200 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-center text-4xl font-bold text-gray-800 mb-10">🎯 User Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {cardItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleNext(item.id)}
              className="bg-white shadow-xl rounded-2xl overflow-hidden transform transition hover:scale-105 cursor-pointer hover:shadow-2xl"
            >
              <div className={`bg-gradient-to-r ${item.gradient} p-4`}>
                <h2 className="text-white text-xl font-semibold text-center">{item.title}</h2>
              </div>
              <div className="p-6 flex justify-center items-center">
                <button className="bg-black hover:bg-gray-800 text-white py-2 px-6 rounded-lg transition-all">
                  {item.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

