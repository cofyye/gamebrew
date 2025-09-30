'use client';

import Image from 'next/image';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';

const Hero = () => {
  return (
    <div className="pt-36 pb-20">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 h-screen md:-top-20 md:-left-32"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Gaming Icons - Random Positions */}
      {/* Counter-Strike 2 - Top Left */}
      <div className="absolute right-44 bottom-24 z-5 hidden md:block">
        <div className="game-icon-diamond h-44 w-54 rotate-[-15deg]">
          <div className="game-icon-content h-full w-full">
            <Image
              src={'/cs2-wallpaper.jpg'}
              alt="Counter-Strike 2"
              className="h-full w-full object-cover opacity-20"
              width={176}
              height={176}
            />
          </div>
        </div>
      </div>

      {/* Counter-Strike 1.6 - Top Right */}
      <div className="absolute top-44 right-32 z-5 hidden md:block">
        <div className="game-icon-diamond h-36 w-56 rotate-[25deg]">
          <div className="game-icon-content h-full w-full">
            <Image
              src={'/cs16-wallpaper.jpg'}
              alt="Counter-Strike 1.6"
              className="h-full w-full object-cover opacity-20"
              width={259}
              height={220}
            />
          </div>
        </div>
      </div>

      {/* Minecraft - Bottom Left */}
      <div className="absolute bottom-24 left-16 z-5 hidden md:block">
        <div className="game-icon-diamond h-40 w-80 rotate-[15deg]">
          <div className="game-icon-content h-full w-full">
            <Image
              src={'/mc-wallpaper.jpg'}
              alt="Minecraft"
              className="h-full w-full object-cover opacity-20"
              width={346}
              height={233}
            />
          </div>
        </div>
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div className="dark:bg-black-100 dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-white">
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="dark:bg-black-100 pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <p className="max-w-80 text-center text-xs tracking-widest text-blue-100 uppercase">
            Your Ultimate Gaming Database
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Discover Mods, Plugins, Maps & More for Every Game"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl">
            GameBrew is your one-stop destination for gaming content across all
            platforms. From Counter-Strike to Minecraft, explore thousands of
            community-created mods, plugins, custom maps, and other stuffs.
          </p>

          {/* <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
