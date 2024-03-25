import Link from "next/link";

const ScopeTwoCard = () => {
  return (
    <div className=" bg-background1 rounded-md flex flex-col w-auto px-8 py-4">
      <div className="flex flex-row justify-between">
        <div className="w-2/3">
          <h1 className="text-background6 font-extrabold">Scope 1</h1>
          <p>Not started yet</p>
        </div>
        <div className="w-1/3  flex space-y-2 items-center justify-center">
          <Link
            href="/scope1"
            className="bg-background4 px-12 text-xs py-1  rounded-full hover:bg-background3 hover:text-white"
          >
            Begin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScopeTwoCard;
