import React from 'react';

const HealthcareAccessForm = () => {
  return (
    <div className="container mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold text-center mb-6">Healthcare Access Form</h2>
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="uniqueID" className="mb-1">Unique ID Number</label>
            <input type="text" id="uniqueID" placeholder="Enter your Unique ID" required className="border rounded px-3 py-2" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1">Name</label>
            <input type="text" id="name" required className="border rounded px-3 py-2" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="age" className="mb-1">Age</label>
            <input type="number" id="age" placeholder="Enter your Age" required className="border rounded px-3 py-2" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-1">Phone Number</label>
            <input type="tel" id="phone" placeholder="Enter your Phone Number" required className="border rounded px-3 py-2" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="address" className="mb-1">Current Address</label>
            <textarea id="address" rows="4" placeholder="Enter your Current Address" required className="border rounded px-3 py-2"></textarea>
          </div>
          <div className="flex flex-col">
            <label htmlFor="currentHealth" className="mb-1">Current Health Condition</label>
            <textarea id="currentHealth" rows="4" placeholder="Describe your Current Health Condition Shortly" required className="border rounded px-3 py-2"></textarea>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="emergencyContactName" className="mb-1">Emergency Contact Name</label>
            <input type="text" id="emergencyContactName" placeholder="In case of Critical Condition" required className="border rounded px-3 py-2" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="emergencyContactPhone" className="mb-1">Emergency Contact Phone Number</label>
            <input type="tel" id="emergencyContactPhone" placeholder="In case of Critical Condition" required className="border rounded px-3 py-2" />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="healthcareNeed" className="mb-1">Specific Healthcare Service Needed</label>
          <select id="healthcareNeed" required className="border rounded px-3 py-2">
            <option value="">Select Healthcare Service</option>
            <option value="general_checkup">General Checkup</option>
            <option value="specialist_consultation">Specialist Consultation</option>
            <option value="medication_supply">Medication Supply</option>
            <option value="emergency">Emergency Services</option>
          </select>
        </div>

        <div className="flex justify-center mt-6">
          <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default HealthcareAccessForm;
