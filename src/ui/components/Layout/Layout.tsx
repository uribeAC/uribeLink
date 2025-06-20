import type React from "react";
import LinksCard from "../../../link/components/LinksCard/LinksCard";

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen min-w-screen bg-linear-to-t from-sky-500 to-indigo-500 flex justify-center items-center">
      <LinksCard />
    </div>
  );
};

export default Layout;
