import { Context, useContext } from "react";
import { DockApi, DockContext } from "../components/Dock/utils/DockContext";

export const useDock = () => {
  return useContext<DockApi>(DockContext as Context<DockApi>);
};
