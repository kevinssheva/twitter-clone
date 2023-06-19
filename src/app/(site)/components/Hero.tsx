"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  // const [scroll, setScroll] = useState(150);

  useEffect(() => {
    let mountain = document.getElementById("mountain");
    const handleScroll = () => {
      let value = window.scrollY;
      if (mountain) {
        mountain.style.bottom = value * -0.4 + "px";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="overflow-hidden min-h-screen bg-[url('/images/landing/HeroBackground.svg')] bg-no-repeat bg-center bg-cover relative">
      <div className="absolute w-screen h-60 bottom-[5%] flex items-end">
        <div className="w-full h-full relative flex">
          <Image
            alt="mountain"
            src="/images/landing/MountainHero.svg"
            width={200}
            height={200}
            className="absolute w-full inset-x-0 duration-[50ms]"
            id="mountain"
          />
        </div>
      </div>
      <Image
        alt="mountain"
        src="/images/landing/GroundHero.svg"
        width={400}
        height={400}
        className=" absolute object-none md:object-contain w-screen bottom-0 translate-y-[2%] md:translate-y-[15%] lg:translate-y-[27%]"
      />
      <div className=" max-w-[39rem] w-full absolute bottom-4 left-1/2 -translate-x-1/2">
        <Image
          alt="mountain"
          src="/images/landing/Batu1.svg"
          width={100}
          height={100}
          className="absolute bottom-4 w-8/12 right-0 -z-10 translate-x-[50%]"
        />
        <Image
          alt="mountain"
          src="/images/landing/Batu2.svg"
          width={100}
          height={100}
          className="absolute bottom-0 w-1/4 left-1/3 "
        />
        <Image
          alt="mountain"
          src="/images/landing/HeroGate.svg"
          width={100}
          height={100}
          className="w-full max-h-screen"
        />
        <Image
          alt="mountain"
          src="/images/landing/Logo.svg"
          width={100}
          height={100}
          className="absolute top-1/2 w-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
        />
      </div>
      <Image
        alt="mountain"
        src="/images/landing/CloudLeft.svg"
        width={100}
        height={100}
        className="absolute w-[800px] -left-10 md:left-0"
      />
      <Image
        alt="mountain"
        src="/images/landing/CloudRight.svg"
        width={100}
        height={100}
        className="absolute w-[700px] -right-20 top-40 lg:top-16"
      />
    </div>
  );
};

export default Hero;
