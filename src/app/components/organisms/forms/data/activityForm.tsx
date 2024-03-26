import axios from "axios";
import { useEffect, useState } from "react";

const ActivityForm = (props: any) => {
  const data = props;

  const [emissionsTypesList, setEmissionsTypesList] = useState([]);

  const [fuelType, setFuelType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [unit, setUnit] = useState("");
  const [totalConsumption, setTotalConsumption] = useState("");
  const [consumptionPercentage, setConsumptionPercentage] = useState("");

  // Types Activity
  useEffect(() => {
    const fetchEmissionsTypeData = async () => {
      try {
        const response = await axios.get("/api/v1/admin/emissions/emtypes");
        setEmissionsTypesList(response.data.data); // Update state before re-render
        console.log(
          "Emissions data in emissionsTypesList:",
          emissionsTypesList,
        );
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchEmissionsTypeData();
  }, []);

  // Form handler
  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Form submission logic here
    console.log("Form submitted:", {
      fuelType,
      startDate,
      endDate,
      unit,
      totalConsumption,
      consumptionPercentage,
    });
    // You can make an API call to submit the data to your backend here
  };

  return (
    <form className="border border-black rounded-md px-8 py-2">
      <div className="">
        <select
          value=""
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option value="">Select Fuel Type</option>

          {emissionsTypesList?.map((item: any, index: any) => {
            return (
              <option key={index} value={item.category}>
                {item.type}
              </option>
            );
          })}
        </select>
      </div>
      <div className=" flex flex-row justify-between">
        <input
          type="date"
          value={startDate}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Start Date (DD/MM/YYYY)"
        />
        <input
          type="date"
          value={endDate}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="End Date (DD/MM/YYYY)"
        />
      </div>

      <div className="w-full">
        <label
          htmlFor="units"
          className="block text-sm font-medium text-gray-700"
        >
          Units
        </label>
        <select
          id="units"
          name="units"
          value=""
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
      <div className="w-full">
        <label
          htmlFor="consumption"
          className="block text-sm font-medium text-gray-700"
        >
          Units
        </label>
        <input type="number" id="consumption" name="consumption" value="" />
      </div>
      <div className="w-full flex flex-col justify-between">
        <p>Energy consumption of requester by % of your total consumption</p>
        <div className="flex flex-row">
          <div>
            <label>From</label>
            <input
              type="percent"
              value=""
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Percentage %"
              readOnly
            />
          </div>
          <div>
            <label>By units</label>
            <input
              type="unitValue"
              value=""
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter value"
              readOnly
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col">
        <label>By units</label>
        <textarea
          id="methodolgy"
          rows="4"
          value=""
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Enter value"
          readOnly
        ></textarea>
      </div>
    </form>
  );
};

export default ActivityForm;
