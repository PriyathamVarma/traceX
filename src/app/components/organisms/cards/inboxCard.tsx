import { MdOutlineEmail } from "react-icons/md";
import ComingSoon from "../../atoms/buttons/ComingSoon";

const InboxCard = () => {
  return (
    <div className="border bg-white p-2 px-8 flex flex-row justify-between rounded-md">
      <h1 className="flex flex-row items-center space-x-2">
        <MdOutlineEmail />
        <span>Inbox</span>
      </h1>
      <ComingSoon />
    </div>
  );
};

export default InboxCard;
