import React, { useContext, useState } from 'react';
import { Dcontext } from './Provider';

export const FetchRegisterJobs = () => {
    const { Alljobs } = useContext(Dcontext);
    const [selectedCompany, setSelectedCompany] = useState(null);

    if (!Alljobs || Alljobs.length === 0) {
        return <p className="text-center text-gray-600 mt-10">Loading job data...</p>;
    }

    // Group jobs by company name
    const jobsByCompany = Alljobs.reduce((acc, job) => {
        const company = job.companyName || 'Unknown';
        if (!acc[company]) {
            acc[company] = [];
        }
        acc[company].push(job);
        return acc;
    }, {});

    return (
        <div className="p-4 min-h-[75vh]">
            <h2 className="text-2xl font-bold mb-6 text-center">Jobs Grouped by Company</h2>

            {/* Company Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {Object.entries(jobsByCompany).map(([company, jobs]) => (
                    <div
                        key={company}
                        onClick={() => setSelectedCompany(company)}
                        className="cursor-pointer bg-blue-100 hover:bg-blue-200 transition border border-blue-400 rounded-xl p-4 shadow"
                    >
                        <h3 className="font-semibold text-lg text-blue-700">{company}</h3>
                        <p className="text-gray-700 text-sm">Jobs Posted: {jobs.length}</p>
                    </div>
                ))}
            </div>

            {/* Job Table for Selected Company (Without Apply Button) */}
            {selectedCompany && (
                <div>
                    <h3 className="text-xl font-semibold mb-3 text-center text-blue-800">
                        Jobs from: {selectedCompany}
                    </h3>

                    <table className="min-w-full bg-white border border-gray-200 shadow-sm">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-2 border">Title</th>
                                <th className="p-2 border">Location</th>
                                <th className="p-2 border">Type</th>
                                <th className="p-2 border">Salary</th>
                                <th className="p-2 border">Experience</th>
                                <th className="p-2 border">Skills</th>
                                <th className="p-2 border">Deadline</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobsByCompany[selectedCompany].map((job) => (
                                <tr key={job._id} className="hover:bg-gray-50">
                                    <td className="p-2 border">{job.jobTitle}</td>
                                    <td className="p-2 border">{job.location}</td>
                                    <td className="p-2 border">{job.jobType}</td>
                                    <td className="p-2 border">₹{job.salaryRange}</td>
                                    <td className="p-2 border">{job.experience}</td>
                                    <td className="p-2 border">{job.skills}</td>
                                    <td className="p-2 border">{new Date(job.deadline).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="mt-4 text-center">
                        <button
                            onClick={() => setSelectedCompany(null)}
                            className="text-red-600 underline hover:text-red-800"
                        >
                            ← Back to Companies
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

