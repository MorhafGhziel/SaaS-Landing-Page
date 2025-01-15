import React from "react";

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
        <p>
          Design tools shouldn&apos;t slow you down. Layers combines powerful
          reatures with an intulive interace that keeps you in your creative
          flow.
        </p>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
