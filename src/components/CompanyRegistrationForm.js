import React from 'react';

const CompanyRegistrationForm = () => {
  return (
    <div className="container mx-auto mt-10 px-4">
      <h2 className="text-center text-2xl font-bold mb-6">Company Registration Form</h2>
      <form>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="companyName" className="block mb-1 font-medium">Company Name</label>
            <input type="text" id="companyName" className="w-full border border-gray-300 p-2 rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="companyType" className="block mb-1 font-medium">Company Type</label>
            <select id="companyType" className="w-full border border-gray-300 p-2 rounded" required>
              <option value="">Select Type</option>
              <option value="private">Private</option>
              <option value="public">Public</option>
              <option value="ngo">NGO</option>
              <option value="government">Government</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="industrySector" className="block mb-1 font-medium">Industry Sector</label>
          <input type="text" id="industrySector" placeholder="For eg :Its an IT sector" className="w-full border border-gray-300 p-2 rounded" required />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="registrationNumber" className="block mb-1 font-medium">Registration Number</label>
            <input type="text" id="registrationNumber" className="w-full border border-gray-300 p-2 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="gstNumber" className="block mb-1 font-medium">GST Number</label>
            <input type="text" id="gstNumber" className="w-full border border-gray-300 p-2 rounded" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="contactName" className="block mb-1 font-medium">Contact Person Name</label>
            <input type="text" id="contactName" className="w-full border border-gray-300 p-2 rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-1 font-medium">Phone Number</label>
            <input type="tel" id="phone" className="w-full border border-gray-300 p-2 rounded" required />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-medium">Email Address</label>
            <input type="email" id="email" className="w-full border border-gray-300 p-2 rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="website" className="block mb-1 font-medium">Company Website (Optional)</label>
            <input type="url" id="website" placeholder="Website URL" className="w-full border border-gray-300 p-2 rounded" />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="jobTypes" className="block mb-1 font-medium">Type of Jobs Offered</label>
          <select id="jobTypes" className="w-full border border-gray-300 p-2 rounded" required>
            <option value="">Select Job Type</option>
            <option value="permanent">Permanent</option>
            <option value="part-time">Part-Time</option>
            <option value="contractual">Contractual Base</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="designation" className="block mb-1 font-medium">Designation</label>
            <input type="text" id="designation" className="w-full border border-gray-300 p-2 rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="jobVacancies" className="block mb-1 font-medium">Number of Job Vacancies</label>
            <input type="number" id="jobVacancies" className="w-full border border-gray-300 p-2 rounded" required />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="documentUpload" className="block mb-1 font-medium">Upload Document (Government Issued)</label>
          <input type="file" id="documentUpload" className="w-full border border-gray-300 p-2 rounded" accept=".pdf,.jpg,.jpeg,.png" />
        </div>

        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Register Company</button>
      </form>
    </div>
  );
};

export default CompanyRegistrationForm;
