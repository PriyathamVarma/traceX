"use client";
import axios from "axios";
import { useState } from "react";
import { useUser } from "../../../shared/context/userContext";
import Header from "../components/templates/header";

const ProviderPage = () => {
  const [status, setStatus] = useState("Submit");
  const { user } = useUser();
  const [formData, setFormData] = useState<any>({
    userId: (user as any)._id,
    userName: user?.name,
    role: "provider",
    email: "",
    from: "",
    to: "",
    status: "invited",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const response = await axios.post("/api/v1/email", {
        userId: formData.userId,
        userName: formData.userName,
        email: formData.email,
        from: formData.from,
        to: formData.to,
      });
      console.log(`Successful in sending to ${formData.email}`, response);
    } catch (err) {
      alert("Couldnt send information to provider");
      console.log("Error in sending to provider", err);
    }

    // Stroing provider information
    setStatus("Storing");
    console.log(formData);
    try {
      const response = await axios.post("/api/v1/user/provider/", {
        userId: formData.userId,
        userName: formData.userName,
        role: "provider",
        email: formData.email,
        from: formData.from,
        to: formData.to,
        status: "invited",
      });
      console.log(`Successful in adding provider information`, response);
    } catch (err) {
      alert("Couldnt add provider information");
      console.log("Error in adding provider information", err);
    }
    setStatus("Submit");
  };

  return (
    <div className="flex flex-col h-screen bg-green-100 relative space-y-2">
      <Header />

      <div className="py-8 px-24 flex flex-col space-y-2">
        <hr />
        <h1 className="font-extrabold text-lg flex justify-center items-center">
          Invite Provider
        </h1>

        <hr />
        <div className=" bg-background1 rounded-md flex items-center justify-center">
          <form
            className="w-2/3 flex flex-col space-y-4 p-6 rounded-md "
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col w-full">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 flex-1"
                required
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="from">From</label>
              <input
                type="date"
                id="from"
                name="from"
                value={formData.from}
                onChange={handleChange}
                className="rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 flex-1"
                required
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="to">To</label>
              <input
                type="date"
                id="to"
                name="to"
                value={formData.to}
                onChange={handleChange}
                className="rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 flex-1"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-background4 px-6 text-xs py-2 rounded-full"
              >
                {status}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProviderPage;
