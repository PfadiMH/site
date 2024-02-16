import Image from "next/image";

export interface ImageComponentsProps {
  path: string;
  title: string;
}

export function ImageComponent({ path, title }: ImageComponentsProps) {
  return <Image src={path} alt={title} width={100} height={100} />;
}
