import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center px-6"
      style={{ backgroundImage: "url('/landing.png')" }}
    >
      <div className="flex flex-col items-center gap-6 text-white text-center w-full max-w-4xl p-6">
        {/* Glassmorphism effect for the heading */}
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight backdrop-blur-lg bg-white/10 border border-white/20 py-4 px-6 rounded-lg">
          Free AI-Powered Travel, Effortless Journeys – Your Smart Trip Planner!
        </h1>

        {/* Responsive paragraph text */}
        <p className="text-sm sm:text-lg md:text-xl max-w-2xl  backdrop-blur-lg bg-white/10 border border-white/20 py-4 px-6 rounded-lg">
          Plan smarter, travel easier! Let AI craft your perfect itinerary based on your
          preferences, budget, and time.
        </p>

        {/* CTA Button */}
        <Link to={"/create-trip"}>
          <Button className="text-white px-6 py-3 text-base sm:text-lg font-semibold rounded-md hover:bg-[#e55345] transition">
            Get Started – It's Free!
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
