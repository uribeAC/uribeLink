import type React from "react";
import type { Profile } from "../../types";

interface LinkProfileProps {
  profile: Profile;
}

const LinkProfile: React.FC<LinkProfileProps> = ({
  profile: { name, profileUrl, profession, location, description },
}) => {
  return (
    <div className="flex flex-col gap-5 items-center max-w-2xs">
      <img
        className="rounded-full shadow-lg shadow-black-100/30 border-1 border-gray-100"
        src={profileUrl}
        alt={`${name} profile photography`}
        height={200}
        width={200}
      />
      <div className="text-center text-white flex flex-col gap-1 border-b w-full pb-5">
        <h1 className=" text-3xl font-medium ">{name}</h1>
        <h2 className="text-xl font-medium">{profession}</h2>
        <span>Based in {location}</span>
      </div>
      <p className="flex flex-col gap-1 text-center max-w-lg text-white">
        {description}
      </p>
    </div>
  );
};

export default LinkProfile;
