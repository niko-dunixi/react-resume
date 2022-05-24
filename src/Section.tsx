import React, { ReactNode } from "react";

type SectionProps = {
  title: string;
  className?: string;
  children: ReactNode;
};

export const Section = (props: SectionProps) => {
  return (
    <div className={`resume-section ${props.className && props.className}`}>
      <div>
        <header>{props.title}</header>
      </div>
      <div className="resume-section-children">{props.children}</div>
    </div>
  );
};

export default Section;
