import Link from "next/link";

const RequestCard = (props: any) => {
  const propsData = props.data;
  console.log("props data \n", propsData);

  const createdAtDate = new Date(propsData.createdAt);
  const fromDate = new Date(propsData.from);
  const toDate = new Date(propsData.to);

  const formattedCreatedAt = `${createdAtDate.toLocaleDateString("en-US", {
    month: "short",
  })} ${createdAtDate.getUTCDay()}`;
  const formattedFromDate = `${fromDate.toLocaleDateString("en-US", {
    month: "short",
  })} ${fromDate.getFullYear()}`;
  const formattedToDate = `${toDate.toLocaleDateString("en-US", {
    month: "short",
  })} ${toDate.getFullYear()}`;

  return (
    <div className=" bg-background1 rounded-md h-48 min-w-96 p-2 w-auto px-8">
      <div>
        <h1 className="text-background6 font-extrabold">
          New Request Received {formattedCreatedAt}
        </h1>
      </div>
      <div className="flex flex-row">
        <div className="w-2/3">
          <h1 className="text-lg font-extrabold">{propsData.userName}</h1>
          <p className="text-sm">
            {propsData.userName} requested help completing Scope 1 and Scope 2
            Data in relation to your energy consumption associated with their
            product. They are interested in the emissions data between{" "}
            {formattedFromDate} and {formattedToDate}.{" "}
          </p>
        </div>
        <div className="w-1/3 space-y-2">
          <Link
            href="/overview"
            className="bg-background4 px-6 py-1 text-sm rounded-full hover:bg-background3 hover:text-white"
          >
            Accept Request
          </Link>
          <button className="bg-white border border-black px-6 py-1 text-sm rounded-full hover:bg-background3 hover:text-white">
            Decline Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
