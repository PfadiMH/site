"use client";
import React, { useState } from "react";
import { Prisma } from "@/lib/prisma";

export type NavbarDropdownProps = Omit<
  Prisma.NavbarDropdownsGetPayload<{}>,
  "items"
> & {
  items: {
    title: string;
    groups_with: string;
    url: string;
  }[];
};

type Item = {
  title: string;
  groups_with: string;
  url: string;
};

export function NavbarDropdown({ title, items }: NavbarDropdownProps) {
  const [open, setOpen] = useState(false);
  const changeState = () => {
    setOpen(!open);
  };

  const groupedItems: Item[][] = items.reduce((groups, item) => {
    if (
      groups.length === 0 ||
      groups[groups.length - 1][0].groups_with !== item.groups_with
    ) {
      groups.push([item]);
    } else {
      groups[groups.length - 1].push(item);
    }
    return groups;
  }, [] as Item[][]);

  return (
    <>
      {/* MOBILE */}
      <div className="md:hidden flex flex-col gap-1">
        <button
          onClick={changeState}
          className="text-brand-yellow items-center gap-2 text-2xl font-rockingsoda bg-primary  w-full p-3 flex justify-center"
        >
          {title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 95.05 57.43"
            className={`fill-brand-yellow stroke-none w-5 h-5 transform transition duration-50 ${
              open ? "-rotate-180" : ""
            }`}
          >
            <polygon points="0 11.17 39.67 57 84 6.5 73 2.17 42 36.36 9.83 0 0 11.17" />
          </svg>
        </button>
        {open && (
          <div className="pl-2 flex gap-1 flex-col">
            {groupedItems.map((items) => (
              <div className="bg-primary w-full p-3 flex flex-col justify-center">
                <div className="flex w-full gap-2 items-center">
                  {items[0].groups_with && (
                    <>
                      <span className="text-[20px] font-rockingsoda">
                        {items[0].groups_with}
                      </span>
                    </>
                  )}
                </div>
                <div className="w-full h-[1px] bg-brand-yellow"></div>
                <div className="flex-col flex">
                  {items.map((item) => (
                    <a
                      className="text-center py-2"
                      href={item.url || undefined}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* DESKTOP */}
      <div className="hidden md:block">
        <button
          onClick={changeState}
          className="text-black flex items-center gap-1 text-2xl font-rockingsoda"
        >
          {title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 95.05 57.43"
            className={`fill-black stroke-none w-5 h-5 transform transition duration-250 ease-in-out ${
              open ? "rotate-180" : ""
            }`}
          >
            <polygon points="0 11.17 39.67 57 84 6.5 73 2.17 42 36.36 9.83 0 0 11.17" />
          </svg>
        </button>
        {open && (
          <div className="z-30 min-w-36 translate-y-4 drop-shadow-[0px_0px_8px_#000000] absolute items-center bg-white flex flex-col text-black font-rockingsoda text-2xl rounded-xl p-4 border-black b-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52.36 24.43"
              className=" absolute w-10 h-10 -translate-x-8 -translate-y-[43.4px] z-20 pointer-events-none"
            >
              <path
                className="fill-white stroke-none"
                d="M0,22c.18,0,15.99.01,17.77-21.53-.01-.5.67-.65.87-.2,1.72,4.02,5.6,11.55,11.83,15.62,8.27,5.38,16.59,6.13,21.89,6.13,0,.02-50.12-.02-52.36-.02Z"
              />
            </svg>
            {groupedItems.map((items) => (
              <>
                <div className="flex w-full gap-2 items-center">
                  <div className="grow h-[3px] bg-brand-yellow"></div>
                  {items[0].groups_with && (
                    <>
                      <span className="text-[20px] font-rockingsoda">
                        {items[0].groups_with}
                      </span>
                      <div className="grow h-[3px] bg-brand-yellow"></div>
                    </>
                  )}
                </div>

                {items.map((item) => (
                  <a className="text-center" href={item.url}>
                    {item.title}
                  </a>
                ))}
              </>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
