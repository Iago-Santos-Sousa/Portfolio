import { SectionContent, SectionHeader, SectionRoot } from "./SectionParts";

/** Seção composta: `<Section>` + `Section.Header`, `Section.Content`. */
export const Section = Object.assign(SectionRoot, {
  Header: SectionHeader,
  Content: SectionContent,
});
