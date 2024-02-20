import React, { useState, useEffect } from "react";
import axios from "axios";
import { CarbonEmissionModel } from "../../../../../../shared/models/admin/emissions";

const AdminValuesForm = () => {
  // State
  const [counter, setCounter] = useState(0);
  const [emissionsList, setEmissionsList] = useState([]);
  const [emissionsCategoriesList, setEmissionsCategoriesList] = useState([]);
  const [emissionsActivitiesList, setEmissionsActivitiesList] = useState([]);
  const [emissionsTypesList, setEmissionsTypesList] = useState([]);
  // Emissions
  useEffect(() => {
    const fetchEmissionsData = async () => {
      try {
        const response = await axios.get("/api/v1/admin/emissions/");
        setEmissionsList(response.data.data); // Update state before re-render
        console.log("Emissions data in setEmissionsList:", emissionsList);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchEmissionsData();
  }, [counter]);

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
  }, [counter]);

  // Emissions Activity
  useEffect(() => {
    const fetchEmissionsActivityData = async () => {
      try {
        const response = await axios.get("/api/v1/admin/emissions/activity");
        setEmissionsActivitiesList(response.data.data); // Update state before re-render
        console.log(
          "Emissions data in emissionsActivitiesList:",
          emissionsCategoriesList,
        );
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchEmissionsActivityData();
  }, [counter]);

  // Types Activity
  useEffect(() => {
    const fetchEmissionsTypeData = async () => {
      try {
        const response = await axios.get("/api/v1/admin/emissions/type");
        setEmissionsTypesList(response.data.data); // Update state before re-render
        console.log(
          "Emissions data in emissionsTypesList:",
          emissionsCategoriesList,
        );
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchEmissionsTypeData();
  }, [counter]);

  const [formData, setFormData] = useState({
    scope: "",
    category: "",
    activity: "",
    type: "",
    units: "",
    value: "",
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

    // // Submit form data (replace with your API call or action)
    // console.log("Form data:", formData);

    try {
      const response = await axios.post("/api/v1/admin/emissions/", formData);
      setCounter(counter + 1);

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

  console.log(emissionsActivitiesList);

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-96 bg-blue-50 border border-black p-4 justify-center items-center m-2"
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
            {emissionsCategoriesList?.map((item: any, index: any) => {
              return (
                <option key={index} value={item.category}>
                  {item.category}
                </option>
              );
            })}
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
            {emissionsActivitiesList?.map((item: any, index: any) => {
              return (
                <option key={index} value={item.activity}>
                  {item.activity}
                </option>
              );
            })}
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
            {emissionsTypesList?.map((item: any, index: any) => {
              return (
                <option key={index} value={item.category}>
                  {item.type}
                </option>
              );
            })}
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

      {emissionsList
        ?.slice()
        .reverse()
        .map((item: any, index: number) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-2 bg-white shadow rounded p-4 border border-black w-2/3 hover:bg-gray-400 hover:text-white"
            >
              <h2 className="text-2xl font-bold text-gray-800 ">
                Scope : {item.scope}
              </h2>
              <div className="flex flex-col gap-1 text-gray-600">
                <p>Category: {item.category}</p>
                <p>Activity: {item.activity}</p>
                <p>Type: {item.type}</p>
                <p>Units: {item.units}</p>
                <p>
                  Value: {item.value} {item.units}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default AdminValuesForm;
