import Image from "next/image";

export interface ImageComponentsProps {
  path: string;
  title: string;
}

export function ImageComponent({ path, title }: ImageComponentsProps) {
  return <Image src={path} alt={title} fill={true} className='object-cover' />;
}
