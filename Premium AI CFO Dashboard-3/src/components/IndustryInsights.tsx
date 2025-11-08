import { TrendingUp, Users, DollarSign } from "lucide-react";

const insights = [
  {
    category: "Market Size",
    title: "SaaS Market Growth",
    value: "$197B",
    change: "+18% YoY",
    description: "Global SaaS market expected to reach $197B in 2026",
    icon: DollarSign,
  },
  {
    category: "Competition",
    title: "New Entrants",
    value: "23",
    change: "+15% vs Q3",
    description: "New competitors identified in your sector this quarter",
    icon: Users,
  },
  {
    category: "Funding Trends",
    title: "Average Series A",
    value: "$12.5M",
    change: "+8% vs 2025",
    description: "Median Series A round size for B2B SaaS companies",
    icon: TrendingUp,
  },
];

const marketData = [
  {
    metric: "Customer Churn Industry Avg",
    value: "5.2%",
    yourValue: "2.1%",
    status: "Outperforming"
  },
  {
    metric: "CAC Payback Period",
    value: "8.5 months",
    yourValue: "3.2 months",
    status: "Outperforming"
  },
  {
    metric: "Gross Margin",
    value: "68%",
    yourValue: "72%",
    status: "Above Average"
  },
  {
    metric: "Net Revenue Retention",
    value: "105%",
    yourValue: "118%",
    status: "Excellent"
  },
];

export function IndustryInsights() {
  return (
    <div className="glass-card rounded-[16px] sm:rounded-[24px] p-4 sm:p-6 lg:p-8 shadow-[0px_2px_8px_rgba(0,0,0,0.04)] transition-all hover:shadow-[0px_4px_16px_rgba(0,0,0,0.06)]">
      <div className="space-y-4 sm:space-y-6">
        <div>
          <p className="text-[11px] sm:text-[12px] text-muted-foreground tracking-wide uppercase mb-1">
            Market Intelligence
          </p>
          <h3 className="text-[20px] sm:text-[24px] lg:text-[32px] font-[300] tracking-tight text-foreground">
            Industry Insights
          </h3>
        </div>

        {/* Key Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <div
                key={index}
                className="p-5 rounded-[16px] bg-secondary/30 border border-border hover:border-primary/20 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-[11px] text-primary uppercase tracking-wide">{insight.category}</span>
                </div>
                <h4 className="text-[15px] font-[500] text-foreground mb-2">{insight.title}</h4>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-[24px] font-[300] text-foreground">{insight.value}</span>
                  <span className="text-[12px] text-primary">{insight.change}</span>
                </div>
                <p className="text-[12px] text-muted-foreground leading-relaxed">{insight.description}</p>
              </div>
            );
          })}
        </div>

        {/* Benchmark Comparison */}
        <div>
          <h4 className="text-[16px] sm:text-[18px] font-[500] text-foreground mb-4">
            Your Performance vs Industry Benchmarks
          </h4>
          <div className="space-y-3">
            {marketData.map((data, index) => (
              <div
                key={index}
                className="p-4 rounded-[14px] bg-secondary/20 border border-border"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex-1">
                    <p className="text-[13px] sm:text-[14px] text-foreground mb-1">{data.metric}</p>
                    <div className="flex items-center gap-4">
                      <div>
                        <span className="text-[11px] text-muted-foreground">Industry: </span>
                        <span className="text-[13px] text-foreground">{data.value}</span>
                      </div>
                      <div>
                        <span className="text-[11px] text-muted-foreground">You: </span>
                        <span className="text-[13px] text-primary font-[500]">{data.yourValue}</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[12px] px-3 py-1 rounded-full bg-primary/10 text-primary inline-block self-start sm:self-center">
                    {data.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
