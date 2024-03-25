import ComingSoon from "@/app/components/atoms/buttons/ComingSoon";
import Link from "next/link";

const ScopeCard = (props: any) => {
  const data = props;

  console.log("Data", data);
  return (
    <div className=" bg-background1 rounded-md flex flex-col w-auto px-8 py-4">
      <div className="flex flex-row justify-between">
        <div className="w-2/3">
          <h1 className="text-background6 font-extrabold">{data.name}</h1>
          <p>Not started yet</p>
        </div>
        <div className="w-1/3  flex space-y-2 items-center justify-center">
          {data.status === "ready" ? (
            <Link
              href={`${data.link}`}
              className="bg-background4 px-12 text-xs py-1  rounded-full hover:bg-background3 hover:text-white"
            >
              Begin
            </Link>
          ) : (
            <ComingSoon />
          )}
        </div>
      </div>
    </div>
  );
};

export default ScopeCard;
