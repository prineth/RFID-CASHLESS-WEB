import React from 'react';

const Signup= ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Signup Form</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name:</label>
            <input type="text" name="name" required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email:</label>
            <input type="email" name="email" required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password:</label>
            <input type="password" name="password" required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-2 text-gray-500 hover:text-gray-700">Cancel</button>
            <button type="submit" className="bg-purple-500 text-white rounded-md px-4 py-2">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;