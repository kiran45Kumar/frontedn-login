import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    useEffect(()=>{
        const storedUser = localStorage.getItem("user");
        if(storedUser){
            setUser(JSON.parse(storedUser))
            const navbar = document.getElementById('navbar');
            if (navbar) navbar.style.display = 'none'
        }
        else{
            navigate("/login");
        }
    }, [navigate])
    const handleLogout = ()=>{
        localStorage.removeItem("user");
        navigate("/login");
    }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome, {user?.name || 'User'}!</h2>
        <p className="text-gray-600">Email: {user?.email}</p>
        <button 
          onClick={handleLogout} 
          className="cursor-pointer mt-6 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard
