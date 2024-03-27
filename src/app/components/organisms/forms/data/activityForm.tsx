import ComingSoon from "@/app/components/atoms/buttons/ComingSoon";
import axios from "axios";
import { useEffect, useState } from "react";
import IDataByProvider from "../../../../../../shared/interfaces/data/dataByProvider";
import { useUser } from "../../../../../../shared/context/userContext";

const ActivityForm = (props: any) => {
  const data = props.data;
  const scope = props.scope;

  const { user } = useUser();

  console.log("Props data in activity form \n", data);

  // State
  const [emissionsTypesList, setEmissionsTypesList] = useState([]);
  const [isProvider, setIsProvider] = useState(false);
  const [formData, setFormData] = useState<any>({
    userId: (user as any)._id,
    mainUserId: "",
    mainUserName: "",
    category: data?.category, // Fuel
    scope: scope, // 1 or 2 or 3
    activity: data?.activity, // Gaseous Fuel
    type: "", // Butane
    units: "", // tonnes
    totalConsumption: 0,
    methodology: "",
    verification: "self-verification", // self-verification
    from: "",
    to: "",
  });

  const [providerData, setProviderData] = useState<any>(null);

  // useEffect -> fetching provider details

  useEffect(() => {
    console.log(user);
    const fetchProvider = async () => {
      try {
        const response = await axios.get(
          `/api/v1/user/provider/?email=${user?.email}`,
        );

        console.log(
          "Succesful in getting provider details",
          response.data.data,
        );
        if (response.status === 200) {
          setIsProvider(true);
          setProviderData(response.data.data);
          formData.mainUserId = response.data.data.userId;
          formData.mainUserName = response.data.data.userName;
        }
      } catch (err) {
        console.log("Error in  getting provider details");
        setIsProvider(false);
      }
    };

    fetchProvider();
    console.log("Provider data \n", providerData);
  }, [isProvider]);

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

  // Form change handler
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form handler
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("Form data \n", formData);
  };

  return (
    <div className=" bg-background1 rounded-md flex items-center justify-center">
      <form
        className="w-2/3 flex flex-col space-y-4 p-6 rounded-md "
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col w-full">
          <label htmlFor="type" className="text-sm font-medium text-gray-700">
            Fuel Type for {data.activity}
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-background3"
            required
          >
            <option value="">Select Fuel Type</option>
            {emissionsTypesList?.map((item: any, index: any) => (
              <option key={index} value={item.type}>
                {item.type}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col  w-full">
          <p>Select time frame</p>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <label htmlFor="from">From</label>
              <input
                type="date"
                id="from"
                name="from"
                value={formData.from}
                onChange={handleChange}
                className="rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 flex-1"
                placeholder="End Date (DD/MM/YYYY)"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="to">To</label>
              <input
                type="date"
                id="to"
                name="to"
                value={formData.to}
                onChange={handleChange}
                className=" rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 flex-1"
                placeholder="End Date (DD/MM/YYYY)"
                required
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
        <div className="w-full flex flex-col">
          <label
            htmlFor="totalConsumption"
            className="text-sm font-medium text-gray-700"
          >
            Total energy consumption of your business
          </label>
          <input
            type="number"
            id="totalConsumption"
            name="totalConsumption"
            value={formData.totalConsumption}
            onChange={handleChange}
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
            name="methodology"
            value={formData.methodology}
            onChange={handleChange}
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
