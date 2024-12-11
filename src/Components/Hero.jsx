import React, { useEffect, useState } from "react";
import { useRef } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const [currIdx, setCurrIdx] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadedVid, setLoadedVid] = useState(0);
  const totalVid = 4;
  const nextVidRef = useRef(null);

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrIdx((prev) => (prev % totalVid) + 1);
  };
  const getVidSrc = (idx) => `../../public/videos/hero-${idx}.mp4`;
  useEffect(() => {
    if (loadedVid === totalVid - 1) {
      setLoading(false);
    }
  }, [loadedVid]);

  const handleLoadedVid = () => {
    setLoadedVid((prev) => prev + 1);
  };

  /*useGSAP :- for animations 
(1) npm  install @gsap/react gsap
(2) import useGSAP from "@gsap/react"
(3) import gsap from "gsap"
(4)useGSAP syntax :-  
(i)useGSAP(()=>{},{dependencies : [currIdx],revertOnUpdate : true}) // 
*/

  useGSAP(
    () => {
      gsap.set("#video-frame", {
        clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
        borderRadius: "0 0 40% 10%",
      });
      gsap.from("#video-frame", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        borderRadius: "0 0 0 0",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#video-frame",
          start: "center center",
          end: "bottom center",
          scrub: true,
        },
      });
    },
    {
      dependencies: [],
      revertOnUpdate: true,
    }
  );

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          duration: 1,
          ease: "power1.inOut",
          height: "100%",
          width: "100%",
          onStart: () => nextVidRef.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currIdx], revertOnUpdate: true }
  );

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-blue-100">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVdClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                autoPlay
                ref={nextVidRef}
                src={getVidSrc((currIdx % totalVid) + 1)}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-center object-cover"
                onLoadedData={handleLoadedVid}
              />
            </div>
          </div>
        </div>

        <video
          src={getVidSrc(currIdx === totalVid - 1 ? 1 : currIdx)}
          ref={nextVidRef}
          id="next-video"
          loop
          muted
          className="object-center object-cover absolute-center absolute z-20 invisible"
          onLoadedData={handleLoadedVid}
        />

        <video
          autoPlay
          src={getVidSrc(currIdx)}
          loop
          muted
          className="object-center object-cover absolute left-0 top-0 size-full"
          onLoadedData={handleLoadedVid}
        />

        <h1 className="special-font-b hero-heading absolute bottom-7 right-5 text-blue-75 z-20">
          G<b>a</b>ming
        </h1>
        <div className="absolute top-0 left-0 z-20 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font-b hero-heading text-blue-75">
              Redefi<b>n</b>e
            </h1>
            <p className="mb-5 text-blue-100 font-robert-regular max-w-64">
              Enter the metagame layer <br />
              Unleash the play economy
            </p>
            <Button
              leftIcon={<TiLocationArrow />}
              title="Watch Trailor"
              id="watch-trailor"
              containerClass="flex-center gap-1 !bg-yellow-300"
            />
          </div>
        </div>
      </div>
      <h1 className="special-font-b hero-heading absolute bottom-7 right-5 text-black">
        G<b>a</b>ming
      </h1>
    </div>
  );
}
