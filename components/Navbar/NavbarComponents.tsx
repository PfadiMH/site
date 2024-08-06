import React from "react";
import prisma, { Prisma } from "@/lib/prisma";
import { NavbarItemBuilder } from "./NavbarItem";
import { NavbarDropdownBuilder } from "./NavbarDropdownBuilder";
import { ImageComponent } from "../Shared/ImageComponent";
import { getAssetPath } from "@/lib/getAssetInfo";

type NavbarComponentsBuilderProps = Prisma.NavbarGetPayload<{}>;
type NavbarComponentBuilderProps = Prisma.NavbarComponentsGetPayload<{}>;

export async function NavbarComponentsBuilder({
  logo,
}: NavbarComponentsBuilderProps) {
  const navbarComponents = await prisma.navbarComponents.findMany({
    orderBy: {
      sort: "asc",
    },
  });

  const navbarBuiltComponents = navbarComponents.map(NavbarComponentBuilder);

  const halfLength = Math.ceil(navbarBuiltComponents.length / 2);
  const leftItems = navbarBuiltComponents.slice(0, halfLength);
  const rightItems = navbarBuiltComponents.slice(halfLength);

  return (
    <ul className="flex justify-center items-end border-b-[#F4D51F] border-b-8">
      <div className="flex space-x-4 px-8 mb-1">
        {leftItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>
      {logo && (
        <div className="mb-[-50px] z-50">
          <ImageComponent title="logo" path={await getAssetPath(logo)} />
        </div>
      )}
      <div className="flex space-x-4 w-auto px-8 mb-1">
        {rightItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>
    </ul>
  );
}

const NavbarComponentBuilder = (
  navbarComponent: NavbarComponentBuilderProps
) => {
  if (navbarComponent.item === null) return null;

  let itemIdInt = Number(navbarComponent.item);

  switch (navbarComponent.collection) {
    case "navbar_items":
      return (
        <NavbarItemBuilder id={itemIdInt} key={String(navbarComponent.id)} />
      );

    case "navbar_dropdowns":
      return <NavbarDropdownBuilder id={itemIdInt} key={navbarComponent.id} />;

    default:
      return (
        <div title={JSON.stringify(navbarComponent, null, 2)}>
          Unknown collection
        </div>
      );
  }
};
