import { useState } from 'react';
import { backendClient } from '../clients/backendClients.js';
import { useNavigate } from "react-router-dom";
function LoginPage() {
    const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await backendClient.post('/users/login', form);
      const { token, user } = res.data;

       console.log("Token:", token);
      console.log("User:", user);

      localStorage.setItem("fullapp-token", JSON.stringify(token));
      navigate("/Posts");
    } catch (err) {
      console.error(err);
      alert('Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className=""
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

        <input
          name="email"
          type="email"
          onChange={handleChange}
          placeholder="Email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Password"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
