// import React, { useContext, useState, useEffect } from 'react'
// import { Dcontext } from './Provider'

// export const UpdatedProfile = () => {
//     const { migrantInfo, updateMigrant, Auth } = useContext(Dcontext)
//     const [formData, setFormData] = useState({})
//     const [matchedMigrant, setMatchedMigrant] = useState(null)
//     const [message, setMessage] = useState('')

//     // Initialize formData only once when Auth and migrantInfo are available
//     useEffect(() => {
//         if (migrantInfo && Array.isArray(migrantInfo) && Auth && !matchedMigrant) {
//             const matched = migrantInfo.find(item => item.email === Auth.email)
//             if (matched) {
//                 setMatchedMigrant(matched)
//                 setFormData({
//                     name: matched.name || '',
//                     email: matched.email || '',
//                     dateOfBirth: matched.dateOfBirth?.slice(0, 10) || '',
//                     gender: matched.gender || '',
//                     phoneNumber: matched.phoneNumber || '',
//                     stateOfOrigin: matched.stateOfOrigin || '',
//                     migratingToState: matched.migratingToState || '',
//                     migratingToCity: matched.migratingToCity || '',
//                     migrationDate: matched.migrationDate?.slice(0, 10) || '',
//                     migrationReason: matched.migrationReason || '',
//                     permanentAddress: matched.permanentAddress || '',
//                     presentAddress: matched.presentAddress || '',
//                     pinCode: matched.pinCode || '',
//                     documentType: matched.documentType || '',
//                     status: matched.status || '',
//                     rejectedReason: matched.rejectedReason || '',
//                     approvedId: matched.approvedId || '',
//                 })
//             }
//         }
//     }, [migrantInfo, Auth, matchedMigrant])

//     const handleChange = (e) => {
//         const { name, value } = e.target
//         setFormData(prev => ({ ...prev, [name]: value }))
//     }

//     // Prevent Enter key submitting form except inside textarea
//     const handleKeyDown = (e) => {
//         if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
//             e.preventDefault()
//         }
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault()

//         try {
//             const res = await fetch(`http://localhost:4001/update`, {
//                 method: "PUT",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(formData)
//             })

//             const result = await res.json()

//             if (res.ok) {
//                 alert("✅ Profile updated successfully!")
//             } else {
//                 setMessage("❌ Update failed: " + result.message)
//             }
//         } catch (error) {
//             console.error(error)
//             setMessage("❌ Something went wrong.")
//         }
//     }

//     if (!migrantInfo || !Auth) return <p>Loading...</p>
//     if (!matchedMigrant) return <p>You are not authorized to view or update this profile.</p>

//     return (
//         <div className="min-h-[75vh]">
//             <div className="p-4 max-w-xl mx-auto bg-slate-50">
//                 <h2 className="text-2xl font-semibold mb-4">Update Your Profile</h2>
//                 {message && <p className="text-green-600 font-medium mb-2">{message}</p>}

//                 <form onSubmit={handleSubmit} onKeyDown={handleKeyDown} className="space-y-4">
//                     <div>
//                         <label>Name</label>
//                         <input
//                             type="text"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             className="w-full border p-2 rounded"
//                         />
//                     </div>

//                     <div>
//                         <label>Email</label>
//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             disabled
//                             className="w-full border p-2 rounded bg-gray-100 cursor-not-allowed"
//                         />
//                     </div>

//                     <div>
//                         <label>Date of Birth</label>
//                         <input
//                             type="date"
//                             name="dateOfBirth"
//                             value={formData.dateOfBirth}
//                             onChange={handleChange}
//                             className="w-full border p-2 rounded"
//                         />
//                     </div>

//                     <div>
//                         <label>Gender</label>
//                         <select
//                             name="gender"
//                             value={formData.gender}
//                             onChange={handleChange}
//                             className="w-full border p-2 rounded"
//                         >
//                             <option value="">Select</option>
//                             <option value="Male">Male</option>
//                             <option value="Female">Female</option>
//                             <option value="Other">Other</option>
//                         </select>
//                     </div>

//                     <div>
//                         <label>Phone Number</label>
//                         <input
//                             type="text"
//                             name="phoneNumber"
//                             value={formData.phoneNumber}
//                             onChange={handleChange}
//                             className="w-full border p-2 rounded"
//                             maxLength={10}
//                             pattern="\d*"
//                         />
//                     </div>

//                     <div>
//                         <label>Permanent Address</label>
//                         <textarea
//                             name="permanentAddress"
//                             value={formData.permanentAddress}
//                             onChange={handleChange}
//                             className="w-full border p-2 rounded"
//                         />
//                     </div>

//                     <div>
//                         <label>Present Address</label>
//                         <textarea
//                             name="presentAddress"
//                             value={formData.presentAddress}
//                             onChange={handleChange}
//                             className="w-full border p-2 rounded"
//                         />
//                     </div>

//                     <div>
//                         <label>Document Type</label>
//                         <input
//                             type="text"
//                             name="documentType"
//                             value={formData.documentType}
//                             onChange={handleChange}
//                             className="w-full border p-2 rounded"
//                         />
//                     </div>

//                     <div>
//                         <label>State of Origin</label>
//                         <input
//                             type="text"
//                             name="stateOfOrigin"
//                             value={formData.stateOfOrigin}
//                             onChange={handleChange}
//                             className="w-full border p-2 rounded"
//                         />
//                     </div>

//                     <div>
//                         <label>Migrating To State</label>
//                         <input
//                             type="text"
//                             name="migratingToState"
//                             value={formData.migratingToState}
//                             onChange={handleChange}
//                             className="w-full border p-2 rounded"
//                         />
//                     </div>

//                     <div>
//                         <label>Migrating To City</label>
//                         <input
//                             type="text"
//                             name="migratingToCity"
//                             value={formData.migratingToCity}
//                             onChange={handleChange}
//                             className="w-full border p-2 rounded"
//                         />
//                     </div>

//                     <div>
//                         <label>Pincode</label>
//                         <input
//                             type="text"
//                             name="pinCode"
//                             value={formData.pinCode}
//                             onChange={handleChange}
//                             className="w-full border p-2 rounded"
//                             maxLength={6}
//                             pattern="\d*"
//                         />
//                     </div>

//                     <div>
//                         <label>Migration Date</label>
//                         <input
//                             type="date"
//                             name="migrationDate"
//                             value={formData.migrationDate}
//                             onChange={handleChange}
//                             className="w-full border p-2 rounded"
//                         />
//                     </div>

//                     <div>
//                         <label>Migration Reason</label>
//                         <textarea
//                             name="migrationReason"
//                             value={formData.migrationReason}
//                             onChange={handleChange}
//                             className="w-full border p-2 rounded"
//                         />
//                     </div>

//                     {/* Only Admins can change status or rejection reason */}
//                     {Auth.role === 'Admin' && (
//                         <>
//                             <div>
//                                 <label>Status</label>
//                                 <select
//                                     name="status"
//                                     value={formData.status}
//                                     onChange={handleChange}
//                                     className="w-full border p-2 rounded"
//                                 >
//                                     <option value="Approved">Approved</option>
//                                     <option value="Pending">Pending</option>
//                                     <option value="Rejected">Rejected</option>
//                                 </select>
//                             </div>

//                             {formData.status === 'Rejected' && (
//                                 <div>
//                                     <label>Rejection Reason</label>
//                                     <textarea
//                                         name="rejectedReason"
//                                         value={formData.rejectedReason}
//                                         onChange={handleChange}
//                                         className="w-full border p-2 rounded"
//                                     />
//                                 </div>
//                             )}
//                         </>
//                     )}

//                     <button
//                         type="submit"
//                         className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//                     >
//                         Save Changes
//                     </button>
//                 </form>
//             </div>
//         </div>
//     )
// }











import React, { useContext, useState, useEffect } from 'react'
import { Dcontext } from './Provider'

export const UpdatedProfile = () => {
    const { migrantInfo, updateMigrant, Auth } = useContext(Dcontext)
    const [formData, setFormData] = useState({})
    const [matchedMigrant, setMatchedMigrant] = useState(null)
    const [message, setMessage] = useState('')

    useEffect(() => {
        if (migrantInfo && Array.isArray(migrantInfo) && Auth && !matchedMigrant) {
            const matched = migrantInfo.find(item => item.email === Auth.email)
            if (matched) {
                setMatchedMigrant(matched)
                setFormData({
                    name: matched.name || '',
                    email: matched.email || '',
                    dateOfBirth: matched.dateOfBirth?.slice(0, 10) || '',
                    gender: matched.gender || '',
                    phoneNumber: matched.phoneNumber || '',
                    stateOfOrigin: matched.stateOfOrigin || '',
                    migratingToState: matched.migratingToState || '',
                    migratingToCity: matched.migratingToCity || '',
                    migrationDate: matched.migrationDate?.slice(0, 10) || '',
                    migrationReason: matched.migrationReason || '',
                    permanentAddress: matched.permanentAddress || '',
                    presentAddress: matched.presentAddress || '',
                    pinCode: matched.pinCode || '',
                    documentType: matched.documentType || '',
                    status: matched.status || '',
                    rejectedReason: matched.rejectedReason || '',
                    approvedId: matched.approvedId || '',
                })
            }
        }
    }, [migrantInfo, Auth, matchedMigrant])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault()
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch(`http://localhost:4001/update`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            })

            const result = await res.json()

            if (res.ok) {
                alert("✅ Profile updated successfully!")
            } else {
                setMessage("❌ Update failed: " + result.message)
            }
        } catch (error) {
            console.error(error)
            setMessage("❌ Something went wrong.")
        }
    }

    if (!migrantInfo || !Auth) return <p>Loading...</p>
    if (!matchedMigrant) return <p>You are not authorized to view or update this profile.</p>

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 py-10">
            <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-lg p-8">
                <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-6 underline underline-offset-4">Update Your Profile</h2>
                {message && <p className="text-red-600 text-center font-medium mb-4">{message}</p>}

                <form onSubmit={handleSubmit} onKeyDown={handleKeyDown} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { label: 'Name', name: 'name', type: 'text' },
                        { label: 'Email', name: 'email', type: 'email', disabled: true },
                        { label: 'Date of Birth', name: 'dateOfBirth', type: 'date' },
                        { label: 'Phone Number', name: 'phoneNumber', type: 'text', maxLength: 10 },
                        { label: 'State of Origin', name: 'stateOfOrigin', type: 'text' },
                        { label: 'Migrating To State', name: 'migratingToState', type: 'text' },
                        { label: 'Migrating To City', name: 'migratingToCity', type: 'text' },
                        { label: 'Pincode', name: 'pinCode', type: 'text', maxLength: 6 },
                        { label: 'Migration Date', name: 'migrationDate', type: 'date' },
                        { label: 'Document Type', name: 'documentType', type: 'text' },
                    ].map(({ label, name, type, ...rest }) => (
                        <div key={name}>
                            <label className="block font-semibold text-gray-700">{label}</label>
                            <input
                                type={type}
                                name={name}
                                value={formData[name]}
                                onChange={handleChange}
                                className={`w-full border rounded-lg p-2 mt-1 ${rest.disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'} shadow`}
                                {...rest}
                            />
                        </div>
                    ))}

                    <div className="md:col-span-2">
                        <label className="block font-semibold text-gray-700">Gender</label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-2 mt-1 shadow"
                        >
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {[
                        { label: 'Permanent Address', name: 'permanentAddress' },
                        { label: 'Present Address', name: 'presentAddress' },
                        { label: 'Migration Reason', name: 'migrationReason' },
                    ].map(({ label, name }) => (
                        <div key={name} className="md:col-span-2">
                            <label className="block font-semibold text-gray-700">{label}</label>
                            <textarea
                                name={name}
                                value={formData[name]}
                                onChange={handleChange}
                                className="w-full border rounded-lg p-2 mt-1 shadow"
                            />
                        </div>
                    ))}

                    {Auth.role === 'Admin' && (
                        <>
                            <div className="md:col-span-2">
                                <label className="block font-semibold text-gray-700">Status</label>
                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg p-2 mt-1 shadow"
                                >
                                    <option value="Approved">Approved</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Rejected">Rejected</option>
                                </select>
                            </div>

                            {formData.status === 'Rejected' && (
                                <div className="md:col-span-2">
                                    <label className="block font-semibold text-gray-700">Rejection Reason</label>
                                    <textarea
                                        name="rejectedReason"
                                        value={formData.rejectedReason}
                                        onChange={handleChange}
                                        className="w-full border rounded-lg p-2 mt-1 shadow"
                                    />
                                </div>
                            )}
                        </>
                    )}

                    <div className="md:col-span-2 text-center mt-6">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full shadow-lg transition"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
