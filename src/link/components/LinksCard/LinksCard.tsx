import type React from "react";
import LinkButton from "../LinkButton/LinkButton";

const LinksCard: React.FC = () => {
  return (
    <article className="flex p-10 gap-10 rounded-lg border-3 bg-[#ffffff1a] border-gray-100 shadow-lg shadow-gray-100/30">
      <div className="flex flex-col gap-5 items-center max-w-2xs">
        <img
          className="rounded-full shadow-lg shadow-black-100/30 border-1 border-gray-100"
          src="/perfil.webp"
          alt="Alex Uribe profile photograph"
          height={200}
          width={200}
        />
        <div className="text-center text-white flex flex-col gap-1 border-b w-full pb-5">
          <h1 className=" text-3xl font-medium ">Alex Uribe</h1>
          <h2 className="text-xl font-medium">Full Stack Developer</h2>
          <span>Based in Barcelona</span>
        </div>
        <p className="flex flex-col gap-1 text-center max-w-lg text-white">
          MERN stack developer with a visual mind and architectural logic. I
          build clean, accessible code focused on testing and user experience.
        </p>
      </div>
      <div className="flex flex-col justify-center gap-7">
        <LinkButton
          text="Check my CV"
          iconUrl="/Read-Cv-Logo--Streamline-Phosphor.svg"
          link="/CV Alex Uribe.pdf"
        />
        <LinkButton
          text="Send me an email"
          iconUrl="/Mail--Streamline-Tabler.svg"
          link="mailto:alex5uribe@gmail.com"
        />
        <LinkButton
          text="More about me"
          iconUrl="/Linkedin--Streamline-Core-Remix.svg"
          link="https://www.linkedin.com/in/alex-uribe-crespo/"
        />
        <LinkButton
          text="Explore my repos"
          iconUrl="/Github--Streamline-Iconoir.svg"
          link="https://github.com/uribeAC"
        />
        <LinkButton
          text="Beyond the screen"
          link="https://www.goodreads.com/user/show/84064620-uribeac"
          iconUrl="/Goodreads-Logo--Streamline-Phosphor.svg"
        />
      </div>
    </article>
  );
};

export default LinksCard;
