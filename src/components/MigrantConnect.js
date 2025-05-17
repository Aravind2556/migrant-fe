import React from "react";
import Migrent from '../assets/Migrants imagery.jpg'

const MigrantConnect = () => {


  const handleRegister = () => {
   
      window.location.href = '/MigrantRegistrationForm'


  }


  return (
    <div className="font-sans">

    <div className="relative">
        <img src={Migrent} alt="loading.." className="w-full h-[700px]" ></img>
    </div>


      {/* Hero Section */}
      <section className="bg-cover bg-center h-[80vh] flex items-center justify-start px-8  absolute inset-0  ">
        <div className="text-white border-2 border-gray-400 p-5 rounded">
          <h1 className="text-4xl font-bold mb-4">migrant connect</h1>
          <p className="text-lg mb-6">Connecting Workers to Opportunities, Support And Services</p>
          <button onClick={handleRegister} className="bg-gray-900 text-white px-6 py-2 text-lg rounded shadow inline-block">Register Now</button>
        </div>
      </section>

      {/* What We Do */}
      <div className="py-12 bg-white">
        <h2 className="text-center text-3xl font-semibold mb-10">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-screen-xl mx-auto px-4">
          {[
            {
              title: "Streamlined Registration",
              desc: "We simplify the registration process for migrant workers, ensuring they are tracked and supported effectively."
            },
            {
              title: "Unique ID System",
              desc: "Each worker is assigned a unique ID, enabling accurate data management, identification, and tracking of movement."
            },
            {
              title: "Support Services",
              desc: "We connect workers to healthcare, legal aid, grievance redressal, and job opportunities, improving their quality of life."
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded shadow p-6 text-center hover:shadow-lg">
              <h5 className="text-xl font-bold mb-3">{item.title}</h5>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About Us */}
      <section id="about-us" className="bg-gray-50 py-12 px-4">
        <div className="max-w-screen-md mx-auto">
          <h2 className="text-center text-3xl font-bold mb-6">About Us</h2>
          <p className="mb-4">
            At migrant connect, we envision a world where every migrant worker has access to the opportunities,
            resources, and support they deserve. Operating at the heart of Tamil Nadu, we are a dedicated platform
            committed to empowering migrant laborers by addressing the key challenges they face—ranging from the lack
            of documentation to accessing welfare schemes and ensuring employment security.
          </p>
          <h4 className="text-xl font-semibold mt-6 mb-2">What We Stand For</h4>
          <ul className="list-disc list-inside space-y-2">
            <li><span className="font-semibold">Empowerment</span>: Through streamlined registration and data tracking, we ensure every worker is accounted for and supported.</li>
            <li><span className="font-semibold">Opportunity</span>: We connect workers with job opportunities, providing them with paths to growth and success.</li>
            <li><span className="font-semibold">Support Services</span>: From healthcare access to legal aid and grievance redressal, migrant connect is a one-stop hub for comprehensive worker support.</li>
          </ul>
        </div>
      </section>

    </div>
  );
};

export default MigrantConnect;