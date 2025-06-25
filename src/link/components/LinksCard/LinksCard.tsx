import type React from "react";

const LinksCard: React.FC = () => {
  return (
    <article className="flex bg-stone-100 p-5 rounded-lg shadow-lg ">
      <div className="flex flex-col gap-5 items-center">
        <h1 className="text-center">Alex Uribe</h1>
        <img
          className="rounded-full"
          src="/perfil.webp"
          alt="Alex Uribe profile photograph"
          height={200}
          width={200}
        />
        <div className="flex flex-col gap-2 text-center max-w-lg">
          <span>Based in Barcelona</span>
          <h2>Full Stack Developer</h2>
          <p>
            MERN stack developer with a visual mind and architectural logic. I
            build clean, accessible code focused on testing and user experience.
          </p>
        </div>
      </div>
    </article>
  );
};

export default LinksCard;
