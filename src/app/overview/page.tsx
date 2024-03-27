import InfoCard from "../components/organisms/cards/overview/InfoCard";
import ScopeCard from "../components/organisms/cards/overview/ScopeCard";
import Header from "../components/templates/header";

const Overview = () => {
  return (
    <div className="flex flex-col h-screen bg-background6  relative ">
      <Header />
      <div className="py-8 px-12 space-y-4">
        <InfoCard />
        <ScopeCard name="Scope 1" link="/scope" status="ready" />
        <ScopeCard name="Scope 2" link="/scope" status="ready" />
        <ScopeCard name="Scope 3" link="/" status="Coming Soon" />
      </div>
    </div>
  );
};

export default Overview;
