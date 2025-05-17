import React, { useContext, useState } from 'react';
import { Dcontext } from './Provider';

export const MigrantDetails = () => {
    const { migrantInfo } = useContext(Dcontext);
    const [selectedMigrant, setSelectedMigrant] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [rejectionReason, setRejectionReason] = useState('');
    const [showReasonInput, setShowReasonInput] = useState(false);

    console.log("migrant details",migrantInfo)

    const handleRejectSubmit = async () => {
        if (!rejectionReason.trim()) {
            alert("Please enter a reason for rejection.");
            return;
        }

        // Send rejection reason to backend
        await fetch(`http://localhost:4001/reject-migrant/${selectedMigrant._id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ reason: rejectionReason }),
            credentials: 'include'
        });

        // Show frontend alert
        alert(`Migrant rejected: ${rejectionReason}`);

        // Reset and close modal
        setShowModal(false);
        setSelectedMigrant(null);
        setRejectionReason('');
        setShowReasonInput(false);
    };

    const handleApprove = async () => {
        // Send approval request to backend
        await fetch(`http://localhost:4001/approve-migrant/${selectedMigrant._id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });

        // Show approval message
        alert(`Migrant ${selectedMigrant.name} has been approved.`);

        // Close modal after approval
        setShowModal(false);
        setSelectedMigrant(null);
    };

    if (!migrantInfo || migrantInfo.length === 0) {
        return <div className="text-center p-4 text-gray-600">No migrant data found.</div>;
    }

    return (
        <div className="p-6 min-h-[75vh]">
            <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">Migrant List</h2>

            <div className="overflow-x-auto rounded-lg shadow-lg">
                <table className="min-w-full bg-white border border-gray-300 text-sm">
                    <thead>
                        <tr className="bg-blue-100 text-gray-700 text-left">
                            <th className="px-4 py-3">Sl.no</th>
                            <th className="px-4 py-3">Name</th>
                            <th className="px-4 py-3">Email</th>
                            <th className="px-4 py-3">Phone Number</th>
                            <th className="px-4 py-3">Gender</th>
                            <th className="px-4 py-3">Migration Date</th>
                            <th className="px-4 py-3 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {migrantInfo.map((migrant, index) => (
                            <tr key={index} className="border-t hover:bg-gray-50">
                                <td className="px-4 py-3">{index + 1}</td>
                                <td className="px-4 py-3">{migrant.name}</td>
                                <td className="px-4 py-3">{migrant.email}</td>
                                <td className="px-4 py-3">{migrant.phoneNumber}</td>
                                <td className="px-4 py-3">{migrant.gender}</td>
                                <td className="px-4 py-3">{new Date(migrant.migrationDate).toLocaleDateString()}</td>
                                <td className="px-4 py-3 text-center">
                                    <button
                                        onClick={() => {
                                            setSelectedMigrant(migrant);
                                            setShowModal(true);
                                        }}
                                        className="text-blue-600 hover:text-blue-800 font-medium underline"
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {showModal && selectedMigrant && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl w-[90%] max-w-2xl p-8 shadow-2xl relative">
                        <h3 className="text-2xl font-semibold mb-6 text-center text-blue-700">Migrant Full Details</h3>
                        <div className="grid grid-cols-1 gap-4 text-gray-700 text-sm">
                            <p><strong>Name:</strong> {selectedMigrant.name}</p>
                            <p><strong>Email:</strong> {selectedMigrant.email}</p>
                            <p><strong>Phone:</strong> {selectedMigrant.phoneNumber}</p>
                            <p><strong>Gender:</strong> {selectedMigrant.gender}</p>
                            <p><strong>Date of Birth:</strong> {new Date(selectedMigrant.dateOfBirth).toLocaleDateString()}</p>
                            <p><strong>Migration Reason:</strong> {selectedMigrant.migrationReason}</p>
                            <p><strong>Present Address:</strong> {selectedMigrant.presentAddress}</p>
                        </div>

                        {showReasonInput ? (
                            <div className="mt-6">
                                <textarea
                                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                                    placeholder="Enter rejection reason..."
                                    value={rejectionReason}
                                    onChange={(e) => setRejectionReason(e.target.value)}
                                />
                                <div className="flex justify-end mt-4 gap-2">
                                    <button
                                        onClick={handleRejectSubmit}
                                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                                    >
                                        Submit Reason
                                    </button>
                                    <button
                                        onClick={() => {
                                            setShowReasonInput(false);
                                            setRejectionReason('');
                                        }}
                                        className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="mt-8 flex justify-end gap-3">
                                <button
                                    onClick={handleApprove}
                                    className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
                                >
                                    Approve
                                </button>
                                <button
                                    onClick={() => setShowReasonInput(true)}
                                    className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700 transition"
                                >
                                    Reject
                                </button>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="px-5 py-2 border border-gray-400 rounded hover:bg-gray-100 transition"
                                >
                                    Close
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>

    );
};
