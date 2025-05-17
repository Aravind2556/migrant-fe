import React, { useState } from "react";

export default function MigrantRegistrationForm() {
  const [educationEntries, setEducationEntries] = useState([
    { degree: "", institution: "", year: "" },
  ]);
  const [workEntries, setWorkEntries] = useState([
    { jobTitle: "", company: "", startDate: "", endDate: "", description: "" },
  ]);

  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [presentAddress, setPresentAddress] = useState("");
  const [aadharFile, setAadharFile] = useState(null);
  const [documentType, setDocumentType] = useState("");
  const [documentFile, setDocumentFile] = useState(null);
  const [stateOfOrigin, setStateOfOrigin] = useState("");
  const [languagesKnown, setLanguagesKnown] = useState("");
  const [migratingToState, setMigratingToState] = useState("");
  const [migratingToCity, setMigratingToCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [migrationDate, setMigrationDate] = useState("");
  const [migrationReason, setMigrationReason] = useState("");

  console.log("data",name,dateOfBirth,phoneNumber,permanentAddress,presentAddress,aadharFile,documentFile,documentFile,languagesKnown,migratingToState,migratingToCity,pinCode,migrationDate,migrationReason)

  const addEducationEntry = () => {
    setEducationEntries([...educationEntries, { degree: "", institution: "", year: "" }]);
  };

  const addWorkExperienceEntry = () => {
    setWorkEntries([
      ...workEntries,
      { jobTitle: "", company: "", startDate: "", endDate: "", description: "" },
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("dateOfBirth", dateOfBirth);
    formData.append("gender", gender);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("permanentAddress", permanentAddress);
    formData.append("presentAddress", presentAddress);

    if (aadharFile) {
      formData.append("aadhar", aadharFile);
    }

    if (documentFile) {
      formData.append("documentType", documentType);
      formData.append("documentFile", documentFile);
    }

    educationEntries.forEach((entry, index) => {
      formData.append(`educationDetails[${index}][degree]`, entry.degree);
      formData.append(`educationDetails[${index}][institution]`, entry.institution);
      formData.append(`educationDetails[${index}][year]`, entry.year);
    });

    workEntries.forEach((entry, index) => {
      formData.append(`workExperience[${index}][jobTitle]`, entry.jobTitle);
      formData.append(`workExperience[${index}][company]`, entry.company);
      formData.append(`workExperience[${index}][startDate]`, entry.startDate);
      formData.append(`workExperience[${index}][endDate]`, entry.endDate);
      formData.append(`workExperience[${index}][description]`, entry.description);
    });

    formData.append("stateOfOrigin", stateOfOrigin);
    formData.append("languagesKnown", languagesKnown);
    formData.append("migratingToState", migratingToState);
    formData.append("migratingToCity", migratingToCity);
    formData.append("pinCode", pinCode);
    formData.append("migrationDate", migrationDate);
    formData.append("migrationReason", migrationReason);

  

    try {
      const res = await fetch("http://localhost:4001/migrants", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        alert("Registration successful!");
      } else {
        alert("Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Migrant Registration Form</h2>
      <form className="space-y-8" onSubmit={handleSubmit}>
        <div>
          <h4 className="text-xl font-semibold mb-4">Personal Information</h4>
          <div className="mb-4">
            <label className="block">Name</label>
            <input type="text" className="w-full border rounded p-2" required value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block">Date of Birth</label>
              <input type="date" className="w-full border rounded p-2" required value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
            </div>
            <div>
              <label className="block">Gender</label>
              <select className="w-full border rounded p-2" required value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block">Email</label>
              <input type="email" className="w-full border rounded p-2" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label className="block">Phone Number</label>
              <input type="tel" className="w-full border rounded p-2" required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block">Permanent Address</label>
              <textarea className="w-full border rounded p-2" rows="3" required value={permanentAddress} onChange={(e) => setPermanentAddress(e.target.value)}></textarea>
            </div>
            <div>
              <label className="block">Present Address</label>
              <textarea className="w-full border rounded p-2" rows="3" required value={presentAddress} onChange={(e) => setPresentAddress(e.target.value)}></textarea>
            </div>
          </div>
          <div className="mt-4">
            <label className="block">Upload AADHAR (mandatory)</label>
            <input type="file" className="w-full border rounded p-2" accept=".pdf,.jpg,.jpeg,.png" required onChange={(e) => setAadharFile(e.target.files[0])} />
          </div>
          <div className="mt-4">
            <label className="block">Select Document Type (if applicable)</label>
            <select className="w-full border rounded p-2" value={documentType} onChange={(e) => setDocumentType(e.target.value)}>
              <option value="">Select</option>
              <option value="Passport">Passport</option>
              <option value="PAN Card">PAN Card</option>
              <option value="Voter ID">Voter ID</option>
              <option value="Driving License">Driving License</option>
            </select>
            <label className="block mt-2">Upload Document</label>
            <input type="file" className="w-full border rounded p-2" accept=".pdf,.jpg,.jpeg,.png" onChange={(e) => setDocumentFile(e.target.files[0])} />
          </div>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Education Details</h4>
          {educationEntries.map((entry, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <input type="text" className="border p-2 rounded" placeholder="Degree" required value={entry.degree} onChange={(e) => {
                const newEntries = [...educationEntries];
                newEntries[index].degree = e.target.value;
                setEducationEntries(newEntries);
              }} />
              <input type="text" className="border p-2 rounded" placeholder="Institution" required value={entry.institution} onChange={(e) => {
                const newEntries = [...educationEntries];
                newEntries[index].institution = e.target.value;
                setEducationEntries(newEntries);
              }} />
              <input type="text" className="border p-2 rounded" placeholder="Year" required value={entry.year} onChange={(e) => {
                const newEntries = [...educationEntries];
                newEntries[index].year = e.target.value;
                setEducationEntries(newEntries);
              }} />
            </div>
          ))}
          <button type="button" onClick={addEducationEntry} className="bg-blue-500 text-white px-4 py-2 rounded">Add More Education</button>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Work Experience</h4>
          {workEntries.map((entry, index) => (
            <div key={index} className="space-y-4 mb-4">
              <input type="text" className="border p-2 rounded w-full" placeholder="Job Title" required value={entry.jobTitle} onChange={(e) => {
                const newEntries = [...workEntries];
                newEntries[index].jobTitle = e.target.value;
                setWorkEntries(newEntries);
              }} />
              <input type="text" className="border p-2 rounded w-full" placeholder="Company" required value={entry.company} onChange={(e) => {
                const newEntries = [...workEntries];
                newEntries[index].company = e.target.value;
                setWorkEntries(newEntries);
              }} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="date" className="border p-2 rounded w-full" required value={entry.startDate} onChange={(e) => {
                  const newEntries = [...workEntries];
                  newEntries[index].startDate = e.target.value;
                  setWorkEntries(newEntries);
                }} />
                <input type="date" className="border p-2 rounded w-full" value={entry.endDate} onChange={(e) => {
                  const newEntries = [...workEntries];
                  newEntries[index].endDate = e.target.value;
                  setWorkEntries(newEntries);
                }} />
              </div>
              <textarea className="border p-2 rounded w-full" rows="4" placeholder="Job Description" required value={entry.description} onChange={(e) => {
                const newEntries = [...workEntries];
                newEntries[index].description = e.target.value;
                setWorkEntries(newEntries);
              }} />
            </div>
          ))}
          <button type="button" onClick={addWorkExperienceEntry} className="bg-blue-500 text-white px-4 py-2 rounded">Add Work Experience</button>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Migration Details</h4>
          <input type="text" className="border p-2 rounded w-full mb-4" placeholder="State of Origin" required value={stateOfOrigin} onChange={(e) => setStateOfOrigin(e.target.value)} />
          <input type="text" className="border p-2 rounded w-full mb-4" placeholder="Languages Known" required value={languagesKnown} onChange={(e) => setLanguagesKnown(e.target.value)} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select className="border p-2 rounded w-full" required value={migratingToState} onChange={(e) => setMigratingToState(e.target.value)}>
              <option value="">--Select a state--</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Kerala">Kerala</option>
              <option value="Maharashtra">Maharashtra</option>
            </select>
            <input type="text" className="border p-2 rounded w-full" placeholder="City" required value={migratingToCity} onChange={(e) => setMigratingToCity(e.target.value)} />
          </div>
          <input type="text" className="border p-2 rounded w-full mt-4" placeholder="Pin Code" maxLength={7} required value={pinCode} onChange={(e) => setPinCode(e.target.value)} />
          <input type="date" className="border p-2 rounded w-full mt-4" required value={migrationDate} onChange={(e) => setMigrationDate(e.target.value)} />
          <textarea className="border p-2 rounded w-full mt-4" rows="3" placeholder="Reason for Migration" required value={migrationReason} onChange={(e) => setMigrationReason(e.target.value)} />
        </div>

        <div className="flex justify-center mt-6">
          <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded mr-4">Register</button>
          <button type="button" className="bg-red-600 text-white px-6 py-2 rounded">Cancel</button>
        </div>
      </form>
    </div>
  );
}
