import Head from "next/head";
import Hero from "@/layouts/Hero";
import HeroFooterStripe from "@/layouts/HeroFooterStripe";
import CSBotSection from "@/layouts/CSBotSection";
import FeaturesList from "@/layouts/FeaturesList";
import AwardsSection from "@/layouts/AwardsSection";
import SecondaryStripe from "@/layouts/SecondaryStripe";
import AwardGallery from "@/layouts/AwardGallery";
import SectionStripe from "@/components/SectionStripe";
import LatestOnIngo from "@/layouts/LatestOnIngo";
import LatestOnIngoCards from "@/layouts/LatestOnIngoCards";
import MeetCouncilTicker from "@/layouts/MeetCouncilTicker";
import MeetCouncilAdviser from "@/layouts/MeetCouncilAdviser";
import MeetCouncilOfficers from "@/layouts/MeetCouncilOfficers";
import MeetCouncilAbout from "@/layouts/MeetCouncilAbout";
import MeetCouncilFAQ from "@/layouts/MeetCouncilFAQ";

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
      <SectionStripe className="mt-[4rem]" />
      <LatestOnIngo />
      <LatestOnIngoCards />
      <SectionStripe className="mt-[6rem]" />
      <MeetCouncilTicker />
      <MeetCouncilAdviser />
      <MeetCouncilOfficers />
      <MeetCouncilAbout />
      <SectionStripe className="mt-[4rem]" />
      <MeetCouncilFAQ />
      <div className="h-[100vh] w-full" />
    </>
  );
}
