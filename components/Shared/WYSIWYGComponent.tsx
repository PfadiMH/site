export interface WYSIWYGProps {
  content: string;
  style: {
    readonly [key: string]: string;
  };
}

export function WYSIWYG({ content, style }: WYSIWYGProps) {
  return (
    <div
      className={style["wysiwyg"]}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
