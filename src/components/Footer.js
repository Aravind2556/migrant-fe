import React from 'react'

export const Footer = () => {
  return (
    <div>
        
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h5 className="font-bold text-lg mb-2">About migrant connect</h5>
            <p className="text-sm">
              MigrantConnect is a web-based platform dedicated to improving the lives of migrant workers in Tamil Nadu
              by offering streamlined registration, tracking, and access to essential services like healthcare, jobs,
              and legal aid.
            </p>
          </div>
          <div>
            <h5 className="font-bold text-lg mb-2">Quick Links</h5>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#about-us" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Departments</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-lg mb-2">Contact Us</h5>
            <p className="text-sm">Email: <a href="mailto:support@migrantconnect.com" className="underline">support@migrantconnect.com</a></p>
            <p className="text-sm">Phone: +91 98765 43210</p>
            <p className="text-sm">Address: 123, Tamil Nadu, India</p>
          </div>
        </div>
        <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
          &copy; 2025 migrant connect. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
