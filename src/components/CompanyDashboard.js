import React from 'react';


export const CompanyDashboard = () => {
  

    const handleNext = (id) => {
        if (id === 'createjob'){
            window.location.href ='/jobposting'
        }
        else if (id === 'applierlist'){
            window.location.href ='/fetch-Applied-jobs'
        }
    };

    return (
        <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen">
            <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-700 drop-shadow-md">
                Company Dashboard
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {[{
                    title: 'Job Applied list',
                    desc: 'View list of all candidates who applied for your jobs.',
                    action: 'applierlist',
                }, {
                    title: 'Create Job',
                    desc: 'Post a new job and start receiving applications.',
                    action: 'createjob',
                }].map(({ title, desc, action }) => (
                    <div
                        key={action}
                        onClick={() => handleNext(action)}
                        className="bg-white rounded-3xl p-8 shadow-lg border border-gray-300 cursor-pointer
                   transform transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1
                   flex flex-col justify-between"
                    >
                        <h3 className="text-2xl font-semibold text-blue-600 mb-4">{title}</h3>
                        <p className="text-gray-700 text-lg leading-relaxed">{desc}</p>
                    </div>
                ))}
            </div>
        </div>

    );
};

