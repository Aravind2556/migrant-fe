import React, { useEffect, useState } from 'react';

const MedicalSchemes = () => {
    const [medicalSchemes, setMedicalSchemes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMedicalSchemes = async () => {
            setLoading(true);
            try {
                // Static data – later you can fetch from backend if needed
                const data = [
                    {
                        name: "Ayushman Bharat Yojana (PM-JAY)",
                        description: "Free health insurance coverage up to ₹5 lakh per family per year for secondary and tertiary care hospitalization.",
                        link: "https://pmjay.gov.in/"
                    },
                    {
                        name: "E-Sanjeevani",
                        description: "Free online health consultation with doctors via telemedicine.",
                        link: "https://esanjeevani.in/"
                    },
                    {
                        name: "Pradhan Mantri Garib Kalyan Package (PMGKP)",
                        description: "Insurance cover for health workers fighting COVID-19.",
                        link: "https://www.pmjay.gov.in/pmgkp"
                    },
                    {
                        name: "Rashtriya Arogya Nidhi (RAN)",
                        description: "Financial assistance to poor patients suffering from life-threatening diseases for treatment in government hospitals.",
                        link: "https://main.mohfw.gov.in/major-programmes/other-national-health-programmes/ran"
                    },
                    {
                        name: "Janani Shishu Suraksha Karyakram (JSSK)",
                        description: "Free delivery services and healthcare for pregnant women and newborns in public health facilities.",
                        link: "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=842&lid=309"
                    },
                    {
                        name: "National Health Mission (NHM)",
                        description: "Supports rural and urban healthcare systems with funding, especially for women, children, and elderly.",
                        link: "https://nhm.gov.in/"
                    },
                    {
                        name: "Pradhan Mantri Swasthya Suraksha Yojana (PMSSY)",
                        description: "Improves affordable healthcare by setting up AIIMS-like institutions and upgrading existing hospitals.",
                        link: "https://main.mohfw.gov.in/PMSSY"
                    },
                    {
                        name: "Central Government Health Scheme (CGHS)",
                        description: "Comprehensive healthcare for central government employees and pensioners.",
                        link: "https://cghs.gov.in/"
                    },
                    {
                        name: "Bal Sakha Yojana",
                        description: "Free healthcare and check-ups for newborns up to 1 year, implemented in states like Gujarat.",
                        link: "https://gujhealth.gujarat.gov.in/bal-sakha-yojana.htm"
                    },
                    {
                        name: "Nikshay Poshan Yojana",
                        description: "Nutritional support of ₹500 per month for TB patients undergoing treatment.",
                        link: "https://www.nhp.gov.in/Nikshay-Poshan-Yojna_pg"
                    },
                    {
                        name: "Mukhyamantri Amrutam Yojana",
                        description: "Health insurance for below poverty line (BPL) families in Gujarat up to ₹5 lakh.",
                        link: "https://www.magujarat.com/"
                    },
                    {
                        name: "State Illness Assistance Fund (SIAF)",
                        description: "Financial assistance for treatment of serious ailments in state government hospitals.",
                        link: "https://main.mohfw.gov.in"
                    },
                    {
                        name: "Deen Dayal Swasthya Seva Yojana (Goa)",
                        description: "Health insurance up to ₹2.5 lakh per family in Goa.",
                        link: "https://goaonline.gov.in"
                    },
                    {
                        name: "Mission Indradhanush",
                        description: "Free immunization for children and pregnant women.",
                        link: "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=1036&lid=597"
                    }
                ];
                

                setMedicalSchemes(data);
            } catch (error) {
                console.error("Error fetching medical schemes:", error);
                setMedicalSchemes([{ name: "Error", description: "Unable to load schemes. Try again." }]);
            }
            setLoading(false);
        };

        fetchMedicalSchemes();
    }, []);

    return (
        <div className="bg-white shadow rounded p-6 mt-6 min-h-[75vh]">
            <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">Medical Schemes for Migrants</h2>

            {loading ? (
                <p className="text-gray-500 text-center">Loading medical schemes...</p>
            ) : (
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {medicalSchemes.map((scheme, idx) => (
                        <div key={idx} className="bg-blue-100 border border-blue-300 rounded-xl shadow hover:shadow-md transition p-5 flex flex-col justify-between">
                            <div>
                                <h3 className="text-lg font-semibold text-blue-800 mb-2">{scheme.name}</h3>
                                <p className="text-sm text-gray-700 mb-4">{scheme.description}</p>
                            </div>
                            <a
                                href={scheme.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white bg-blue-600 hover:bg-blue-700 text-center py-2 rounded mt-auto"
                            >
                                Apply Now
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MedicalSchemes;


