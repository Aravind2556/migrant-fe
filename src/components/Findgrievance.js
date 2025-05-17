// import React, { useContext, useState } from 'react';
// import { Dcontext } from './Provider';

// export const Findgrievance = () => {
//     const { grievance } = useContext(Dcontext);
//     const [selectedEmail, setSelectedEmail] = useState(null);

//     // If grievance is null or still loading
//     if (!grievance) {
//         return <p className="text-center mt-10 text-gray-600">Loading grievances...</p>;
//     }

//     // Group grievances by email safely
//     const grievancesByEmail = (grievance || []).reduce((acc, item) => {
//         const email = item.submittedByEmail || 'Unknown';
//         if (!acc[email]) {
//             acc[email] = [];
//         }
//         acc[email].push(item);
//         return acc;
//     }, {});

//     return (
//         <div className="p-4 min-h-[75vh]">
//             <h2 className="text-2xl font-bold mb-4 text-center">Grievance Dashboard</h2>

//             {/* Email Card List */}
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
//                 {Object.keys(grievancesByEmail).map((email, index) => (
//                     <div
//                         key={index}
//                         onClick={() => setSelectedEmail(email)}
//                         className="cursor-pointer bg-blue-100 border border-blue-300 rounded-xl p-4 shadow hover:bg-blue-200 transition"
//                     >
//                         <h3 className="font-semibold text-blue-700 text-lg">{email}</h3>
//                         <p className="text-gray-600 text-sm">
//                             Total Complaints: {grievancesByEmail[email].length}
//                         </p>
//                     </div>
//                 ))}
//             </div>

//             {/* Table View for Selected Email */}
//             {selectedEmail && (
//                 <div className="mt-6">
//                     <h3 className="text-xl font-semibold mb-4">
//                         Grievances submitted by: <span className="text-blue-700">{selectedEmail}</span>
//                     </h3>

//                     <table className="min-w-full bg-white border border-gray-200 shadow">
//                         <thead>
//                             <tr className="bg-gray-100 text-left">
//                                 <th className="p-2 border">Subject</th>
//                                 <th className="p-2 border">Category</th>
//                                 <th className="p-2 border">Description</th>
//                                 <th className="p-2 border">Submitted At</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {grievancesByEmail[selectedEmail].map((item) => (
//                                 <tr key={item._id} className="hover:bg-gray-50">
//                                     <td className="p-2 border">{item.subject}</td>
//                                     <td className="p-2 border">{item.grievanceCategory}</td>
//                                     <td className="p-2 border">{item.grievanceDescription}</td>
//                                     <td className="p-2 border">{new Date(item.submittedAt).toLocaleString()}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     );
// };









import React, { useContext, useState } from 'react';
import { Dcontext } from './Provider';

export const Findgrievance = () => {
    const { grievance, migrantInfo } = useContext(Dcontext);
    const [selectedEmail, setSelectedEmail] = useState(null);
    const [status, setStatus] = useState('Pending');
    const [selectedId, setSelectedId] = useState(null); // To track which complaint you're updating

    console.log("migrantInfo", migrantInfo)
    const handleStatusSubmit = (id) => {
        fetch('http://localhost:4001/grivence-migrant', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                migrantId: id,
                grivencestatus: status,
            }),
        })
            .then(res => res.json())
            .then(data => {
                alert(data.message);
            })
            .catch(err => {
                console.log('Error:', err);
                alert('Something went wrong while updating the status.');
            });
    };

    
        


       
   

    if (!grievance) {
        return <p className="text-center mt-10 text-gray-600">Loading grievances...</p>;
    }

    const grievancesByEmail = grievance.reduce((acc, item) => {
        const email = item.submittedByEmail || 'Unknown';
        if (!acc[email]) acc[email] = [];
        acc[email].push(item);
        return acc;
    }, {});

    return (
        <div className="p-4 min-h-[75vh]">
            <h2 className="text-2xl font-bold mb-4 text-center">Grievance Dashboard</h2>

            {/* Email Card List */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                {Object.keys(grievancesByEmail).map((email, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedEmail(email)}
                        className="cursor-pointer bg-blue-100 border border-blue-300 rounded-xl p-4 shadow hover:bg-blue-200 transition"
                    >
                        <h3 className="font-semibold text-blue-700 text-lg">{email}</h3>
                        <p className="text-gray-600 text-sm">
                            Total Complaints: {grievancesByEmail[email].length}
                        </p>
                    </div>
                ))}
            </div>

            {/* Table for Selected Email */}
            {selectedEmail && (
                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-4">
                        Grievances submitted by: <span className="text-blue-700">{selectedEmail}</span>
                    </h3>

                    <table className="min-w-full bg-white border border-gray-200 shadow">
                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="p-2 border">Subject</th>
                                <th className="p-2 border">Category</th>
                                <th className="p-2 border">Description</th>
                                <th className="p-2 border">Submitted At</th>
                                <th className="p-2 border">Status</th>
                                <th className="p-2 border">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {grievancesByEmail[selectedEmail].map((item) => (
                                <tr key={item._id} className="hover:bg-gray-50">
                                    <td className="p-2 border">{item.subject}</td>
                                    <td className="p-2 border">{item.grievanceCategory}</td>
                                    <td className="p-2 border">{item.grievanceDescription}</td>
                                    <td className="p-2 border">{new Date(item.submittedAt).toLocaleString()}</td>
                                    <td className="p-2 border">
                                        <select
                                            className="border p-1 rounded"
                                            value={selectedId === item._id ? status : item.grivenceStatus?.status || 'Pending'}
                                            onChange={(e) => {
                                                setStatus(e.target.value);
                                                setSelectedId(item._id);
                                            }}
                                        >
                                            <option value="Pending">Pending</option>
                                            <option value="Successfully">Successfully</option>
                                        </select>
                                    </td>
                                    <td className="p-2 border">
                                        <button
                                            onClick={() => handleStatusSubmit(item.submittedByEmail)}
                                            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                                        >
                                            Submit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};
