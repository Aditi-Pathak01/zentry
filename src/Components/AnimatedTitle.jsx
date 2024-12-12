import React from "react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
/*
 * Mapping is used! .split(" ") is used!(converts strings ==> array otb of " " ie space)
 * dangerouslySetInnerHTML={{ __html: word }} ==> removes html tags from the strings // <b></b> etc
 * container ref is used  ==> targetEl(ref.current) , div and as gsap context dependency
 * useEffect is used and its effeciency is increased by =>  return ()=> fx.revert() [VIP]
 * gsap.context(()=>{gsapcode can be written here!},dependencies) =>timeline and gsap.to/from/set
 */

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
        duration :0.5,
        stagger: 0.02,
      });
    }, containerRef);
    return () => context.revert();
  }, []);

  return (
    <div className={`animated-title ${containerClass}`} ref={containerRef}>
      {title.split("<br />").map((line) => {
        return (
          <div key={line} className=" flex-center max-w-full gap-2 flex-wrap">
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
