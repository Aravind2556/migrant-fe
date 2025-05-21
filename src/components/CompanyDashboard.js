import React from 'react';

export const CompanyDashboard = () => {
  const handleNext = (id) => {
    if (id === 'createjob') window.location.href = '/jobposting';
    else if (id === 'applierlist') window.location.href = '/fetch-Applied-jobs';
  };

  const cardItems = [
    {
      title: 'Post a Job',
      button: 'Create Job',
      id: 'createjob',
      gradient: 'bg-blue-400'
    },
    {
      title: 'View Applicants',
      button: 'Job Applied List',
      id: 'applierlist',
      gradient: 'bg-blue-400'
    }
  ];

  return (
    <div className="min-h-[90vh] bg-gradient-to-br from-gray-100 to-gray-200 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-center text-4xl font-bold text-gray-800 mb-10">Company Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {cardItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleNext(item.id)}
              className="bg-white shadow-xl rounded-2xl overflow-hidden transform transition hover:scale-105 cursor-pointer hover:shadow-2xl"
            >
              <div className={`${item.gradient} p-4`}>
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


