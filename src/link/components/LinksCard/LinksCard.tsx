import type React from "react";
import {
  curriculumLink,
  emailLink,
  githubLink,
  goodreadsLink,
  linkedinLink,
} from "../../data/links";
import LinkProfile from "../LinkProfile/LinkProfile";
import { alexUribeProfile } from "../../data/profile";
import LinksHolder from "../LinksHolder/LinksHolder";

const LinksCard: React.FC = () => {
  return (
    <article className="flex p-10 gap-10 rounded-lg border-3 bg-[#ffffff1a] border-gray-100 shadow-lg shadow-gray-100/30">
      <LinkProfile profile={alexUribeProfile} />
      <LinksHolder
        firstLink={curriculumLink}
        secondLink={emailLink}
        thirdLink={linkedinLink}
        fourthLink={githubLink}
        fifthLink={goodreadsLink}
      />
    </article>
  );
};

export default LinksCard;
