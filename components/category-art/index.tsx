import Image from "next/image";
import { assetPath } from "../asset-path";

type CategoryArtworkProps = { type: string };

export function CategoryArtwork({ type }: CategoryArtworkProps) {
  const artwork: Record<string, React.ReactNode> = {
    wellness: <WellnessArt />,
    "beauty-skincare": <BeautyArt />,
    "personal-care": <PersonalCareArt />,
    lifestyle: <LifestyleArt />,
    electronics: <ElectronicsArt />,
    "bundles-sets": <BundlesArt />,
  };

  return <div aria-hidden="true" className="h-full bg-[#f1eadf]">{artwork[type] ?? artwork.wellness}</div>;
}

function WellnessArt() {
  return <div className="relative h-full w-full bg-[#eee4d5]">
    <Image src={assetPath("/category-art/wellness-products.png")} alt="" fill sizes="(max-width: 640px) 50vw, (max-width: 1279px) 33vw, 17vw" className="object-contain object-center p-1" />
  </div>;
}

function BeautyArt() {
  return <div className="relative h-full w-full bg-[#eee4d5]">
    <Image src={assetPath("/category-art/beauty-skincare-collection.png")} alt="" fill sizes="(max-width: 640px) 50vw, (max-width: 1279px) 33vw, 17vw" className="object-contain object-center p-1" />
  </div>;
}

function PersonalCareArt() {
  return <div className="relative h-full w-full bg-[#eee4d5]">
    <Image src={assetPath("/category-art/personal-care-products.png")} alt="" fill sizes="(max-width: 640px) 50vw, (max-width: 1279px) 33vw, 17vw" className="object-contain object-center p-1" />
  </div>;
}

function LifestyleArt() {
  return <div className="relative h-full w-full bg-[#eee4d5]">
    <Image src={assetPath("/category-art/lifestyle-home-fragrance.png")} alt="" fill sizes="(max-width: 640px) 50vw, (max-width: 1279px) 33vw, 17vw" className="object-contain object-center p-1" />
  </div>;
}

function ElectronicsArt() {
  return <div className="relative h-full w-full bg-[#eee4d5]">
    <Image src={assetPath("/category-art/electronics-massage-chair.png")} alt="" fill sizes="(max-width: 640px) 50vw, (max-width: 1279px) 33vw, 17vw" className="object-contain object-center p-1" />
  </div>;
}

function BundlesArt() {
  return <div className="relative h-full w-full bg-[#eee4d5]">
    <Image src={assetPath("/category-art/bundles-sets-products.png")} alt="" fill sizes="(max-width: 640px) 50vw, (max-width: 1279px) 33vw, 17vw" className="object-contain object-center p-1" />
  </div>;
}
