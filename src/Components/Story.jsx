import React from "react";
import AnimatedTitle from "./AnimatedTitle";
import { useRef } from "react";
import gsap from "gsap";
import Button from "./Button";

export default function Story() {
  const frameRef = useRef(null);
  const handleMouseLeave = () => {
    gsap.to(frameRef.current, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: "power1.out",
    });
  };
  const handleMouseMove = (e) => {
    if (!frameRef.current) return;
    const { left, top } = frameRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const centerX = frameRef.current.getBoundingClientRect().width / 2;
    const centerY = frameRef.current.getBoundingClientRect().height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(frameRef.current, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.out",
    });
  };
  return (
    <section className="h-min-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
          The multiverse IP world
        </p>
        <div className="relative size-full">
          <AnimatedTitle
            title="The St<b>o</b>ry Of <br /> Hidden Realm"
            containerClass="text-white mix-blend-difference z-10 relative pointer-events-none mt-5"
            sectionId="#story"
          />
        </div>
        <div className="story-img-container">
          <div className="story-img-mask">
            <div className="story-img-content">
              <img
                ref={frameRef}
                src="img/entrance.webp"
                className="object-contain"
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseLeave}
                onMouseEnter={handleMouseLeave}
                onMouseMove={handleMouseMove}
              />
            </div>
          </div>

          {/* for the rounded corner */}
          <svg
            className="invisible absolute size-0"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="flt_tag">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="8"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                  result="flt_tag"
                />
                <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="-mt-80 w-full flex justify-center md:justify-end md:-mt-64 md:me-44">
        <div className="md:items-start flex h-full w-fit flex-col items-center">
          <p className="md:text-start max-w-sm text-center mt-3 font-circular-web text-violet-50">
            {" "}
            Where realms converge, lies Zentry and the boundless pillar.
            Discover its secrets and shape your fate amidst infinite
            opportunities.
          </p>
          <Button
            id="realm-btn"
            title="discover prologue"
            containerClass="mt-5"
          />
        </div>
      </div>
    </section>
  );
}
