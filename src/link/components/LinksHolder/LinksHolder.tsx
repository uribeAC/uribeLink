import type React from "react";
import LinkButton from "../LinkButton/LinkButton";
import type { Link } from "../../types";

interface LinksHolderProps {
  firstLink: Link;
  secondLink: Link;
  thirdLink: Link;
  fourthLink?: Link;
  fifthLink?: Link;
}

const LinksHolder: React.FC<LinksHolderProps> = ({
  firstLink,
  secondLink,
  thirdLink,
  fourthLink,
  fifthLink,
}) => {
  return (
    <div className="flex flex-col justify-center gap-7">
      <LinkButton linkInfo={firstLink} />
      <LinkButton linkInfo={secondLink} />
      <LinkButton linkInfo={thirdLink} />
      {fourthLink && <LinkButton linkInfo={fourthLink} />}
      {fifthLink && <LinkButton linkInfo={fifthLink} />}
    </div>
  );
};

export default LinksHolder;
