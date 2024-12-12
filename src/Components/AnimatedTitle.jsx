import React from "react";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function AnimatedTitle({ title, containerClass }) {
  const containerRef = useRef(null);
  useEffect(() => {
    const context = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });
      titleAnimation.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0,0,0) rotateY(0) rotateX(0)",
        ease: "power2.inOut",
        stagger: 0.02,
      });
    }, containerRef);
    return () => context.revert();
  }, []);

  return (
    <div className={`animated-title ${containerClass}`} ref={containerRef}>
      {title.split("<br />").map((line) => {
        return (
          <div
            key={line}
            className=" flex-center max-w-full gap-2 flex-wrap"
          >
            {line.split(" ").map((word) => {
              return (
                <span
                  key={word}
                  className="animated-word"
                  dangerouslySetInnerHTML={{ __html: word }}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
