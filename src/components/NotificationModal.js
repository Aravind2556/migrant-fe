// import React, { useContext, useEffect, useRef } from 'react';
// import { Dcontext } from './Provider';

// export const NotificationModal = ({ onClose }) => {
//     const { migrantInfo } = useContext(Dcontext);
//     const modalRef = useRef(null);

//     const statusFiltered = migrantInfo?.filter(m =>
//         m.status === 'Approved' || m.status === 'Rejected'
//     ) || [];

//     const grievanceFiltered = migrantInfo?.filter(m =>
//         m.grivencestatus?.includes("Pending") || m.grivencestatus?.includes("Successfully")
//     ) || [];

//     // Close modal on outside click
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (modalRef.current && !modalRef.current.contains(event.target)) {
//                 onClose();
//             }
//         };
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => document.removeEventListener('mousedown', handleClickOutside);
//     }, [onClose]);

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start pt-20 overflow-auto">
//             <div ref={modalRef} className="bg-white w-full max-w-2xl rounded-lg shadow-lg p-6 animate-slide-down">
//                 <div className="flex justify-between items-center mb-4">
//                     <h2 className="text-xl font-semibold text-blue-700">Notifications</h2>
//                     <button onClick={onClose} className="text-gray-600 hover:text-red-500 text-xl">&times;</button>
//                 </div>

//                 {(statusFiltered.length === 0 && grievanceFiltered.length === 0) ? (
//                     <p className="text-center text-gray-600">No notifications yet.</p>
//                 ) : (
//                     <div className="max-h-[70vh] overflow-y-auto space-y-4">
//                         {/* Application Status Notifications */}
//                         {statusFiltered.map((item, index) => (
//                             <div key={`status-${index}`} className="border-l-4 pl-4 py-2 rounded border-blue-500 bg-blue-50">
//                                 <p><strong>Name:</strong> {item.name}</p>
//                                 <p>
//                                     <strong>Status:</strong>
//                                     <span className={`ml-2 font-semibold ${item.status === 'Approved' ? 'text-green-600' : 'text-red-600'}`}>
//                                         {item.status}
//                                     </span>
//                                 </p>
//                                 {item.status === 'Rejected' && (
//                                     <p><strong>Reason:</strong> {item.rejectedReason}</p>
//                                 )}
//                                 <p className="text-sm text-gray-500"><strong>Time:</strong> {new Date(item.createdAt).toLocaleString()}</p>
//                             </div>
//                         ))}

//                         {/* Grievance Notifications */}
//                         {grievanceFiltered.map((item, index) => (
//                             <div key={`grievance-${index}`} className="border-l-4 pl-4 py-2 rounded border-yellow-500 bg-yellow-50">
//                                 <p><strong>Name:</strong> {item.name}</p>
//                                 <p>
//                                     <strong>Grievance Status:</strong>
//                                     <span className={`ml-2 font-semibold ${item.grivencestatus.includes('Successfully') ? 'text-green-600' : 'text-orange-600'}`}>
//                                         {item.grivencestatus}
//                                     </span>
//                                 </p>
//                                 <p className="text-sm text-gray-500"><strong>Time:</strong> {new Date(item.updatedAt || item.createdAt).toLocaleString()}</p>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };








// import React, { useContext, useEffect, useRef } from 'react';
// import { Dcontext } from './Provider';

// export const NotificationModal = ({ onClose }) => {
//     const { userInfo } = useContext(Dcontext);
//     const modalRef = useRef(null);

//     const statusFiltered = userInfo?.filter(m =>
//         m.status === 'Approved' || m.status === 'Rejected'
//     ) || [];

//     const grievanceFiltered = userInfo?.filter(m =>
//         m.grivencestatus?.includes("Pending") || m.grivencestatus?.includes("Successfully")
//     ) || [];

//     // Close modal on outside click
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (modalRef.current && !modalRef.current.contains(event.target)) {
//                 onClose();
//             }
//         };
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => document.removeEventListener('mousedown', handleClickOutside);
//     }, [onClose]);

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start pt-20 overflow-auto">
//             <div ref={modalRef} className="bg-white w-full max-w-2xl rounded-lg shadow-lg p-6 animate-slide-down">
//                 <div className="flex justify-between items-center mb-4">
//                     <h2 className="text-xl font-semibold text-blue-700">Notifications</h2>
//                     <button onClick={onClose} className="text-gray-600 hover:text-red-500 text-xl">&times;</button>
//                 </div>

//                 {(statusFiltered.length !== 0 && grievanceFiltered.length !== 0) ? (
//                     <p className="text-center text-gray-600">No notifications yet.</p>
//                 ) : (
//                     <div className="max-h-[70vh] overflow-y-auto space-y-4">
//                         {/* Application Status Notifications */}
//                         {statusFiltered.map((item, index) => (
//                             <div key={`status-${index}`} className="border-l-4 pl-4 py-2 rounded border-blue-500 bg-blue-50">
//                                 <p><strong>Name:</strong> {item.name}</p>
//                                 <p>
//                                     <strong>Status:</strong>
//                                     <span className={`ml-2 font-semibold ${item.status === 'Approved' ? 'text-green-600' : 'text-red-600'}`}>
//                                         {item.status}
//                                     </span>
//                                 </p>
//                                 {item.status === 'Rejected' && (
//                                     <p><strong>Reason:</strong> {item.rejectedReason}</p>
//                                 )}
//                                 <p className="text-sm text-gray-500"><strong>Time:</strong> {new Date(item.createdAt).toLocaleString()}</p>
//                             </div>
//                         ))}

//                         {/* Grievance Notifications */}
//                         {grievanceFiltered.map((item, index) => (
//                             <div key={`grievance-${index}`} className="border-l-4 pl-4 py-2 rounded border-yellow-500 bg-yellow-50">
//                                 <p><strong>Name:</strong> {item.name}</p>
//                                 <p>
//                                     <strong>Grievance Status:</strong>
//                                     <span className={`ml-2 font-semibold ${item.grivencestatus.includes('Successfully') ? 'text-green-600' : 'text-orange-600'}`}>
//                                         {item.grivencestatus}
//                                     </span>
//                                 </p>
//                                 <p className="text-sm text-gray-500"><strong>Time:</strong> {new Date(item.updatedAt || item.createdAt).toLocaleString()}</p>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };




import React from 'react';
import { formatDistanceToNow } from 'date-fns'; // install date-fns: npm install date-fns

export const NotificationModal = ({ onClose, data }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-end z-50">
            <div className="bg-white w-full md:w-96 h-full overflow-y-auto p-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold">Notifications</h2>
                    <button onClick={onClose} className="text-red-600 font-semibold">X</button>
                </div>

                {data.length === 0 ? (
                    <p className="text-gray-500">No new notifications.</p>
                ) : (
                    data.map((item, i) => (
                        <div key={i} className="bg-blue-50 border border-blue-300 rounded p-3 mb-3 shadow">
                            <p className="font-medium">{item.name}</p>
                            {item.status && <p>Status: <b>{item.status}</b></p>}
                            {item.grivencestatus && <p>Grievance: <b>{item.grivencestatus}</b></p>}
                            {item.updatedAt && (
                                <p className="text-xs text-gray-500 mt-1">
                                    {formatDistanceToNow(new Date(item.updatedAt), { addSuffix: true })}
                                </p>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};
