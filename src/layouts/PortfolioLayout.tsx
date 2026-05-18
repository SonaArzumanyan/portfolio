import { Outlet } from "react-router-dom";
import { SideNav } from "../components/SideNav";

export function PortfolioLayout() {
  return (
    <SideNav>
      <Outlet />
    </SideNav>
  );
}
