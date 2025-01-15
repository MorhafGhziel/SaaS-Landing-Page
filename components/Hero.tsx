import React from "react";
import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            ✨ $7.5M seed round raised
          </div>
        </div>
        <h1 className="text-6xl font-medium text-center mt-6">
          Impactful design, created effortlessly
        </h1>
        <p className="text-center text-xl text-white/50 mt-8">
          Design tools shouldn&apos;t slow you down. Layers combines powerful
          reatures with an intulive interace that keeps you in your creative
          flow.
        </p>
        <form className="flex border border-white/15 rounded-full p-2 mt-8">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent px-4"
          />
          <CustomButton type="submit" variant="primary">
            Sign Up
          </CustomButton>
        </form>
      </div>
    </section>
  );
};

export default Hero;
