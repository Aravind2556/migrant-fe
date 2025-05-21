import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginImage from '../assets/istockphoto-1379988910-612x612.jpg';


export default function LoginPage() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();



    const handleLogin = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('All fields are required');
            return;
        }

        setError('');

        fetch('http://localhost:4001/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === true) {

                    alert(data.message)

                    // if(data.user.role === 'superadmin'){
                    //     window.location.href ='/adminregister'
                    // }
                    // else if(data.user.role === 'admin'){
                    //     window.location.href ='/AdminDashboard'
                    // }
                    // else if (data.user.role === 'Migrant'){
                    //     window.location.href ='/UserDashboard'
                    // }

                    console.log("data",data)
                } else {
                    setError(data.message || "Invalid credentials");
                }
            })
            .catch(err => {
                console.error("Login failed:", err);
                setError("Server error. Please try again later.");
            });
    };


    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${loginImage})` }}
        >
            <div className="bg-white/30 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-6 text-white drop-shadow">Welcome Back</h2>

                {error && <p className="text-red-200 text-sm mb-4 text-center">{error}</p>}

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-white text-sm mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 rounded-xl bg-white/70 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="example@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-white text-sm mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 rounded-xl bg-white/70 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-300"
                    >
                        Login
                    </button>

                    <p className="underline text-gray-300" onClick={()=>window.location.href='/'}> Go to HomePage:</p>
                </form>
            </div>  
        </div>
    );
}
