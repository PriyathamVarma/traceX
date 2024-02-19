import React, { useState } from "react";
import axios from "axios";

const AdminValuesForm = () => {
  const [formData, setFormData] = useState({
    scope: "",
    category: "",
    activity: "",
    type: "",
    units: "",
    value: "",
  });

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
      const response = await axios.post("/api/v1/admin/emissions/", formData);

      console.log("Response at sending emissions data \n", response);
      // router.push("/dashboard");
    } catch (err) {
      console.log("Error at sending emissions data data \n", err);
    }

    setFormData({
      scope: "",
      category: "",
      activity: "",
      type: "",
      units: "",
      value: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-1/2 bg-blue-50 border border-black p-4 justify-center items-center m-2"
    >
      <div className="mb-6">
        <label
          htmlFor="scope"
          className="block text-sm font-medium text-gray-700"
        >
          Scope
        </label>
        <select
          id="scope"
          name="scope"
          value={formData.scope}
          onChange={handleChange}
          className="block w-full border rounded-md p-2 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
          required
        >
          <option value="">Select Scope</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div className="mb-6">
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
          <option value="fuel">Fuel</option>
          <option value="bioenergy">Bioenergy</option>
          <option value="refrigerant">Refrigerant</option>
        </select>
      </div>
      <div className="mb-6">
        <label
          htmlFor="activity"
          className="block text-sm font-medium text-gray-700"
        >
          Activity
        </label>
        <select
          id="activity"
          name="activity"
          value={formData.activity}
          onChange={handleChange}
          className="block w-full border rounded-md p-2 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
          required
        >
          <option value="">Select Activity</option>
          <option value="gaseous fuels">Gaseous Fuels</option>
          <option value="liquid fuels">Liquid Fuels</option>
          <option value="solid fuels">Solid Fuels</option>
          <option value="biofuel">Biofuel</option>
        </select>
      </div>
      <div className="mb-6">
        <label
          htmlFor="type"
          className="block text-sm font-medium text-gray-700"
        >
          Type
        </label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="block w-full border rounded-md p-2 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
          required
        >
          <option value="">Select Type</option>
          <option value="Butane">Butane</option>
          <option value="CNG">CNG</option>
          <option value="LNG">LNG</option>
          <option value="LPG">LPG</option>
        </select>
      </div>
      <div className="mb-6">
        <label
          htmlFor="units"
          className="block text-sm font-medium text-gray-700"
        >
          Unit
        </label>
        <select
          id="units"
          name="units"
          value={formData.units}
          onChange={handleChange}
          className="block w-full border rounded-md p-2 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
          required
        >
          "tonnes", "litres", "kWh (Net CV)", "kWh (Gross CV)", "kg", "litres",
          "GJ", "km", "miles", "tonee.km",
          <option value="">Select Unit</option>
          <option value="tonnes">Tonnes</option>
          <option value="litres">Litres</option>
          <option value="kWh (Net CV)">kWh (Net CV)</option>
          <option value="kWh(Gross CV)">kWh(Gross CV)</option>
          <option value="kg">KG</option>
          <option value="GJ">GJ</option>
          <option value="km">km</option>
          <option value="miles">miles</option>
          <option value="tonee.km">tonee.km</option>
        </select>
      </div>
      <div className="mb-6">
        <label
          htmlFor="value"
          className="block text-sm font-medium text-gray-700"
        >
          Value
        </label>
        <input
          type="number"
          id="value"
          name="value"
          value={formData.value}
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
  );
};

export default AdminValuesForm;
