import React from "react";
import { TiLocationArrow } from "react-icons/ti";
import { useRef, useState } from "react";

const Bentotilt = ({ children, className }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    const tiltX = (x - 0.5) * 5;
    const tiltY = (y - 0.5) * -5;
    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95,0.95,0.95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const Bentocard = ({ src, title, description }) => {
  return (
    <>
      <div className="relative size-full">
        <video
          src={src}
          loop
          autoPlay
          muted
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
        <div className="relative z-10 flex flex-col justify-between p-5 size-full text-blue-50">
          <div>
            <h1 className="bentotitle special-font">{title}</h1>
            {description && (
              <p className="mt-3 max-w-64 text-xs md:text-base">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default function Features() {
  return (
    <section className="w-full pb-52 bg-black">
      <div className="container mx-auto px-3 md:px-10">
        <div className="py-32 px-5">
          <p className=" font-circular-web text-blue-50">Enter The Metagame</p>

          <p className="max-w-md text-blue-50 text-lg opacity-50 font-circular-web">
            Immerse yourself in a rich and ever-expanding universe <br />
            where a vibrant array of products converge <br />
            into an interconnected overlay experience on your world.
          </p>
        </div>

        <div className="relative w-full h-96 mb-7 border-hsla rounded-md overflow-hidden md:h-[65vh] mt-10">
          <Bentocard
            src="../../public/videos/feature-1.mp4"
            title={
              <>
                Radia<b>n</b>t
              </>
            }
            description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
          />
        </div>
      </div>
      <div className="grid h-[135vh] grid-rows-3 grid-cols-2 w-full gap-7">
        <Bentotilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <Bentocard
            src="../../public/videos/feature-2.mp4"
            title={
              <>
                zig<b>m</b>a
              </>
            }
            description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
          />
        </Bentotilt>
        <Bentotilt className="bento-tilt_1 row-span-1 md:col-span-1 ms-32 md:ms-0">
          <Bentocard
            src="../../public/videos/feature-3.mp4"
            title={
              <>
                Ne<b>x</b>us
              </>
            }
            description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
            isComingSoon
          />
        </Bentotilt>

        <Bentotilt className="bento-tilt_1 row-span-1 md:col-span-1 me-8 md:ms-0">
          <Bentocard
            src="../../public/videos/feature-4.mp4"
            title={
              <>
                az<b>u</b>l
              </>
            }
            description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
            isComingSoon
          />
        </Bentotilt>

        <Bentotilt className="bento-tilt_2">
          <div className="flex flex-col size-full justify-between p-5 bg-blue-700">
            <h1 className="bento-title special-font max-w-64 text-black">
              More <br />
              Coming
              <br /> Soon
            </h1>
            {<TiLocationArrow className="m-7 scale-[5] self-end" />}
          </div>
        </Bentotilt>

        <Bentotilt className="bento-tilt_2">
          <video src="../../public/videos/feature-5.mp4" loop muted autoPlay />
        </Bentotilt>
      </div>
    </section>
  );
}
