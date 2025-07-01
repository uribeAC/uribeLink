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
      className="flex min-w-1 bg-[#0A82BE] text-white px-2 py-1 rounded-sm transform transition delay-150 duration-300 ease-in-out hover:scale-110"
    >
      <span>{text}</span>
      <img src={iconUrl} alt="" aria-hidden />
    </a>
  );
};

export default LinkButton;
