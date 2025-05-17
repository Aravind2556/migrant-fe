import React, { useContext, useState } from 'react';
import { Dcontext } from './Provider';

export const AppliedJobs = () => {
    const { appliedJobs } = useContext(Dcontext);
    const [selectedEmail, setSelectedEmail] = useState(null);

    // Step 1: Group appliedJobs by MigrentId
    const groupedJobs = appliedJobs?.reduce((acc, job) => {
        if (!acc[job.MigrentId]) {
            acc[job.MigrentId] = [];
        }
        acc[job.MigrentId].push(job);
        return acc;
    }, {}) || {};

    const handleCardClick = (email) => {
        setSelectedEmail(email === selectedEmail ? null : email);
    };

    return (
        <div className="p-8 min-h-[75vh] bg-gray-50">
            <h2 className="text-3xl font-extrabold mb-8 text-center text-blue-700 drop-shadow-sm">
                Applied Jobs by Migrants
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 max-w-6xl mx-auto">
                {Object.keys(groupedJobs).map((email) => (
                    <div
                        key={email}
                        onClick={() => handleCardClick(email)}
                        className={`cursor-pointer bg-white shadow-lg rounded-2xl p-6 border border-gray-300
                    transition-colors duration-300 hover:bg-blue-100 
                    ${selectedEmail === email ? 'bg-blue-200' : ''}`}
                    >
                        <h3 className="text-xl font-semibold text-blue-700 mb-3 truncate">{email}</h3>
                        <p className="text-gray-700 text-lg font-medium">Total Applied: {groupedJobs[email].length}</p>
                    </div>
                ))}
            </div>

            {selectedEmail && (
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-300 max-w-5xl mx-auto">
                    <h3 className="text-2xl font-bold text-center mb-6 text-blue-700">
                        Jobs Applied by <span className="underline">{selectedEmail}</span>
                    </h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse border border-gray-300">
                            <thead className="bg-blue-50">
                                <tr>
                                    <th className="p-4 border border-gray-300 font-semibold text-blue-700">Job Title</th>
                                    <th className="p-4 border border-gray-300 font-semibold text-blue-700">Applied At</th>
                                </tr>
                            </thead>
                            <tbody>
                                {groupedJobs[selectedEmail].map((job) => (
                                    <tr key={job._id} className="hover:bg-blue-100 transition-colors">
                                        <td className="p-4 border border-gray-300">{job.jobTitle}</td>
                                        <td className="p-4 border border-gray-300">{new Date(job.appliedAt).toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>

    );
};

