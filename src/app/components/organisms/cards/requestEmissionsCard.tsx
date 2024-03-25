const RequestEmissionsCard = () => {
  return (
    <div className=" bg-background1 rounded-md h-20 min-w-96 p-2 w-auto px-8">
      <div className="flex flex-row">
        <div className="w-2/3">
          <h1 className="text-md font-extrabold">
            Request Emissions Data from your Suppliers
          </h1>
        </div>
        <div className="w-1/3 space-y-2">
          <button className="bg-white border border-black px-6 py-1 text-sm rounded-full hover:bg-background3 hover:text-white">
            Email data provider
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestEmissionsCard;
