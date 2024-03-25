import React, { useState, useEffect } from "react";
import axios from "axios";

export const EmissionsActivityForm = () => {
  // State

  const [formData, setFormData] = useState({
    activity: "",
    category: "",
  });

  const [emissionsCategoriesList, setEmissionsCategoriesList] = useState([]);

  // Emissions Category
  useEffect(() => {
    const fetchEmissionsCategoryData = async () => {
      try {
        const response = await axios.get("/api/v1/admin/emissions/category");
        setEmissionsCategoriesList(response.data.data); // Update state before re-render
        console.log(
          "Emissions data in emissionsCategoriesList:",
          emissionsCategoriesList,
        );
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchEmissionsCategoryData();
  }, []);

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
      console.log("Checkout");
      const response = await axios.post(
        "/api/v1/admin/emissions/activity/",
        formData,
      );

      console.log("Response at sending emissions activity data \n", response);
    } catch (err) {
      console.log("Error at sending emissions activity data \n", err);
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
            htmlFor="activity"
            className="block text-sm font-medium text-gray-700"
          >
            Activity
          </label>

          <input
            type="text"
            id="activity"
            name="activity"
            value={formData.activity}
            onChange={handleChange}
            className="block w-full border rounded-md p-2 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700"
        >
          Category
        </label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="block w-full border rounded-md p-2 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
          required
        >
          <option value="">Select Category</option>
          {emissionsCategoriesList?.map((item: any, index: any) => {
            return (
              <option key={index} value={item.category}>
                {item.category}
              </option>
            );
          })}
        </select>

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
