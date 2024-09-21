import { ThemeProvider } from "@/lib/ThemeContext";
import { ReactNode } from "react";
import { PremudBreak, PresunBreak } from "../SectionBreak";

interface SectionProps {
  contentSlot: ReactNode;
  index: number;
}

function Section({ contentSlot, index }: SectionProps) {
  const isSun = index % 2 === 1;

  const theme = isSun ? "sun" : "mud";

  return (
    <div className={`${theme}-theme`}>
      {isSun && <PresunBreak />}
      <ThemeProvider theme={theme}>
        <div className="w-full bg-background flex justify-center">
          <div className="max-w-[1080px] p-4 w-full relative overflow-hidden">
            {contentSlot}
          </div>
        </div>
      </ThemeProvider>
      {isSun && <PremudBreak />}
    </div>
  );
}

export default Section;
