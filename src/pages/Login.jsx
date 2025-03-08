import { useState } from "react";
import { loginuser } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import './register.css'
const Login = ()=>{
    const [user, setUser] = useState({email:"", password:""});
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const navigate = useNavigate();

    const handleChange = (e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try{
            const res = await loginuser(user);
            setMessage("Login Successful!");
            localStorage.setItem("user", JSON.stringify(res.user));
            setTimeout(()=>navigate('/dashboard'), 2000);
            setIsError(false)
        }
        catch(error){
            setMessage(error.message);
            setIsError(true)
            setLoading(false)
        }
    };
    return (
        <div>
<div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              id="email"
              value={user.email}
              placeholder="eg:johndoe@gmail.com"
              onChange={handleChange}
              required
              className="w-full p-2 border-1 rounded-md focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              name="password"
              id="password"
              value={user.password}
              placeholder="eg:JohnDoe@1234"
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />
            <button  disabled={loading} className="cursor-pointer w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
                {loading ? "Logging In..." : "Login"}
            </button>
          </form>
          {loading && <div className="spinner p-2"></div>}
          {message && <p className={isError ? 'text-red-500':'text-green-500'}>{message}</p>}
        </div>
      </div>
        </div>
    )
}
export default Login