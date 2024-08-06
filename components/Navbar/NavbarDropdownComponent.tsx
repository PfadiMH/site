"use client";
import React, { useMemo, useState } from "react";
import prisma, { Prisma } from "@/lib/prisma";

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
  const [isOpen, setIsOpen] = useState(false);
  const changeState = () => {
    setIsOpen(!isOpen);
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
      <button
        onClick={changeState}
        className="text-black text-2xl font-rockingsoda"
      >
        {title}
      </button>
      {isOpen && (
        <div className="z-30 -translate-x-10 translate-y-4 drop-shadow-[0px_0px_8px_#000000] absolute items-center bg-white flex flex-col text-black font-rockingsoda text-2xl rounded-xl p-4 border-black b-2">
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
            <div className="flex flex-col">
              {items[0].groups_with ? (
                <div className="flex space-x-2 items-center">
                  <div className="w-10 h-1 bg-brand-yellow"></div>
                  <span className="text-[20px] font-rockingsoda">
                    {items[0].groups_with}
                  </span>
                  <div className="w-10 h-1 bg-brand-yellow"></div>
                </div>
              ) : (
                <div className="flex space-x-2 items-center">
                  <div className="w-36 h-1 bg-brand-yellow"></div>
                </div>
              )}
              {items.map((item) => (
                <a className="text-center">{item.title}</a>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
