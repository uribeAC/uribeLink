import type React from "react";
import LinkButton from "../LinkButton/LinkButton";
import {
  curriculumLink,
  emailLink,
  githubLink,
  goodreadsLink,
  linkedinLink,
} from "../../data/links";
import LinkProfile from "../LinkProfile/LinkProfile";
import { alexUribeProfile } from "../../data/profile";

const LinksCard: React.FC = () => {
  return (
    <article className="flex p-10 gap-10 rounded-lg border-3 bg-[#ffffff1a] border-gray-100 shadow-lg shadow-gray-100/30">
      <LinkProfile profile={alexUribeProfile} />
      <div className="flex flex-col justify-center gap-7">
        <LinkButton linkInfo={curriculumLink} />
        <LinkButton linkInfo={emailLink} />
        <LinkButton linkInfo={linkedinLink} />
        <LinkButton linkInfo={githubLink} />
        <LinkButton linkInfo={goodreadsLink} />
      </div>
    </article>
  );
};

export default LinksCard;
