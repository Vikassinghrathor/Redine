import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Footer = () => {
  const exploreLinks = [
    { title: "Home", href: "#" },
    { title: "Prologue", href: "#" },
    { title: "About", href: "#" },
    { title: "Contact", href: "#" },
  ];

  const productLinks = [
    { title: "Radiant", href: "#" },
    { title: "Nexus ↗", href: "#" },
    { title: "Zigma", href: "#" },
    { title: "Azul", href: "#" },
  ];

  const socialLinks = [
    { title: "Discord", href: "#" },
    { title: "X", href: "#" },
    { title: "Youtube", href: "#" },
    { title: "Medium", href: "#" },
  ];

  const resourceLinks = [{ title: "Media Kit", href: "#" }];

  const LinkColumn = ({ title, links }) => (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm font-medium uppercase mb-2">{title}</h3>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="text-black hover:opacity-70 transition-opacity"
        >
          {link.title}
        </a>
      ))}
    </div>
  );

  return (
    <footer className="w-full bg-[#6c5bff] text-black min-h-[300px]">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-24">
          <div className="flex flex-col items-start w-32">
            <div className="w-32 h-32 -mt-12">
              {" "}
              {/* Negative margin to pull it up */}
              <DotLottieReact
                src="https://lottie.host/b69d1c05-e4ab-4f62-a7b4-fcf8defedc9e/QXOuYPFwZj.lottie"
                loop
                autoplay
                className="w-full h-full object-contain"
                style={{
                  width: "100%",
                  height: "100%",
                  maxWidth: "128px",
                  maxHeight: "128px",
                  filter: "brightness(0)",
                  transform: "translateY(-20px)", // Moves the animation up
                }}
              />
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24">
            <LinkColumn title="EXPLORE" links={exploreLinks} />
            <LinkColumn title="PRODUCTS" links={productLinks} />
            <LinkColumn title="FOLLOW US" links={socialLinks} />
            <LinkColumn title="RESOURCES" links={resourceLinks} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black/10">
          <p className="text-sm">@Redine 2024. ALL RIGHTS RESERVED</p>
          <a
            href="#privacy"
            className="text-sm hover:opacity-70 transition-opacity mt-10 md:mt-0"
          >
            PRIVACY POLICY
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
