import { AnnouncementBar } from "../components/announcement-bar";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { HomepageCollectionSection } from "../components/homepage-collection";
import { BrandStorySection, HeroSection, JournalSection, SellingPointsSection } from "../components/sections";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <AnnouncementBar />
      <Header />
      <HeroSection />
      <SellingPointsSection />
      <HomepageCollectionSection />
      <BrandStorySection />
      <JournalSection />
      <Footer />
    </main>
  );
}
