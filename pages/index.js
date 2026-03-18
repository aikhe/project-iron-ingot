import Head from "next/head";
import Hero from "@/layouts/Hero";
import HeroFooterStripe from "@/layouts/HeroFooterStripe";
import CSBotSection from "@/layouts/CSBotSection";
import FeaturesList from "@/layouts/FeaturesList";

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
    </>
  );
}
