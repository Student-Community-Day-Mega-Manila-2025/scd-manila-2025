import Countdown from "@/components/common/countdown";
import EventInfo from "@/components/sections/event-info";
import Hero from "@/components/sections/hero";
import ProgramFlow from "@/components/sections/program-flow";
import Registration from "@/components/sections/registration";
import Venue from "@/components/sections/venue";

export default function Home() {
  return (
    <main className="space-y-12 overflow-hidden">
      <Hero />
      <Countdown />
      <EventInfo />
      <Venue />
      <ProgramFlow />
      {/* <Speakers /> */}
      {/* <SponsorsAndPartners /> */}
      {/* <FaqSection /> */}
      <Registration />
      {/* <MeetTheTeamSection /> */}
    </main>
  );
}
