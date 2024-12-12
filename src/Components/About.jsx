import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
    clipAnimation.to(".mask-clip-path", {
      height: "100vh",
      width: "100vw",
      borderRadius: 0,
    });
  });
  return (
    <div className="w-screen h-min-screen" id="about">
      <div className="relative flex flex-col  items-center gap-5 mt-32 mb-8">
        <h1 className="font-general text-sm md:text-[10px] text-black">
          Welcome to Zentry
        </h1>
        <div className="uppercase text-6xl text-center">
          Disc<b>o</b>ver The worlds <br />
          largest shared <b>a</b>dventure
        </div>
        <div className="about-subtext">
          <p>The Game of Games begins—your life, now an epic MMORPG</p>
          <p className="text-gray-500">
            {" "}
            Zentry unites every player from countless games and platforms, both
            digital and physical, into a unified Play Economy
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="../../public/img/about.webp"
            className="absolute left-0 top-0 object-cover size-full"
          />
        </div>
      </div>
    </div>
  );
}
