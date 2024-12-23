import React from "react";
import AnimatedTitle from "../Components/AnimatedTitle";
import Button from "../Components/Button";
const ImgBox = ({ src, containerclass }) => {
  return (
    <div>
      <img src={src} className={containerclass} />
    </div>
  );
};

export default function Contact() {
  return (
    <div id="contact" className="w-screen min-h-96 px-10 my-20">
      <div className="relative w-full bg-black rounded-lg py-24 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 h-full w-72 overflow-hidden hidden sm:block lg:left-20 lg:w-96">
          <ImgBox
            src="../../public/img/contact-1.webp"
            containerclass="contact-clip-path-1"
          />
          <ImgBox
            src="../../public/img/contact-2.webp"
            containerclass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 md:left-auto md:right-10 lg:top-20 lg:w-80 sm:top-1/2">
          <ImgBox
            src="../../public/img/swordman.webp"
            containerclass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center gap-2 pt-10 text-center">
          <p className="text-[10px] uppercase mb-10 font-general text-blue-50">Join zentry</p>
          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether."
            containerClass="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />
          <Button title="contact us" containerClass="mt-8 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
