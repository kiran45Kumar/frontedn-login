import { useState, useEffect } from "react";
import { registeruser } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import "./register.css";
const Register = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    document.getElementById("dashboard_btn").style.display = "none";
  }, []);
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await registeruser(user);
      setMessage("Register Succesfull redirecting....");
      setTimeout(() => navigate("/login"), 4000);
      setIsError(false);
    } catch (err) {
      setMessage(err.message);
      setIsError(true);
      setLoading(false);
    }
  };
  return (
    <div>
        <div id="image"></div>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              id="name"
              value={user.name}
              placeholder="Name"
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              id="email"
              value={user.email}
              placeholder="Email"
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              name="password"
              id="password"
              value={user.password}
              placeholder="Password"
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button  disabled={loading} className="cursor-pointer w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
                {loading ? "Registering..." : "Register"}
            </button>
          </form>
          {loading && <div className="spinner p-2"></div>}
          {message && <p className={isError ? 'text-red-500':'text-green-500'}>{message}</p>}
        </div>
      </div>
    </div>
  );
};
export default Register;
