import React, { useState } from 'react'

const ProfileForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        password: "",
        role: "User",
        status: "Active",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted: ", formData);
      };
  return (
    <div className="bg-white max-w-full mx-auto mt-10 p-6">
    <h2 className="text-2xl font-bold mb-4 text-blue-600">Profile Form</h2>
    <div className="my-4">
        <form onSubmit={handleSubmit} className="space-y-6">
        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                />
            </div>

            {/* Phone Number */}
            <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
                type="number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
            />
            </div>

            {/* Email */}
            <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
            />
            </div>

            {/* Password */}
            <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
            />
            </div>

            {/* Role */}
            <div>
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
                <option value="Admin">Admin</option>
                <option value="Editor">Editor</option>
                <option value="User">User</option>
            </select>
            </div>

            {/* Status */}
            <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
            </select>
            </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center md:justify-end space-x-4">
            <button type="button" className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md shadow-sm hover:bg-gray-400"> Cancel </button>
            <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700"> Submit</button>
        </div>
        </form>
    </div>
</div>
  )
}

export default ProfileForm