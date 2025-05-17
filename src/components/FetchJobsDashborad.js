import React from 'react';

export const FetchJobsDashborad = () => {

    const handleFetchJobs = (id) => {
        if (id === "viewAllJobs") {
            window.location.href = '/all-jobs';
        } else if (id === "fetchCompanyJobs") {
            window.location.href = '/fetch-regiter-jobs';
        } else if (id === "AppliedJobs") {
            window.location.href = '/fetch-Applied-jobs';
        } else if (id === "createNewJob") {
            window.location.href = '/create-job';
        }
    };

    const cards = [
  
        {
            id: 'fetchCompanyJobs',
            title: 'Fetch Jobs by Company',
            description: 'View jobs grouped under each company.'
        },
        {
            id: 'AppliedJobs',
            title: 'Applied job list',
            description: 'Check the jobs you have applied to.'
        }

    ];

    return (
        <div className="p-6 min-h-[75vh] bg-gradient-to-tr from-white via-blue-50 to-blue-100">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-10 tracking-wide">Job Dashboard</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {cards.map(card => (
                    <div
                        key={card.id}
                        onClick={() => handleFetchJobs(card.id)}
                        className="cursor-pointer bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-6 border border-blue-200 hover:bg-white hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out"
                    >
                        <h3 className="text-xl font-semibold text-blue-700 mb-3">{card.title}</h3>
                        
                    </div>
                ))}
            </div>
        </div>

    );
};

