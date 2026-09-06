import { AnnouncementBar } from "./announcement-bar";
import { Footer } from "./footer";
import { Header } from "./header";

export function StorefrontShell({ children }: { children: React.ReactNode }) {
  return <main className="min-h-screen"><AnnouncementBar /><Header />{children}<Footer /></main>;
}

