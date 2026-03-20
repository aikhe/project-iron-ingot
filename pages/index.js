import Head from "next/head";
import Hero from "@/layouts/Hero";
import HeroFooterStripe from "@/layouts/HeroFooterStripe";
import CSBotSection from "@/layouts/CSBotSection";
import FeaturesList from "@/layouts/FeaturesList";
import AwardsSection from "@/layouts/AwardsSection";
import SecondaryStripe from "@/layouts/SecondaryStripe";
import AwardGallery from "@/layouts/AwardGallery";
import AwardsFooterStripe from "@/layouts/AwardsFooterStripe";
import LatestOnIngo from "@/layouts/LatestOnIngo";
import LatestOnIngoCards from "@/layouts/LatestOnIngoCards";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aikhe | Iron Ingot</title>
      </Head>

      <Hero />
      <HeroFooterStripe />
      <CSBotSection />
      <FeaturesList />
      <AwardsSection />
      <SecondaryStripe className="mt-0 mb-0" />
      <AwardGallery />
      <AwardsFooterStripe />
      <LatestOnIngo />
      <LatestOnIngoCards />
      <div className="h-[100vh] w-full" />
    </>
  );
}
