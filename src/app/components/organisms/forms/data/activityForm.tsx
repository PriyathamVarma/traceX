import ComingSoon from "@/app/components/atoms/buttons/ComingSoon";
import axios from "axios";
import { useEffect, useState } from "react";

const ActivityForm = (props: any) => {
  const data = props.data;

  console.log("Props data in activity form \n", data);

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
    <div className=" bg-background1 rounded-md flex items-center justify-center">
      <form className="w-2/3 flex flex-col space-y-4 p-6 rounded-md ">
        <div className="flex flex-col w-full">
          <label
            htmlFor="fuelType"
            className="text-sm font-medium text-gray-700"
          >
            Fuel Type for {data.activity}
          </label>
          <select
            id="fuelType"
            className="rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-background3"
          >
            <option value="">Select Fuel Type</option>
            {emissionsTypesList?.map((item: any, index: any) => (
              <option key={index} value={item.category}>
                {item.type}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col  w-full">
          <p>Select time frame</p>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <label>From</label>
              <input
                type="date"
                value={startDate}
                className="rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 flex-1"
                placeholder="Start Date (DD/MM/YYYY)"
              />
            </div>
            <div className="flex flex-col">
              <label>To</label>
              <input
                type="date"
                value={endDate}
                className=" rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 flex-1"
                placeholder="End Date (DD/MM/YYYY)"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="units" className="text-sm font-medium text-gray-700">
            Units
          </label>
          <select
            id="units"
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
        <div className="w-full flex flex-col">
          <label
            htmlFor="consumption"
            className="text-sm font-medium text-gray-700"
          >
            Total energy consumption of your business
          </label>
          <input
            type="number"
            id="consumption"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Enter value"
          />
        </div>
        <div className="w-full flex flex-col">
          <label className="text-sm font-medium text-gray-700">
            Energy consumption of requester by % of your total consumption
            <span className="text-red-500 ml-1">*</span>
          </label>
          <div className="flex flex-row space-x-1">
            <input
              type="percent"
              className="border border-gray-300 rounded-md px-2 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 flex-1"
              placeholder="Percentage %"
              readOnly
            />
            <input
              type="unitValue"
              className="border border-gray-300 rounded-md px-2 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 flex-1"
              placeholder="Enter value"
              readOnly
            />
          </div>
        </div>
        <div className="w-full flex flex-col">
          <label
            htmlFor="methodolgy"
            className="text-sm font-medium text-gray-700"
          >
            Methodology
          </label>
          <textarea
            id="methodolgy"
            rows={4}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Enter Methodology"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="bg-background4 px-6 text-xs py-2 rounded-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ActivityForm;
