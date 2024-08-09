import { ReactNode } from "react";
import { PresunBreak } from "../SectionBreak";

interface SectionsProps {
  sectionsSlot: ReactNode;
}

function Sections({ sectionsSlot }: SectionsProps) {
  return (
    <div>
      {sectionsSlot}
      <PresunBreak />
    </div>
  );
}

export default Sections;
