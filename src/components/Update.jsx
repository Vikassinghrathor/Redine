import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

const LatestUpdates = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Animation for the heading
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.to(
        ".animated-word",
        {
          opacity: 1,
          transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
          ease: "power2.inOut",
          stagger: 0.02,
        },
        0
      );

      // Animation for the updates section
      const updateAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: "#updates",
          start: "top center",
          end: "+=400 center",
          scrub: 0.5,
        },
      });

      updateAnimation.from(".latest-title", {
        y: 100,
        opacity: 0,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const renderAnimatedTitle = (title, containerClass) => (
    <div
      ref={containerRef}
      className={clsx("animated-title w-full", containerClass)}
    >
      {title.split("<br/>").map((line, index) => (
        <div
          key={index}
          className="flex flex-wrap items-start justify-start gap-2 md:gap-3"
        >
          {line.split(" ").map((word, idx) => (
            <span
              key={idx}
              className="animated-word text-left"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div
      id="updates"
      className="relative min-h-screen w-screen bg-[#f5f3ff] px-6 py-24 md:px-24"
    >
      <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
        {/* Left Content */}
        <div className="flex flex-col items-start">
          <div className="latest-title w-full">
            {renderAnimatedTitle(
              "LAT<b>E</b>ST<br/><b>U</b>PDATES",
              "!text-black text-8xl font-bold items-start justify-start flex !pl-0"
            )}
          </div>

          <p className="mt-8 mb-8 max-w-md text-lg text-gray-800">
            Stay updated with the latest news, events, and updates in our
            ecosystem. Be part of our universe's growth and evolution.
          </p>

          <button className="group flex w-fit items-center gap-2 rounded-full bg-black px-6 py-3 text-sm text-white transition-all hover:bg-black/80">
            READ ALL NEWS
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>

        {/* Right Content - News Card */}
        <div className="relative overflow-hidden rounded-2xl">
          <div className="aspect-[16/9] w-full">
            <img
              src="img/gamenexusimage.png"
              alt="Latest Update"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
            <div className="mb-4 text-sm text-white/80">09.05.2024</div>
            <h3 className="text-2xl font-semibold text-white">
              Welcome NEXUS: Zentry's Social Gateway
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestUpdates;
