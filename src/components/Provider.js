import React, { createContext, useState, useEffect } from 'react';

export const Dcontext = createContext();

function Provider(props) {
    const [migrantInfo, setMigrantInfo] = useState(null);
    const [Auth, setAuth] = useState(null)
    const [Alljobs,setJobs]=useState(null)
    const [grievance, setGrievance]=useState(null)
    const [appliedJobs,setAppliedJobs]=useState(null)
    const [userInfo,SetUserInfo]=useState(null)

    console.log("userinfo",userInfo)

    console.log("check auth",Auth)
   

    const handleFetch = () => {
        fetch(`http://localhost:4001/fetch-migrant`, {
            method: 'GET',
            credentials: 'include',
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success === true) {
                    setMigrantInfo(data.data);
                } else {
                    setMigrantInfo(null);
                }
            })
            .catch((err) => {
                console.error('Fetch error:', err);
            });

        fetch(`http://localhost:4001/checkauth`, {
            method: "GET",
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === true) {
                    setAuth(data.user)
                }
                else {
                    setAuth(false)
                    console.log(data.messsage)
                }
            })
            .catch(err => {
                console.log("error fetching in checkauth", err)
              })


        fetch(`http://localhost:4001/fetch-jobs`, {
            method: "GET",
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === true) {
                    setJobs(data.data)
                }
                else {
                    console.log("no jobs")
                   
                }
            })
            .catch(err => {
                console.log("error fetching in checkauth", err)
            })





        fetch(`http://localhost:4001/fetch-grievance`, {
            method: "GET",
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === true) {
                    setGrievance(data.data)
                }
                else {
                    console.log("no jobs")

                }
            })
            .catch(err => {
                console.log("error fetching in checkauth", err)
                })
    


        fetch(`http://localhost:4001/fetch-Aplly-jobs`, {
            method: "GET",
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === true) {
                    setAppliedJobs(data.data)
                }
                else {
                    console.log("no jobs")

                }
            })
            .catch(err => {
                console.log("error fetching in checkauth", err)
                        })



        fetch(`http://localhost:4001/fetch-migrant-notification`, {
            method: "GET",
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === true) {
                SetUserInfo(data.data)
                }
                else {
                    console.log("no jobs")

                }
            })
            .catch(err => {
                console.log("error fetching in checkauth", err)
                                        })




        
    };


 

    useEffect(() => {
        
        handleFetch();
        const interval = setInterval(() => {
            handleFetch();
        }, 2000);

        return () => clearInterval(interval); // 🔁 Cleanup
    }, []);

    const data = {
        migrantInfo,
        refresh: handleFetch,
        Auth, setAuth, Alljobs,
        grievance, appliedJobs, userInfo
    };

    return (
        <Dcontext.Provider value={data}>
            {props.children}
        </Dcontext.Provider>
    );
}

export default Provider;

