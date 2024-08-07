import { ReactNode } from "react";

interface SectionsProps {
  sectionsSlot: ReactNode;
}

function Sections({ sectionsSlot }: SectionsProps) {
  return <div>{sectionsSlot}</div>;
}

export default Sections;
