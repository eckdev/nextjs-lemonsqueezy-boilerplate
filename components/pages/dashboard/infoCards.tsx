import InfoCard from "@/components/ui/card/info-card";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import React from "react";

const InfoCards = () => {
  return (
    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 mb-8">
      <InfoCard
        title="Total Revenue"
        value="$45,231.89"
        infoText="+20.1% from last month"
        icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
      />
      <InfoCard
        title="Subscription"
        value="+2350"
        infoText="+180.1% from last month"
        icon={<Users className="h-4 w-4 text-muted-foreground" />}
      />
      <InfoCard
        title="Sales"
        value="+12,234"
        infoText="+20.1% from last month"
        icon={<CreditCard className="h-4 w-4 text-muted-foreground" />}
      />
    </div>
  );
};

export default InfoCards;
