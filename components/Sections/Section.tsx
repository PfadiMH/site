import { ThemeProvider } from "@/lib/ThemeContext";
import { ReactNode } from "react";

interface SectionProps {
  contentSlot: ReactNode;
  index: number;
}

function Section({ contentSlot, index }: SectionProps) {
  const isMud = index % 2 === 0;
  const isSun = index % 2 === 1;

  const theme = isMud ? "mud" : "sun";

  return (
    <div className={`${theme}-theme`}>
      {isSun && (
        <object
          className="w-full"
          type="image/svg+xml"
          data="/section-break-presun.svg"
        />
      )}
      <ThemeProvider theme={theme}>{contentSlot}</ThemeProvider>
      {isSun && (
        <object
          className="w-full"
          type="image/svg+xml"
          data="/section-break-premud.svg"
        />
      )}
    </div>
  );
}

export default Section;
