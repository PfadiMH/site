import Image from "next/image";

export interface ImageComponentsProps {
  path: string;
  altText: string;
}

export function ImageComponent({ path, altText }: ImageComponentsProps) {
  return <Image src={path} alt={altText} width={100} height={100} />;
}
