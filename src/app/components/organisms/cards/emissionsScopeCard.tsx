import Link from "next/link";

const EmissionsScopeCard = () => {
  return (
    <div className="bg-white flex flex-col overflow-x-auto rounded-md h-48 p-2 px-8 space-y-1">
      <h1 className="font-bold">Emissions By Scope</h1>
      <div className="flex flex-row space-x-2">
        <div className="bg-blue-50 w-48 h-24 rounded-md flex items-center justify-center">
          Scope 1
        </div>
        <div className="bg-blue-50 w-48 h-24 rounded-md flex items-center justify-center">
          Scope 2
        </div>
        <div className="bg-blue-50 w-48 h-24 rounded-md flex items-center justify-center">
          <Link
            href="/provider"
            className="bg-white border border-black px-6 py-1 text-sm rounded-sm hover:bg-background3 hover:text-white"
          >
            Invite suppliers
          </Link>
        </div>
      </div>
      <hr />
      <button className="border border-gray-100 rounded-lg float-right text-xs w-1/3 p-2 -px-4 hover:bg-gray-50">
        Manage Account
      </button>
    </div>
  );
};

export default EmissionsScopeCard;
