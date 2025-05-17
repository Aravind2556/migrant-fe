// import React, { useContext, useState } from 'react';
// import { Dcontext } from './Provider';
// import { FaBell } from 'react-icons/fa';
// import { NotificationModal } from './NotificationModal';
// import { useNavigate } from 'react-router-dom';

// export const Header = () => {
//   const { migrantInfo, Auth, setAuth } = useContext(Dcontext);
//   const [showModal, setShowModal] = useState(false);
//   const navigate = useNavigate()

//   const notificationCount = migrantInfo?.filter(m =>
//     m.status === 'Approved' ||
//     m.status === 'Rejected' ||
//     m.grivencestatus?.includes("Successfully") ||
//     m.grivencestatus?.includes("Pending")
//   ).length || 0;


//   const handleLogout = async () => {
//     try {
//       const res = await fetch("http://localhost:4001/logout", {
//         method: "GET",
//         credentials: "include"
//       });

//       const data = await res.json();

//       if (data.success) {
//         alert(data.message);
//         setAuth(null); // ❗ Reset the context
//         navigate("/loginpage"); // ❗ Redirect to login
//       } else {
//         alert("Logout failed: " + data.message);
//       }
//     } catch (error) {
//       console.error("Logout error:", error);
//     }
//   };

//   return (
//     <>
//       <nav className="bg-gray-900 sticky top-0 z-50 shadow">
//         <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//           <a className="text-white font-bold text-2xl" href="#">migrant connect</a>

//           <div className="hidden md:flex space-x-6 items-center">
//             <a href="#" className="text-white">Home</a>
//             <a href="#about-us" className="text-white">About Us</a>
//             <a href="#" className="text-white">Contact</a>
//             <a href="/loginpage" className="text-white" onClick={handleLogout}>{Auth === null ? 'Login' : 'Logout'}</a>

//             {/* Notification Icon */}
//             <button onClick={() => setShowModal(true)} className="relative text-white">
//               <FaBell className="text-xl" />
//               {notificationCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1.5">
//                   {notificationCount}
//                 </span>
//               )}
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Notification Modal */}
//       {showModal && <NotificationModal onClose={() => setShowModal(false)} />}
//     </>
//   );
// };





// import React, { useContext, useState } from 'react';
// import { Dcontext } from './Provider';
// import { FaBell } from 'react-icons/fa';
// import { NotificationModal } from './NotificationModal';
// import { useNavigate } from 'react-router-dom';

// export const Header = () => {
//   const { userInfo , Auth, setAuth } = useContext(Dcontext);
//   const [showModal, setShowModal] = useState(false);
//   const navigate = useNavigate()

//   const notificationCount = userInfo?.filter(m =>
//     m.status === 'Approved' ||
//     m.status === 'Rejected' ||
//     m.grivencestatus?.includes("Successfully") ||
//     m.grivencestatus?.includes("Pending")
//   ).length || 0;


//   const handleLogout = async () => {
//     try {
//       const res = await fetch("http://localhost:4001/logout", {
//         method: "GET",
//         credentials: "include"
//       });

//       const data = await res.json();

//       if (data.success) {
//         alert(data.message);
//         setAuth(null); // ❗ Reset the context
//         navigate("/loginpage"); // ❗ Redirect to login
//       } else {
//         alert("Logout failed: " + data.message);
//       }
//     } catch (error) {
//       console.error("Logout error:", error);
//     }
//   };

//   return (
//     <>
//       <nav className="bg-gray-900 sticky top-0 z-50 shadow">
//         <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//           <a className="text-white font-bold text-2xl" href="#">migrant connect</a>

//           <div className="hidden md:flex space-x-6 items-center">
//             <a href="#" className="text-white">Home</a>
//             <a href="#about-us" className="text-white">About Us</a>
//             <a href="#" className="text-white">Contact</a>
//             <a href="/loginpage" className="text-white" onClick={handleLogout}>{Auth === null ? 'Login' : 'Logout'}</a>

//             {/* Notification Icon */}
//             <button onClick={() => setShowModal(true)} className="relative text-white">
//               <FaBell className="text-xl" />
//               {notificationCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1.5">
//                   {notificationCount}
//                 </span>
//               )}
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Notification Modal */}
//       {showModal && <NotificationModal onClose={() => setShowModal(false)} />}
//     </>
//   );
// };











import React, { useContext, useState } from 'react';
import { Dcontext } from './Provider';
import { FaBell } from 'react-icons/fa';
import { NotificationModal } from './NotificationModal';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const { migrantInfo, Auth, setAuth } = useContext(Dcontext);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // ✅ Filter notifications based on role/email
  const filteredNotifications = migrantInfo?.filter(m =>
    (Auth?.role === 'admin' || Auth?.role === 'superadmin' || m.email === Auth?.email) &&
    (
      m.status === 'Approved' ||
      m.status === 'Rejected' ||
      m.grivencestatus?.includes("Successfully") ||
      m.grivencestatus?.includes("Pending")
    )
  ) || [];

  const notificationCount = filteredNotifications.length;

  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:4001/logout", {
        method: "GET",
        credentials: "include"
      });

      const data = await res.json();

      if (data.success) {
        alert(data.message);
        setAuth(null);
        navigate("/loginpage");
      } else {
        alert("Logout failed: " + data.message);
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <>
      <nav className="bg-gray-900 sticky top-0 z-50 shadow">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <a className="text-white font-bold text-2xl" href="#">migrant connect</a>

          <div className="hidden md:flex space-x-6 items-center">
            <a href="#" className="text-white">Home</a>
            <a href="#about-us" className="text-white">About Us</a>
            <a href="#" className="text-white">Contact</a>

            {/* Login/Logout */}
            <a href="/loginpage" className="text-white" onClick={handleLogout}>
              {Auth? 'logout' : 'login'}
            </a>

            {/* Notification Icon */}
            <button onClick={() => setShowModal(true)} className="relative text-white">
              <FaBell className="text-xl" />
              {notificationCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1.5">
                  {notificationCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Notification Modal with filtered data */}
      {showModal && <NotificationModal onClose={() => setShowModal(false)} data={filteredNotifications} />}
    </>
  );
};
