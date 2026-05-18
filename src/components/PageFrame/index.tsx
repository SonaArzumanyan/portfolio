import type { ReactNode } from "react";
import { SiteHeader } from "../SiteHeader";

type PageFrameProps = {
  children: ReactNode;
};

export function PageFrame({ children }: PageFrameProps) {
  return (
    <div className="portfolio-screen">
      <main className="portfolio-panel">
        <SiteHeader />
        {children}
      </main>
    </div>
  );
}
