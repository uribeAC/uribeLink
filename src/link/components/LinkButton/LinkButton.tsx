import type React from "react";

interface LinkButtonProps {
  text: string;
  iconUrl: string;
  link: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ text, iconUrl, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="flex justify-between items-center min-w-[250px] text-lg text-white px-4 py-2 rounded-xl border-2 border-gray-100 shadow-lg hover:shadow-gray-100/30 transform transition delay-50 duration-400 ease-in-out hover:scale-110 hover:bg-indigo-500"
    >
      {text}
      <img src={iconUrl} alt="" aria-hidden />
    </a>
  );
};

export default LinkButton;
