import React from 'react';

const EmploymentTrackingForm = () => {
  return (
    <div className="container mx-auto my-10 px-4 md:px-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Employment Tracking Form</h2>
      <form className="space-y-6">
        {/* Personal Information */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Personal Information</h4>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-1">Full Name as per AADHAR</label>
            <input type="text" id="name" name="name" className="w-full border rounded px-3 py-2" required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="aadharNumber" className="block font-medium mb-1">Aadhaar Card Number</label>
              <input type="text" id="aadharNumber" name="aadharNumber" className="w-full border rounded px-3 py-2" maxLength="12" required />
            </div>
            <div>
              <label htmlFor="panNumber" className="block font-medium mb-1">PAN Card Number</label>
              <input type="text" id="panNumber" name="panNumber" className="w-full border rounded px-3 py-2" maxLength="10" placeholder="If applicable" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="passportNumber" className="block font-medium mb-1">Passport Number</label>
              <input type="text" id="passportNumber" name="passportNumber" className="w-full border rounded px-3 py-2" maxLength="9" required />
            </div>
            <div>
              <label htmlFor="licenseNumber" className="block font-medium mb-1">Driving License ID</label>
              <input type="text" id="licenseNumber" name="licenseNumber" className="w-full border rounded px-3 py-2" maxLength="16" placeholder="If applicable" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="dob" className="block font-medium mb-1">Date of Birth</label>
              <input type="date" id="dob" name="dob" className="w-full border rounded px-3 py-2" required />
            </div>
            <div>
              <label htmlFor="contact" className="block font-medium mb-1">Contact Details</label>
              <input type="text" id="contact" name="contact" className="w-full border rounded px-3 py-2" maxLength="10" required />
            </div>
          </div>
        </div>

        {/* Employment Information */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Employment Information</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="jobTitle" className="block font-medium mb-1">Job Title</label>
              <input type="text" id="jobTitle" name="jobTitle" className="w-full border rounded px-3 py-2" required />
            </div>
            <div>
              <label htmlFor="department" className="block font-medium mb-1">Department</label>
              <input type="text" id="department" name="department" className="w-full border rounded px-3 py-2" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="startDate" className="block font-medium mb-1">Start Date</label>
              <input type="text" id="startDate" name="startDate" className="w-full border rounded px-3 py-2" placeholder="dd/mm/yyyy" />
            </div>
            <div>
              <label htmlFor="endDate" className="block font-medium mb-1">End Date</label>
              <input type="text" id="endDate" name="endDate" className="w-full border rounded px-3 py-2" placeholder="dd/mm/yyyy" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="employmentType" className="block font-medium mb-1">Employment Type</label>
              <select id="employmentType" name="employmentType" className="w-full border rounded px-3 py-2">
                <option value="fullTime">Full-Time</option>
                <option value="partTime">Part-Time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
              </select>
            </div>
            <div>
              <label htmlFor="jobLocation" className="block font-medium mb-1">Job Location</label>
              <input type="text" id="jobLocation" name="jobLocation" className="w-full border rounded px-3 py-2" />
            </div>
          </div>
        </div>

        {/* Feedback Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Feedback</h4>
          <div className="mb-4">
            <label htmlFor="reasonForLeaving" className="block font-medium mb-1">Reason for Leaving</label>
            <textarea id="reasonForLeaving" name="reasonForLeaving" rows="3" className="w-full border rounded px-3 py-2" required></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="feedback" className="block font-medium mb-1">Reason for Choosing</label>
            <textarea id="feedback" name="feedback" rows="3" className="w-full border rounded px-3 py-2"></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Submit</button>
      </form>
    </div>
  );
};

export default EmploymentTrackingForm;
