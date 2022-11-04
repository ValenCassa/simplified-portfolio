import { SectionContext } from "components/IndexPage/@/SectionProvider";
import { useContext } from "react";

export const useActiveSection = () => useContext(SectionContext);
