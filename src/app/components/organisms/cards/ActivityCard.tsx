import { MdOutlineEmail } from "react-icons/md";
import ComingSoon from "../../atoms/buttons/ComingSoon";

const ActivityCard = () => {
  return (
    <div className="border bg-white p-2 px-8 flex flex-col space-y-2 justify-between rounded-md">
      <div className="flex flex-row justify-between">
        <h1 className="flex flex-row items-center space-x-2">Activity</h1>
        <ComingSoon />
      </div>
      <h1 className="text-md font-bold">
        Get notifications and updates on key files changes and collaborator
        comments
      </h1>
    </div>
  );
};

export default ActivityCard;
