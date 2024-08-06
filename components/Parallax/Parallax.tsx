"use client";
import {
  ParallaxBanner,
  BannerLayer,
  ParallaxProvider,
} from "react-scroll-parallax";

export const Parallax = () => {
  const parallaxLayer1: BannerLayer = {
    image: "/parallax/Layer1.svg",
    translateY: [0, 0],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
  };

  const parallaxLayer2: BannerLayer = {
    image: "/parallax/Layer2.svg",
    translateY: [-8, 68],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
  };

  const parallaxLayer3: BannerLayer = {
    image: "/parallax/Layer3.svg",
    translateY: [-5, 60],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
  };

  const parallaxLayer4: BannerLayer = {
    image: "/parallax/Layer4.svg",
    translateY: [-5, 53],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
  };

  const parallaxLayer5: BannerLayer = {
    image: "/parallax/Layer5.svg",
    translateY: [-2, 49],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
  };

  const parallaxLayer6: BannerLayer = {
    image: "/parallax/Layer6.svg",
    translateY: [7, 38],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
  };

  const parallaxLayer7: BannerLayer = {
    image: "/parallax/Layer7.svg",
    translateY: [15, 30],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
  };
  const parallaxLayer8: BannerLayer = {
    image: "/parallax/Layer8.svg",
    translateY: [15, 0],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
  };

  return (
    <ParallaxProvider>
      <ParallaxBanner
        layers={[
          parallaxLayer1,
          parallaxLayer2,
          parallaxLayer3,
          parallaxLayer4,
          parallaxLayer5,
          parallaxLayer6,
          parallaxLayer7,
          parallaxLayer8,
        ]}
        className="h-[100vh]"
      />
    </ParallaxProvider>
  );
};
