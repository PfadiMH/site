import { ThemeProvider } from "@/lib/ThemeContext";
import { ReactNode } from "react";

interface SectionProps {
  contentSlot: ReactNode;
  index: number;
}

function Section({ contentSlot, index }: SectionProps) {
  const isMud = index % 2 === 0;

  const theme = isMud ? "mud" : "sun";

  return (
    <div className={`${theme}-theme`}>
      <ThemeProvider theme={theme}>{contentSlot}</ThemeProvider>
    </div>
  );
}

export default Section;
