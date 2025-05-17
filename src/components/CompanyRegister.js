import React, { useState } from 'react';

export const CompanyRegister = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        location: '',
        country: '',
        state: '',
        pincode: '',
        password: '',
        companyStartDate: '',
        email: '' // Add email field to formData state
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await fetch('http://localhost:4001/CompanyRegister', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (res.ok) {
                alert("✅ Company registered successfully!");
                setFormData({ companyName: '', location: '', country: '', state: '', pincode: '', password: '', companyStartDate: '', email: '' });
            } else {
                alert("❌ Error: " + data.message);
            }
        } catch (error) {
            alert("❌ Error: " + error.message);
        }

        setIsLoading(false);
    };

    return (
        <div className="max-w-2xl mx-auto mt-16 bg-white/90 backdrop-blur-lg p-12 rounded-3xl shadow-2xl border border-blue-100">
            <h2 className="text-4xl font-bold mb-10 text-center text-blue-700 tracking-wide">Register Your Company</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Company Name */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700">Company Name</label>
                    <input
                        type="text"
                        name="companyName"
                        placeholder="Ex: TCS Pvt Ltd"
                        className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                        onChange={handleChange}
                        value={formData.companyName}
                        required
                    />
                </div>

                {/* Location */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700">Location</label>
                    <input
                        type="text"
                        name="location"
                        placeholder="Ex: Chennai"
                        className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                        onChange={handleChange}
                        value={formData.location}
                        required
                    />
                </div>

                {/* Country */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700">Country</label>
                    <input
                        type="text"
                        name="country"
                        placeholder="Ex: India"
                        className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        onChange={handleChange}
                        value={formData.country}
                        required
                    />
                </div>

                {/* State */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700">State</label>
                    <input
                        type="text"
                        name="state"
                        placeholder="Ex: Tamil Nadu"
                        className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        onChange={handleChange}
                        value={formData.state}
                        required
                    />
                </div>

                {/* Pincode */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700">Pincode</label>
                    <input
                        type="text"
                        name="pincode"
                        placeholder="Ex: 600001"
                        className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        onChange={handleChange}
                        value={formData.pincode}
                        required
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Ex: company@example.com"
                        className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        onChange={handleChange}
                        value={formData.email}
                        required
                    />
                </div>

                {/* Password */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="********"
                        className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        onChange={handleChange}
                        value={formData.password}
                        required
                    />
                </div>

                {/* Company Start Date */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700">Company Start Date</label>
                    <input
                        type="date"
                        name="companyStartDate"
                        className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        onChange={handleChange}
                        value={formData.companyStartDate}
                        required
                    />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full py-3 rounded-lg font-semibold text-white transition duration-200 ${isLoading
                                ? 'bg-blue-400 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-700'
                            }`}
                    >
                        {isLoading ? 'Submitting...' : 'Register Company'}
                    </button>
                </div>
            </form>
        </div>
      
    );
};


