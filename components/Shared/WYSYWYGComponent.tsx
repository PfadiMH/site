interface WYSYWYGProps {
  content: string;
  style: {
    readonly [key: string]: string;
  };
}

export function WYSIWYG({ content, style }: WYSYWYGProps) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}
