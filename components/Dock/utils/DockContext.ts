import { createContext } from "react";

export type DockApi = {
  hovered: boolean;
  width: number | undefined;
};

export const DockContext = createContext<DockApi | null>(null);
