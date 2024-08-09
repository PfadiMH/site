"use client";
import React, { ReactNode, useId, useRef, useState } from "react";
import { Prisma } from "@/lib/prisma";
import { ImageComponent } from "../Shared/ImageComponent";
import { useMediaQuery } from "react-responsive";
import ClickAwayListener from "../ClickAwayListener";

export type NavbarComponentsProps = Prisma.NavbarGetPayload<{}> & {
  componentsSlot: ReactNode[];
};

export function NavbarComponents({
  componentsSlot,
  logo,
}: NavbarComponentsProps) {
  const halfLength = Math.ceil(componentsSlot.length / 2);
  const leftItems = componentsSlot.slice(0, halfLength);
  const rightItems = componentsSlot.slice(halfLength);

  const navbarOverlayId = useId();

  const [open, setOpen] = useState(false);

  const isDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const mobileButtonRef = useRef<HTMLButtonElement>(null);

  function handleClickAway(type: string, event: Event) {
    if (isDesktop) return;

    // Ignore clicks on the button
    if (mobileButtonRef.current?.contains(event.target as Node)) return;

    setOpen(false);
  }

  return (
    <>
      {/* MOBILE */}
      <div className="md:hidden grid grid-cols-[1fr_min-content_1fr] border-b-[#F4D51F] border-b-8">
        <div></div>
        {logo && (
          <div className="relative z-20 w-28 h-28 mb-[-50px]">
            <a href="/">
              <ImageComponent title="logo" path={logo} />
            </a>
          </div>
        )}
        <div className="flex items-center justify-end">
          <button
            ref={mobileButtonRef}
            className="text-gray-500 w-10 h-10 relative mr-5 focus:outline-none border rounded-full border-dashed"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls={navbarOverlayId}
            aria-label="Open main menu"
          >
            <HamburgerIcon open={open} />
          </button>
        </div>
      </div>
      {open && (
        <div
          id={navbarOverlayId}
          className="md:hidden absolute z-10 overflow-auto w-screen h-screen bg-[rgba(0,0,0,0.6)]"
        >
          <div className="py-20 px-2">
            <ClickAwayListener onClickAway={handleClickAway}>
              <div className="flex flex-col gap-3">{componentsSlot}</div>
            </ClickAwayListener>
          </div>
        </div>
      )}

      {/* DESKTOP */}
      <div className="hidden md:grid grid-cols-[1fr_min-content_1fr] gap-4 items-end border-b-[#F4D51F] border-b-8">
        <div className="flex justify-end gap-4 flex-wrap mb-1">
          {leftItems.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
        {logo && (
          <div className="relative w-28 h-28 mb-[-50px]">
            <a href="/">
              <ImageComponent title="logo" path={logo} />
            </a>
          </div>
        )}
        <div className="flex justify-start gap-4 flex-wrap mb-1">
          {rightItems.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>
    </>
  );
}

interface HamburgerIconProps {
  open: boolean;
}

function HamburgerIcon({ open }: HamburgerIconProps) {
  return (
    <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <span
        aria-hidden="true"
        className={`block absolute h-0.5 w-5 bg-black transform transition duration-500 ease-in-out ${
          open ? "rotate-45" : "-translate-y-1.5"
        }`}
      ></span>
      <span
        aria-hidden="true"
        className={`block absolute h-0.5 w-5 bg-black transform transition duration-500 ease-in-out ${
          open ? "opacity-0" : ""
        }`}
      ></span>
      <span
        aria-hidden="true"
        className={`block absolute h-0.5 w-5 bg-black transform transition duration-500 ease-in-out ${
          open ? "-rotate-45" : "translate-y-1.5"
        }`}
      ></span>
    </div>
  );
}
