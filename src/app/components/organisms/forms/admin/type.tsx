import React, { useState, useEffect } from "react";
import axios from "axios";

export const EmissionsTypeForm = () => {
  // State

  const [formData, setFormData] = useState({
    type: "",
  });

  // Methods
  const handleChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // Submit form data (replace with your API call or action)
    console.log("Form data:", formData);

    try {
      const response = await axios.post(
        "/api/v1/admin/emissions/emtypes/",
        formData,
      );

      console.log("Response at sending emissions type data \n", response);
    } catch (err) {
      console.log("Error at sending emissions type data \n", err);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className=" bg-blue-50 border border-black p-4 justify-center items-center m-2"
      >
        <div className="mb-6">
          <label
            htmlFor="type"
            className="block text-sm font-medium text-gray-700"
          >
            Type
          </label>

          <input
            type="text"
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="block w-full border rounded-md p-2 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 mt-6 bg-indigo-500 text-white rounded-md hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
