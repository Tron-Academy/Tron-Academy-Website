import React from "react";

export default function CelebrationSection() {
  return (
    <div className="px-[120px] py-20 flex flex-col gap-5 items-center">
      <div className="flex flex-col gap-5 items-center">
        <h5 className="roboto-font text-4xl font-black">
          Events & Celebrations
        </h5>
        <p className="inter-font text-base max-w-[900px] text-center">
          At tron Digital we believe in celebrating life, not just living it.
          The Tron family celebrates all the festivals, birthdays of team
          members, and indulges in good natured frolic during team outings.
          After all, all work and no play makes Jack a dull boy!
        </p>
      </div>

      <div className="grid grid-cols-4 gap-y-8 gap-x-5 my-20 mx-auto">
        <div className="flex flex-col items-center gap-2 -translate-y-14">
          <img src="/event-1.jpg" className="w-[234px] h-[316.82px]"></img>
          <img src="/event-2.jpg" className="w-[234px] h-[184.3px]"></img>
        </div>
        <img
          src="/event-3.jpg"
          className="w-[234px] h-[510.87px] object-cover translate-y-14"
        ></img>
        <div className="flex flex-col items-center gap-2 -translate-y-14">
          <img
            src="/event-4.jpg"
            className="w-[234px] h-[316.82px] object-cover"
          ></img>
          <img src="/event-5.jpg" className="w-[234px] h-[184.3px]"></img>
        </div>
        <div className="flex flex-col items-center gap-2 translate-y-14">
          <img
            src="/event-6.jpg"
            className="w-[234px] h-[186.05px] object-cover"
          ></img>
          <img src="/event-7.jpg" className="w-[234px] h-[316.82px]"></img>
        </div>
      </div>
    </div>
  );
}