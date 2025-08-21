import PlanCard from "../components/PlanCard";

const LandingPage = () => {
  const basicPlan = [
    "Access to All Features",
    "1k lookups / per month",
    "Email Support",
    "Community Access",
    "Basic Analytics",
  ];

  const standardPlan = [
    "Access to All Features",
    "10k lookups / per month",
    "Priority Email Support",
    "Community Access",
    "Advanced Analytics",
  ];

  const premiumPlan = [
    "Access to All Features",
    "Unlimited lookups / per month",
    "24/7 Support",
    "Community Access",
    "Premium Analytics",
  ];

  return (
    <div className="lg:bg-gradient-to-b from-transparent via-white to-yellow-300 min-h-screen flex items-center justify-center">
      <div className="flex lg:justify-center items-center h-[100vh] gap-6 flex-col lg:flex-row lg:mt-4 p-4">
        <PlanCard
          planName="Basic"
          para="For all individuals and starters who want to start with domaining."
          price="19"
          features={basicPlan}
        />

        <div className="lg:mb-[100px]">
          <PlanCard
            planName="Professional"
            para="For professional domain names investors with a big portfolio."
            price="49"
            features={standardPlan}
          />
        </div>
        <PlanCard
          planName="Premium"
          para="For all individuals and starters who want to start with domaining."
          price="99"
          features={premiumPlan}
        />
      </div>
    </div>
  );
};

export default LandingPage;
