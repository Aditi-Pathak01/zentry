import React, { useEffect, useState } from "react";
import { useRef } from "react";


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
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div onClick={handleMiniVdClick} className="origin center">
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

        <video src={getVidSrc(currIdx)} />
      </div>
    </div>
  );
}
