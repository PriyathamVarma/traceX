"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "../components/templates/header";

const ScopePage = () => {
  const [emissionsCategoriesList, setEmissionsCategoriesList] = useState<any>(
    [],
  );

  const [scope, setScope] = useState("1");

  // Filter function
  const filterEmissionsCategories = (categories: any[], scopeValue: string) => {
    return categories.filter((category) => category.scope === scopeValue);
  };

  // Emissions Category data fetching
  useEffect(() => {
    const fetchEmissionsCategoryData = async () => {
      try {
        const response = await axios.get("/api/v1/admin/emissions/category");
        setEmissionsCategoriesList(response.data.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchEmissionsCategoryData();
  }, []); // Fetch data only once initially

  // Scope button click handler
  const clickHandler = (e: any) => {
    setScope(e);
  };

  return (
    <div className="flex flex-col h-screen bg-green-100 relative space-y-2">
      <Header />

      <div className="py-8 px-24 flex flex-col space-y-2">
        <hr />
        <h1 className="font-extrabold text-lg flex justify-center items-center">
          Scope {scope}
        </h1>
        <hr />
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={() => clickHandler("1")}
            className="bg-background4 px-6 py-1 text-sm rounded-full hover:bg-background3 hover:text-white"
          >
            Scope 1
          </button>
          <button
            onClick={() => clickHandler("2")}
            className="bg-white border border-black px-6 py-1 text-sm rounded-full hover:bg-background3 hover:text-white"
          >
            Scope 2
          </button>
          <button
            onClick={() => clickHandler("3")}
            className="bg-white border border-black px-6 py-1 text-sm rounded-full hover:bg-background3 hover:text-white"
          >
            Scope 3
          </button>
        </div>
        <hr />
        <div className="">
          {filterEmissionsCategories(emissionsCategoriesList, scope).map(
            (item: any, index: number) => {
              return (
                <>
                  <Link
                    href={`/activity?category=${item.category}&scope=${scope}`}
                    key={index}
                    className="bg-background2 text-black font-bold m-2 p-4 rounded-md flex flex-row justify-between"
                  >
                    <p>{item.category}</p>
                    <p>{">"}</p>
                  </Link>
                </>
              );
            },
          )}
        </div>
      </div>
    </div>
  );
};

export default ScopePage;
