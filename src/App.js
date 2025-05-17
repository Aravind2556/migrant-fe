import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard";

import EmploymentTrackingForm from "./components/EmploymentTrackingForm";
import GrievanceRedressalForm from "./components/GrievanceRedressalForm";
import HealthcareAccessForm from "./components/HealthcareAccessForm";
import MigrantConnect from "./components/MigrantConnect";

import MigrantRegistrationForm from "./components/MigrantRegistrationForm";
import SuperadminDashboard from "./components/SuperadminDashboard";
import UserDashboard from "./components/UserDashboard ";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import LoginPage from "./components/LoginPage";
import { MigrantDetails } from "./components/MigrantDetails";
import { NotificationModal } from "./components/NotificationModal";
import AdminRegister from "./components/AdminRegister";
import { Dcontext } from "./components/Provider";
import GovtSchemes from "./components/GovtSchemes";
import { CompanyRegister } from "./components/CompanyRegister";
import { JobPosting } from "./components/JobPosting";
import { AllJobs } from "./components/AllJobs";
import { Findgrievance } from "./components/Findgrievance";
import { FetchJobsDashborad } from "./components/FetchJobsDashborad";
import { FetchRegisterJobs } from "./components/FetchRegisterJobs";
import { AppliedJobs } from "./components/AppliedJobs";
import { CompanyDashboard } from "./components/CompanyDashboard";
import { UpdatedProfile } from "./components/UpdatedProfile";




function App() {

  const { Auth } = useContext(Dcontext)

  console.log("auth",Auth)

  if (Auth === null) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <Header/>
    <Routes>
        <Route path='/' element={<MigrantConnect/> }></Route>
        <Route
          path='/loginpage'
          element={
            !Auth ? <LoginPage/>
              : Auth?.role === 'admin' ? <AdminDashboard />
                : Auth?.role === 'superadmin' ? <AdminRegister />
                  : Auth?.role === 'user' ? <UserDashboard/> 
                    : Auth?.role === 'company' ? <CompanyDashboard/> 
                      : <LoginPage/>
                    
          }
        />




      <Route path='/EmploymentTrackingForm' element={<EmploymentTrackingForm/>}></Route>
       <Route path='/GrievanceRedressalForm' element={<GrievanceRedressalForm/>}></Route>
       <Route path='/HealthcareAccessForm' element={<HealthcareAccessForm/>}></Route>
        <Route path="/AdminDashboard" element={<AdminDashboard />}></Route>
  
       <Route path='/adminregister' element={<AdminRegister/>}></Route>


        <Route path='/MigrantRegistrationForm' element={<MigrantRegistrationForm/>}></Route>
        <Route path='/migrant-details' element={<MigrantDetails/>}></Route>
        <Route path='/notifications' element={<NotificationModal />}></Route>
        <Route path='/SuperadminDashboard' element={<SuperadminDashboard/>}></Route>
        <Route path="/UserDashboard" element={<UserDashboard/>}></Route> 

        <Route path='/GovtSchemes' element={<GovtSchemes/>}></Route>
        <Route path='/companyRegister' element={<CompanyRegister/>}></Route>
        <Route path='/jobposting' element={<JobPosting/>}></Route>
        <Route path='/AllJobs' element={<AllJobs/>}></Route>
        <Route path='/fetch-grievance' element={<Findgrievance/>}></Route>
        <Route path='/fetch-jobs-dashborad' element={<FetchJobsDashborad/>}></Route>
        <Route path='/fetch-regiter-jobs' element={<FetchRegisterJobs/>}></Route>
        <Route path='/fetch-Applied-jobs' element={<AppliedJobs/>}></Route>
        <Route path='/create-job' element={<JobPosting/>}></Route>
        <Route path='/update-migrant' element={<UpdatedProfile/>}></Route>
        <Route path='/NotificationModal' element={<NotificationModal/>}></Route>
        
       
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
