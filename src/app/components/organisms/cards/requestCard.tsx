const RequestCard = () => {
  return (
    <div className=" bg-background1 rounded-md h-48 min-w-96 p-2 w-auto px-8">
      <div>
        <h1 className="text-background6 font-extrabold">
          New Request Received 2 Days ago
        </h1>
      </div>
      <div className="flex flex-row">
        <div className="w-2/3">
          <h1>Jaguar</h1>
          <p>
            Jaguar requested help completing Scope 1 and Scope 2 Data in
            relation to your energy consumption associated with their product.
            They are interested in the emissions data between January 2023 and
            March 2023.{" "}
          </p>
        </div>
        <div className="w-1/3 space-y-2">
          <button className="bg-background4 px-6 py-1 text-sm rounded-full hover:bg-background3 hover:text-white">
            Accept Request
          </button>
          <button className="bg-white border border-black px-6 py-1 text-sm rounded-full hover:bg-background3 hover:text-white">
            Decline Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
