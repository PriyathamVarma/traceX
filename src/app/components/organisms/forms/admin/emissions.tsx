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

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/api/v1/admin/emissions?page=${currentPage}`,
        );
        setEmissionsList(response.data.data);
      } catch (error) {
        console.error("Error fetching emissions:", error);
      }
    };

    fetchData();
  }, [currentPage, counter]);

  // Pagination functions
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  // Render pagination buttons
  const renderPagination = () => (
    <div className="flex items-center justify-center mt-4 bg-gray-50 border border-black p-2">
      <button
        onClick={prevPage}
        disabled={currentPage === 1}
        className={`mr-2 px-4 py-2 rounded-lg bg-gray-200 ${
          currentPage === 1 && "cursor-not-allowed"
        }`}
      >
        Previous
      </button>
      <span className="text-gray-600 text-lg mx-4">Page {currentPage}</span>
      <button
        onClick={nextPage}
        className="ml-2 px-4 py-2 rounded-lg bg-gray-200"
      >
        Next
      </button>
    </div>
  );

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
        const response = await axios.get("/api/v1/admin/emissions/emtypes");
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

  const deleteField = async (id: any) => {
    console.log(id);
    try {
      const response = await axios.delete(`/api/v1/admin/emissions/?id=${id}`);
      setCounter(counter + 1);

      console.log("Response at deleting emissions data \n", response);
      // router.push("/dashboard");
    } catch (err) {
      console.log("Error at deleting emissions data data \n", err);
    }
  };

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
            <option value="kWh">kWh</option>
            <option value="kWh (Net CV)">kWh Net CV</option>
            <option value="kWh (Gross CV)">kWh Gross CV</option>
            <option value="kg">KG</option>
            <option value="GJ">GJ</option>
            <option value="km">km</option>
            <option value="miles">miles</option>
            <option value="tonee.km">tonee.km</option>
            <option value="cubic metres">cubic metres</option>
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
      {/*Table*/}
      {/* Pagination */}
      {renderPagination()}
      <div className="bg-blue-50">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 font-bold">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Scope
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Category
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Activity
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Type
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Units
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Value
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="bg-green-50 divide-y divide-gray-200">
            {emissionsList.map((item: any, index: number) => (
              <tr key={index} className="hover:bg-blue-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {item.scope}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.activity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.units}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.value} {item.units}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button
                    className="bg-red-100 p-2"
                    onClick={() => deleteField(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminValuesForm;
