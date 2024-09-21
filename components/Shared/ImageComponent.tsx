import Image from "next/image";

export interface ImageComponentProps {
  path: string;
  title: string | null;
}

export function ImageComponent({ path, title }: ImageComponentProps) {
  return (
    <Image
      src={path}
      alt={title || path}
      fill={true}
      className="object-cover !static"
    />
  );
}
