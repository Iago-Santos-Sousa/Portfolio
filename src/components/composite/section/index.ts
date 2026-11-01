import { SectionContent, SectionHeader, SectionRoot } from "./SectionParts";

export const Section = Object.assign(SectionRoot, {
  Header: SectionHeader,
  Content: SectionContent,
});
