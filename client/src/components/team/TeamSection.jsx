import React from "react";
import TeamCard from "./TeamCard";
import { teams } from "../../utils/teams";

export default function TeamSection() {
  return (
    <div className="lg:px-[120px] lg:py-10 px-10 py-5 bg-[#FDFAFE] flex flex-col gap-5 items-center relative">
      <h4 className="comic-font font-black md:text-4xl text-2xl">
        <span className="text-[#B277F3]">Our</span> Team
      </h4>
      <p className="inter-font font-medium max-w-[720px] md:text-base text-sm text-center z-10">
        Our team is not only seasoned but the top in the industry. We not only
        talk about success; we actually reach it every day. Our coaches are
        well-versed in effective methods and technologies to dominate the
        competition. When it comes to making progress, we don't imitate
        trends-we set them.
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 z-10 gap-5 my-5">
        {teams.map((x) => (
          <TeamCard key={x.id} img={x.img} name={x.name} role={x.role} />
        ))}
      </div>
      <img
        src="/team/icon-1.png"
        className="absolute w-[150px] h-[150px] top-5 right-0 z-0"
      ></img>
      <img
        src="/team/icon-2.png"
        className="absolute w-[150px] h-[150px] bottom-0 left-0 z-0"
      ></img>
      <img src="/team/icon-3.png" className="absolute -bottom-10"></img>
    </div>
  );
}
