import React, { useState } from "react";

const AdminRegister = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        contact: "",
        password: "",
        confirmPassword: "",
        userType: "Admin",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError("");
        setSuccess("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { fullname, email, contact, password, confirmPassword, userType } = formData;

        if (!fullname || !email || !contact || !password || !confirmPassword) {
            setError("All fields are required.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            const response = await fetch("http://localhost:4001/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fullname,
                    email,
                    contact,
                    password,
                    userType, // "Admin"
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess(data.message || "Admin registered successfully!");
                setFormData({
                    fullname: "",
                    email: "",
                    contact: "",
                    password: "",
                    confirmPassword: "",
                    userType: "admin",
                });
            } else {
                setError(data.error || "Registration failed. Try again.");
            }
        } catch (err) {
            console.error("Error:", err);
            setError("Server error. Please try again later.");
        }
    };
      

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex justify-center items-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">Register New Admin</h2>

                {error && <div className="mb-4 text-red-500">{error}</div>}
                {success && <div className="mb-4 text-green-600">{success}</div>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="fullname"
                        placeholder="Full Name"
                        value={formData.fullname}
                        onChange={handleChange}
                        className="w-full p-3 border border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />

                    <input
                        type="tel"
                        name="contact"
                        placeholder="Contact Number"
                        value={formData.contact}
                        onChange={handleChange}
                        className="w-full p-3 border border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-3 border border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full p-3 border border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />

 

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300"
                    >
                        Register Admin
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminRegister;
