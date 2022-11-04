import {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from "react";

interface SectionContext {
  section: null | string;
  setSection: Dispatch<SetStateAction<string | null>>;
}

export const SectionContext = createContext<SectionContext>({
  section: "",
  setSection: () => {},
});

const SectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [_section, setSection] = useState<string | null>(null);

  const section = useMemo(() => _section, [_section]);

  return (
    <SectionContext.Provider value={{ section, setSection }}>
      {children}
    </SectionContext.Provider>
  );
};

export default SectionProvider;
