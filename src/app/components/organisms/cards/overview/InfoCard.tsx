const InfoCard = () => {
  return (
    <div className=" bg-background1 rounded-md flex flex-col w-auto px-8 py-4">
      <div>
        <h1 className="text-background6 font-extrabold">
          New Request Received 2 Days ago
        </h1>
      </div>
      <div className="flex flex-row justify-between">
        <div className="w-2/3">
          <h1 className="text-lg font-extrabold">Jaguar</h1>
          <p className="text-sm">
            Jaguar requested help completing Scope 1 and Scope 2 Data in
            relation to your energy consumption associated with their product.
            They are interested in the emissions data between January 2023 and
            March 2023.{" "}
          </p>
        </div>
        <div className="w-1/3  flex space-y-2 items-center justify-center">
          <button className="bg-white border border-black px-6 py-1 text-sm rounded-full hover:bg-background3 hover:text-white">
            How it works
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
