import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { useRef } from "react";

const Bentotilt = ({ children, className = "" }) => {
  const ref = useRef(null);
  const [transformStyle, setTransformStyle] = useState("");

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top, height, width } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    const tiltX = (x - 0.5) * 10;
    const tiltY = (y - 0.5) * -10;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95,1,1)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <>
      <div
        ref={ref}
        className={className}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform: transformStyle }}
      >
        {children}
      </div>
    </>
  );
};

const Bentocard = ({ src, title, description }) => {
  return (
    <>
      <div className="relative size-full rounded-xl overflow-hidden">
        <div>
          <video
            src={src}
            loop
            muted
            autoPlay
            className="absolute top-0 left-0 object-cover object-center size-full"
          />
        </div>
        <div className="relative z-10 text-blue-50 flex flex-col justify-between p-5 size-full">
          <div>
            <h1 className="bento-title special-font">{title}</h1>
            {description && (
              <p className="mt-3 max-w-64 text-xs md:text-base">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default function Features() {
  return (
    <section className="w-full bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="py-32 px-5">
          <p className="text-blue-50 font-circular-web">Enter The metagame</p>
          <p className="text-blue-50 text-lg opacity-50 font-circular-web max-w-md">
            {" "}
            Immerse yourself in a rich and ever-expanding universe <br />
            where a vibrant array of products converge <br />
            into an interconnected overlay experience on your world.
          </p>
        </div>

        <div className="relative border-hsla h-96 w-full rounded-md overflow-hidden mt-5 mb-10">
          <Bentocard
            src="videos/feature-1.mp4"
            title={
              <>
                Radia<b>n</b>t
              </>
            }
            description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
          />
        </div>

        <div className="h-[135vh] w-full grid grid-cols-2 grid-rows-3 gap-7">
          <Bentotilt className="bento-tilt_1 row-span-1  md:col-span-1 md:row-span-2">
            <Bentocard
              src="videos/feature-2.mp4"
              title={
                <>
                  zig<b>m</b>a
                </>
              }
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            />
          </Bentotilt>

          <Bentotilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <Bentocard
              src="videos/feature-3.mp4"
              title={
                <>
                  n<b>e</b>xus
                </>
              }
              description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
            />
          </Bentotilt>

          <Bentotilt className="bento-tilt_1 row-span-1 me-8 md:col-span-1 md:me-0">
            <Bentocard
              src="public/videos/feature-4.mp4"
              title={
                <>
                  az<b>u</b>l
                </>
              }
              description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
            />
          </Bentotilt>
          <Bentotilt className="bento-tilt_2">
            <div className="flex flex-col p-5 justify-between size-full bg-blue-700">
              <h1 className="bento-title special-font max-w-64">
                More <br />
                Coming
                <br /> Soon
              </h1>
              {<FaLocationArrow className="m-7 scale-[4] self-end" />}
            </div>
          </Bentotilt>

          <Bentotilt className="bento-tilt_2">
            <video src="videos/feature-5.mp4" loop autoPlay muted />
          </Bentotilt>
        </div>
      </div>
    </section>
  );
}
