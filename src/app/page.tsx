"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Background images for the carousel
  const backgroundImages = [
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076", // Metal pipes/tubes
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070", // Industrial steel
    "https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=2074", // Metal manufacturing
  ];

  // Auto-advance carousel every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 hero min-h-screen">
        <div className="hero-content text-center text-white">
          <div className="max-w-4xl">
            <h1 className="mb-5 text-5xl font-bold tracking-wide">
              FILIALE DE TECHNO CAST GROUP
            </h1>
            <p className="mb-8 text-xl font-light max-w-3xl mx-auto leading-relaxed">
              "TECHNO CAST METALS AND ALLOYS : INNOVATION, EXCELLENCE,
              DURABILITÉ POUR L'INDUSTRIE DE DEMAIN."
            </p>
            <Link
              href="/about"
              className="btn btn-primary btn-lg px-8 py-3 text-white font-semibold hover:scale-105 transition-transform duration-200"
            >
              En savoir plus
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? "bg-white"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
