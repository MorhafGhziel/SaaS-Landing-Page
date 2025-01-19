import React from "react";
import CustomButton from "./CustomButton";
import designExample1Image from "@/public/design-example-1.png";
import designExample2Image from "@/public/design-example-2.png";
import Image from "next/image";
import Pointer from "./Pointer";

const Hero = () => {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container relative">
        <div>
          <Image
            src={designExample1Image}
            alt="design example 1 image"
            className="absolute -left-32 top-16 hidden lg:flex"
          />
        </div>
        <div>
          <Image
            src={designExample2Image}
            alt="design example 2 image"
            className="absolute -right-64 -top-16 hidden lg:block"
          />
        </div>
        <div className="absolute left-56 top-96 hidden lg:block">
          <Pointer name="Morhaf" />
        </div>
        <div className="absolute right-80 -top-4 hidden lg:block">
          <Pointer name="Ghziel" color="red" />
        </div>
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            ✨ $7.5M seed round raised
          </div>
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
          Impactful design, created effortlessly
        </h1>
        <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
          Design tools shouldn&apos;t slow you down. Layers combines powerful
          reatures with an intulive interace that keeps you in your creative
          flow.
        </p>
        <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent px-4 flex-1 w-full"
          />
          <CustomButton
            type="submit"
            variant="primary"
            className="whitespace-nowrap"
            size="sm"
          >
            Sign Up
          </CustomButton>
        </form>
      </div>
    </section>
  );
};

export default Hero;
