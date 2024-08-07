import { ReactNode } from "react";

interface SectionsProps {
  sectionsSlot: ReactNode;
}

function Sections({ sectionsSlot }: SectionsProps) {
  return (
    <div>
      {sectionsSlot}
      <object
        className="w-full"
        type="image/svg+xml"
        data="/section-break-presun.svg"
      />
    </div>
  );
}

export default Sections;
