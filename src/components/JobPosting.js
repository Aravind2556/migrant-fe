import React, { useState } from 'react';

export const JobPosting = () => {
    const [formData, setFormData] = useState({
        jobTitle: '',
        companyName: '',
        location: '',
        salaryRange: '',
        jobType: '',
        experience: '',
        skills: '',
        description: '',
        deadline: ''
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
            const res = await fetch('http://localhost:4001/job-post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (res.ok) {
                alert("✅ Job posted successfully!");
                setFormData({
                    jobTitle: '',
                    companyName: '',
                    location: '',
                    salaryRange: '',
                    jobType: '',
                    experience: '',
                    skills: '',
                    description: '',
                    deadline: ''
                });
            } else {
                alert("❌ Error: " + data.message);
            }
        } catch (error) {
            alert("❌ Error: " + error.message);
        }

        setIsLoading(false);
    };

    return (
        <div className="max-w-2xl mx-auto mt-14 bg-gradient-to-br from-white to-blue-50 p-10 rounded-2xl shadow-xl ring-1 ring-blue-200">
            <h2 className="text-4xl font-extrabold text-blue-700 mb-10 text-center tracking-wide drop-shadow-sm">
                Post a New Job
            </h2>
            <form onSubmit={handleSubmit} className="space-y-7">
                {[
                    { name: "jobTitle", placeholder: "Job Title" },
                    { name: "companyName", placeholder: "Company Name" },
                    { name: "location", placeholder: "Location" },
                    { name: "salaryRange", placeholder: "Salary Range" },
                    { name: "jobType", placeholder: "Job Type (e.g. Full-Time, Part-Time)" },
                    { name: "experience", placeholder: "Experience (e.g. 1-3 years)" },
                    { name: "skills", placeholder: "Skills (comma separated)" },
                ].map(({ name, placeholder }) => (
                    <input
                        key={name}
                        type="text"
                        name={name}
                        placeholder={placeholder}
                        value={formData[name]}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border border-blue-300 px-6 py-4 rounded-xl shadow-md placeholder-blue-300
                         focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-transparent
                         transition duration-300 ease-in-out"
                    />
                ))}

                <textarea
                    name="description"
                    placeholder="Job Description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full bg-white border border-blue-300 px-6 py-4 rounded-xl shadow-md placeholder-blue-300
                       focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-transparent
                       transition duration-300 ease-in-out resize-none"
                />

                <input
                    type="date"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-blue-300 px-6 py-4 rounded-xl shadow-md placeholder-blue-300
                       focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-transparent
                       transition duration-300 ease-in-out"
                />

                <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl shadow-lg
                        hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-500
                        transition duration-300 ease-in-out
                        ${isLoading ? 'opacity-60 cursor-not-allowed' : ''}`}
                >
                    {isLoading ? "Posting..." : "Post Job"}
                </button>
            </form>
        </div>
      
    );
};

