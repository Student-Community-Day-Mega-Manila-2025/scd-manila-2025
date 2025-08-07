import Countdown from "@/components/common/countdown";
import FaqSection from "@/components/sections/faqs";
import Hero from "@/components/sections/hero";
import MeetTheTeamSection from "@/components/sections/meet-the-team";
import ProgramFlow from "@/components/sections/program-flow";
import Registration from "@/components/sections/registration";
import Speakers from "@/components/sections/speakers";
import SponsorsAndPartners from "@/components/sections/sponsors-and-partners";
import Venue from "@/components/sections/venue";

export default function Home() {
  return (
    <main className="space-y-12">
      <Hero />
      <Countdown />
      {/* <EventInfo /> */}
      <Venue />
      <ProgramFlow />
      <Speakers />
      <SponsorsAndPartners />
      <FaqSection />
      <Registration />
      <MeetTheTeamSection />
    </main>
  );
}
