// import React, { useContext } from 'react'
// import { Dcontext } from './Provider'

// export const AllJobs = () => {
//     const { Alljobs, migrantInfo } = useContext(Dcontext)

// const handleApply = async (jobId, jobTitle) => {
     

//         try {
//             const response = await fetch('http://localhost:4001/apply-job', {
//                 method: 'POST',
//                 credentials : 'include',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     jobId,
//                    jobTitle
                   
//                 }),
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 alert(data.message);
//             } else {
//                 alert(data.message || "Failed to apply.");
//             }
//         } catch (error) {
//             console.error("Apply error:", error);
//             alert("Server error. Please try again.");
//         }
//     };
      


//     if(!Alljobs || Alljobs.length === 0 ){
//         return (
//             <div>
//                 <p>Loading....</p>
//             </div>
//         )
//     }




//     return (
//         <div className="p-4">
//             <h2 className="text-2xl font-bold mb-6 text-center">Available Job Listings</h2>

//             {Alljobs.length === 0 ? (
//                 <p className="text-center text-gray-600">No jobs available</p>
//             ) : (
//                 <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-7 gap-6">
//                     {Alljobs.map((job) => (
//                         <div
//                             key={job._id}
//                             className="bg-white shadow-md rounded-2xl p-5 grid justify-center border border-gray-200 hover:shadow-lg transition"
//                         >
//                             <h3 className="text-xl font-semibold text-blue-700 mb-2">{job.jobTitle}</h3>
//                             <p className="text-gray-600 mb-1"><strong>Company:</strong> {job.companyName}</p>
//                             <p className="text-gray-600 mb-1"><strong>Location:</strong> {job.location}</p>
//                             <p className="text-gray-600 mb-1"><strong>Type:</strong> {job.jobType}</p>
//                             <p className="text-gray-600 mb-1"><strong>Salary:</strong> ₹ {job.salaryRange}</p>
//                             <p className="text-gray-600 mb-1"><strong>Experience:</strong> {job.experience}</p>
//                             <p className="text-gray-600 mb-1"><strong>Skills:</strong> {job.skills}</p>
//                             <p className="text-gray-600 mb-1"><strong>Deadline:</strong> {new Date(job.deadline).toLocaleDateString()}</p>

//                             <div className="mt-4">
//                                 <button
//                                     className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
//                                     onClick={() => handleApply(job._id, job.jobTitle)}
//                                 >
//                                     Apply Now
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     )
// }






import React, { useContext, useState } from 'react';
import { Dcontext } from './Provider';

export const AllJobs = () => {
    const { Alljobs } = useContext(Dcontext);
    const [selectedCompany, setSelectedCompany] = useState(null);

    const handleApply = async (jobId, jobTitle) => {
        try {
            const response = await fetch('http://localhost:4001/apply-job', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ jobId, jobTitle }),
            });

            const data = await response.json();
            alert(data.message || "Failed to apply.");
        } catch (error) {
            console.error("Apply error:", error);
            alert("Server error. Please try again.");
        }
    };

    if (!Alljobs || Alljobs.length === 0) {
        return <p className="text-center text-gray-600 mt-10">Loading job data...</p>;
    }

    const jobsByCompany = Alljobs.reduce((acc, job) => {
        const company = job.companyName || 'Unknown';
        if (!acc[company]) {
            acc[company] = [];
        }
        acc[company].push(job);
        return acc;
    }, {});

    return (
        <div className="p-6 min-h-[75vh] bg-gray-50">
            <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800">Jobs by Company</h2>

            {/* Company Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                {Object.entries(jobsByCompany).map(([company, jobs]) => (
                    <div
                        key={company}
                        onClick={() => setSelectedCompany(company)}
                        className="cursor-pointer bg-gradient-to-r from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300 transition-all duration-200 border border-blue-300 rounded-2xl p-6 shadow-lg hover:scale-[1.02]"
                    >
                        <h3 className="font-bold text-xl text-blue-900 mb-2">{company}</h3>
                        <p className="text-sm text-gray-800">Jobs Posted: <span className="font-medium">{jobs.length}</span></p>
                    </div>
                ))}
            </div>

            {/* Job Table */}
            {selectedCompany && (
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                    <h3 className="text-2xl font-semibold mb-4 text-center text-blue-800">
                        Jobs from: {selectedCompany}
                    </h3>

                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm text-left border border-gray-200 rounded-xl overflow-hidden">
                            <thead className="bg-blue-50 text-gray-700 font-semibold">
                                <tr>
                                    <th className="p-3 border">Title</th>
                                    <th className="p-3 border">Location</th>
                                    <th className="p-3 border">Type</th>
                                    <th className="p-3 border">Salary</th>
                                    <th className="p-3 border">Experience</th>
                                    <th className="p-3 border">Skills</th>
                                    <th className="p-3 border">Deadline</th>
                                    <th className="p-3 border">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {jobsByCompany[selectedCompany].map((job) => (
                                    <tr key={job._id} className="hover:bg-gray-50 transition">
                                        <td className="p-3 border">{job.jobTitle}</td>
                                        <td className="p-3 border">{job.location}</td>
                                        <td className="p-3 border">{job.jobType}</td>
                                        <td className="p-3 border">₹{job.salaryRange}</td>
                                        <td className="p-3 border">{job.experience}</td>
                                        <td className="p-3 border">{job.skills}</td>
                                        <td className="p-3 border">{new Date(job.deadline).toLocaleDateString()}</td>
                                        <td className="p-3 border text-center">
                                            <button
                                                onClick={() => handleApply(job._id, job.jobTitle)}
                                                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-1.5 rounded-md hover:from-blue-700 hover:to-blue-800 shadow"
                                            >
                                                Apply
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-6 text-center">
                        <button
                            onClick={() => setSelectedCompany(null)}
                            className="text-red-600 underline hover:text-red-800 text-sm"
                        >
                            ← Back to Companies
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
