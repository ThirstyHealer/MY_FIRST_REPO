import { useState } from "react";

const ControlledForm = () => {
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  const handleonchange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleonsubmit = (e) => {
    e.preventDefault();
    console.log("email:", fields.email);
    console.log("password:", fields.password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleonsubmit} className="space-y-4">
          <input
            value={fields.email}
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleonchange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            value={fields.password}
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleonchange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default ControlledForm;
