import Link from "next/link";

export const BasicLink = (props: any) => {
  return (
    <Link
      href={props.link}
      className="px-4 py-2 bg-primary text-black rounded-md bg-white text-sm hover:bg-gray-50 "
    >
      {props.title}
    </Link>
  );
};
