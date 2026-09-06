import { homepageContent } from "./site-data";

export function AnnouncementBar() {
  return (
    <div className="border-b border-gold/30 bg-emerald text-[10px] tracking-[0.15em] text-ivory">
      <div className="mx-auto flex h-8 items-center justify-center px-4 text-center uppercase">
        <p>{homepageContent.announcement}</p>
      </div>
    </div>
  );
}
