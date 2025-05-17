import React, { useContext, useState } from 'react';
import { Dcontext } from './Provider';

const GrievanceRedressalForm = () => {
  const {Auth}=useContext(Dcontext)

  const [formData, setFormData] = useState({
    subject: '',
    grievanceCategory: '',
    grievanceDescription: '',
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.consent) {
      alert('You must give consent to submit the form.');
      return;
    }

    fetch('http://localhost:4001/grievance', {
      method: 'POST',
      credentials : 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(data => {
        console.log("Response:", data);
        if (data.message) {
          alert(data.message); // Show success or error message
        }
      })
      .catch(err => {
        console.error("Error submitting grievance:", err);
        
      });
  };
  

  return (
    <div className="container mx-auto mt-10 px-4 max-w-3xl min-h-[75vh]">
      <div className="bg-gradient-to-tr from-white via-blue-50 to-blue-100 p-10 shadow-xl rounded-3xl border border-blue-200">
        <h2 className="text-center font-bold text-3xl mb-8 text-blue-800">Grievance Redressal Form</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Grievance Details Section */}
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label htmlFor="grievanceCategory" className="block mb-2 text-sm font-medium text-gray-700">Grievance Category</label>
            <select
              id="grievanceCategory"
              name="grievanceCategory"
              value={formData.grievanceCategory}
              onChange={handleChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              required
            >
              <option value="">-- Select a category --</option>
              <option value="Employment">Employment Issues</option>
              <option value="Healthcare">Healthcare Services</option>
              <option value="Housing">Housing and Accommodation</option>
              <option value="Transportation">Transportation Problems</option>
              <option value="Food">Food Quality/Availability</option>
              <option value="Wages">Wages and Salary Issues</option>
              <option value="Documentation">Documentation/ID Issues</option>
              <option value="Legal">Legal and Safety Concerns</option>
              <option value="Staff Behavior">Staff Behavior</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="grievanceDescription" className="block mb-2 text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="grievanceDescription"
              name="grievanceDescription"
              rows="5"
              value={formData.grievanceDescription}
              onChange={handleChange}
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              required
            ></textarea>
          </div>

          {/* Consent Section */}
          <div className="bg-white border border-blue-100 rounded-xl p-4 shadow-sm">
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                required
              />
              <span className="text-sm text-gray-700 leading-5">
                I hereby consent to the collection and processing of my personal data for the purpose of addressing this grievance.
              </span>
            </label>
          </div>

          {/* Buttons */}
          <div className="flex justify-center pt-2">
            <div className="flex gap-4 w-full md:w-2/3">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2.5 rounded-lg font-semibold shadow hover:from-green-600 hover:to-green-700 transition-all"
              >
                Submit
              </button>
              <button
                type="button"
                className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-2.5 rounded-lg font-semibold shadow hover:from-red-600 hover:to-red-700 transition-all"
                onClick={() => {
                  setFormData({
                    subject: '',
                    grievanceCategory: '',
                    grievanceDescription: '',
                    consent: false,
                  });
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

  );
};

export default GrievanceRedressalForm;
