import { Prisma } from "@prisma/client";
import { Inter } from "next/font/google";
import Image from "next/image";

export interface ImageComponentsProps {
  path: string;
  filenameDisk: string;
}

export function ImageComponent({ path, filenameDisk }: ImageComponentsProps) {
  return <Image src={path} alt={filenameDisk} width={100} height={100} />;
}
