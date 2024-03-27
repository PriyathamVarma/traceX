"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ActivityForm from "../components/organisms/forms/data/activityForm";
import Header from "../components/templates/header";

const ActivityPage = () => {
  const searchParams = useSearchParams();

  const category = searchParams.get("category");
  const scope = searchParams.get("scope");

  console.log(category);

  const [emissionsActivitiesList, setEmissionsActivitiesList] = useState<any>(
    [],
  );
  const [selectedActivity, setSelectedActivity] = useState<any>(null);

  const [year, setYear] = useState("2024");

  // Emissions Category data fetching
  useEffect(() => {
    const fetchEmissionsActivityData = async () => {
      try {
        const response = await axios.get("/api/v1/admin/emissions/activity");
        setEmissionsActivitiesList(response.data.data);
        console.log(response.data.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchEmissionsActivityData();
  }, []); // Fetch data only once initially

  // Scope button click handler
  const clickHandler = (e: any) => {
    setYear(e);
  };

  // Filter function (optional, if filtering on the frontend is desired)
  const filterActivitiesByCategory = (
    activities: any[],
    selectedCategory: string,
  ) => {
    return activities.filter(
      (activity) => activity.category === selectedCategory,
    );
  };

  // Function to handle click on activity
  const handleActivityClick = (activity: any) => {
    setSelectedActivity(selectedActivity === activity ? null : activity);
  };

  return (
    <div className="flex flex-col h-screen bg-green-100 relative space-y-2">
      <Header />

      <div className="py-8 px-24 flex flex-col space-y-2">
        <hr />
        <h1 className="font-extrabold text-lg flex justify-center items-center">
          {category} - Scope {scope}
        </h1>
        <hr />
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={() => clickHandler("2021")}
            className="bg-background4 px-6 py-1 text-sm rounded-full hover:bg-background3 hover:text-white"
          >
            2021
          </button>
          <button
            onClick={() => clickHandler("2022")}
            className="bg-white border border-black px-6 py-1 text-sm rounded-full hover:bg-background3 hover:text-white"
          >
            2022
          </button>
          <button
            onClick={() => clickHandler("2023")}
            className="bg-white border border-black px-6 py-1 text-sm rounded-full hover:bg-background3 hover:text-white"
          >
            2023
          </button>
          <button
            onClick={() => clickHandler("2024")}
            className="bg-white border border-black px-6 py-1 text-sm rounded-full hover:bg-background3 hover:text-white"
          >
            2024
          </button>
        </div>
        <hr />
        <div className="">
          {category && // Only render if category exists in URL params
            (emissionsActivitiesList.length > 0 ? (
              // Filter activities on frontend (optional)
              filterActivitiesByCategory(emissionsActivitiesList, category).map(
                (item: any, index: number) => {
                  return (
                    <>
                      <div
                        key={index}
                        onClick={() => handleActivityClick(item)}
                        className="bg-background2 text-black font-bold m-2 p-4 rounded-md flex flex-row justify-between"
                      >
                        <p>{item.activity}</p>
                        <p>{">"}</p>
                      </div>
                      {selectedActivity &&
                        selectedActivity._id === item._id && (
                          <ActivityForm data={item} />
                        )}
                    </>
                  );
                },
              )
            ) : (
              <p>No activities found for this category.</p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityPage;
