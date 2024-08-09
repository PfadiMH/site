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
      <ThemeProvider theme={theme}>{contentSlot}</ThemeProvider>
      {isSun && <PremudBreak />}
    </div>
  );
}

export default Section;
