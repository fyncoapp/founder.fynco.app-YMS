import { Calendar, DollarSign, TrendingUp, Target, Building2, CheckCircle2 } from "lucide-react";

const fundraisingRecommendation = {
  timing: "Q2 2025 (April-June)",
  amount: "$2.5M - $3.5M",
  rationale: "Based on your 14.2-month runway and strong growth metrics (+13.5%), optimal timing is 6-9 months before cash-out",
  readinessScore: 85,
};

const targetVCs = [
  {
    name: "Sequoia Capital",
    reason: "Recently invested in similar fintech SaaS",
    matchType: "Industry & Stage Match",
    recentInvestments: ["Stripe", "Plaid", "Mercury"],
    ticketSize: "$2M - $5M",
    portfolioGap: false,
  },
  {
    name: "Andreessen Horowitz (a16z)",
    reason: "Strong fintech portfolio, Series A focus",
    matchType: "Metrics Match",
    recentInvestments: ["Deel", "Ramp", "Brex"],
    ticketSize: "$3M - $8M",
    portfolioGap: false,
  },
  {
    name: "Bessemer Venture Partners",
    reason: "Missing AI-powered CFO tools in portfolio",
    matchType: "Portfolio Gap",
    recentInvestments: ["Toast", "Twilio", "LinkedIn"],
    ticketSize: "$1.5M - $4M",
    portfolioGap: true,
  },
  {
    name: "Index Ventures",
    reason: "Invested in similar ARR range companies",
    matchType: "Size Match",
    recentInvestments: ["Revolut", "Robinhood", "Figma"],
    ticketSize: "$2M - $6M",
    portfolioGap: false,
  },
  {
    name: "Accel Partners",
    reason: "No AI CFO solution in fintech portfolio",
    matchType: "Portfolio Gap",
    recentInvestments: ["Slack", "Atlassian", "Deliveroo"],
    ticketSize: "$2M - $5M",
    portfolioGap: true,
  },
  {
    name: "Lightspeed Venture Partners",
    reason: "Active in B2B SaaS, similar metrics focus",
    matchType: "Industry & Metrics",
    recentInvestments: ["Affirm", "Grubhub", "Snap"],
    ticketSize: "$1M - $4M",
    portfolioGap: false,
  },
];

const readinessChecklist = [
  { item: "12+ months financial projections", status: true },
  { item: "Clear unit economics (LTV:CAC > 3:1)", status: true },
  { item: "Pitch deck prepared", status: true },
  { item: "3+ years product roadmap", status: false },
  { item: "Data room organized", status: false },
  { item: "Cap table clean", status: true },
];

export function Fundraising() {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Fundraising Recommendation Card */}
      <div className="glass-card rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-4 sm:p-6 lg:p-8 shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border-primary/20 bg-primary/5">
        <div className="space-y-5">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-[18px] sm:text-[20px] font-[500] text-foreground mb-4">
                Fundraising Recommendation
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-[12px] bg-background/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <p className="text-[12px] text-muted-foreground">Optimal Timing</p>
                  </div>
                  <p className="text-[20px] font-[300] text-foreground">{fundraisingRecommendation.timing}</p>
                </div>
                
                <div className="p-4 rounded-[12px] bg-background/50">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="h-4 w-4 text-primary" />
                    <p className="text-[12px] text-muted-foreground">Recommended Amount</p>
                  </div>
                  <p className="text-[20px] font-[300] text-foreground">{fundraisingRecommendation.amount}</p>
                </div>
              </div>

              <div className="mt-4 p-4 rounded-[12px] bg-background/50">
                <p className="text-[13px] text-foreground/80 leading-relaxed">
                  <span className="font-[500]">Rationale:</span> {fundraisingRecommendation.rationale}
                </p>
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[13px] text-muted-foreground">Fundraising Readiness</span>
                  <span className="text-[16px] font-[500] text-primary">{fundraisingRecommendation.readinessScore}%</span>
                </div>
                <div className="h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all"
                    style={{ width: `${fundraisingRecommendation.readinessScore}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Readiness Checklist */}
      <div className="glass-card rounded-[16px] sm:rounded-[20px] p-4 sm:p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
        <div className="flex items-center gap-2 mb-5">
          <CheckCircle2 className="h-5 w-5 text-muted-foreground" />
          <h3 className="text-[16px] font-[400] text-foreground">Fundraising Readiness Checklist</h3>
        </div>

        <div className="space-y-3">
          {readinessChecklist.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-3 rounded-[10px] border ${
                item.status
                  ? "bg-primary/5 border-primary/20"
                  : "bg-secondary/30 border-border"
              }`}
            >
              <span className={`text-[13px] ${item.status ? "text-foreground" : "text-muted-foreground"}`}>
                {item.item}
              </span>
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center ${
                  item.status ? "bg-primary" : "bg-border"
                }`}
              >
                {item.status && <CheckCircle2 className="h-3 w-3 text-white" />}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Target VCs Section */}
      <div className="glass-card rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-4 sm:p-6 lg:p-8 shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
        <div className="space-y-5">
          <div>
            <p className="text-[11px] sm:text-[12px] text-muted-foreground tracking-wide uppercase mb-1">
              Investment Opportunities
            </p>
            <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-[300] tracking-tight text-foreground">
              Recommended Venture Capital Firms
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {targetVCs.map((vc, index) => (
              <div
                key={index}
                className={`p-4 sm:p-5 rounded-[14px] border transition-all hover:border-primary/40 ${
                  vc.portfolioGap
                    ? "bg-primary/5 border-primary/30"
                    : "bg-secondary/30 border-border"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Building2 className={`h-5 w-5 ${vc.portfolioGap ? "text-primary" : "text-muted-foreground"}`} />
                    <h4 className="text-[15px] font-[500] text-foreground">{vc.name}</h4>
                  </div>
                  {vc.portfolioGap && (
                    <span className="text-[10px] px-2 py-1 rounded-[6px] bg-primary text-white">
                      Gap Opportunity
                    </span>
                  )}
                </div>

                <p className="text-[13px] text-foreground/80 mb-3 leading-relaxed">{vc.reason}</p>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-muted-foreground">Match Type</span>
                    <span className="text-[12px] text-foreground font-[500]">{vc.matchType}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-muted-foreground">Ticket Size</span>
                    <span className="text-[12px] text-foreground font-[500]">{vc.ticketSize}</span>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-border">
                  <p className="text-[11px] text-muted-foreground mb-1.5">Recent Portfolio:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {vc.recentInvestments.map((investment, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-1 rounded-[6px] bg-background border border-border text-foreground"
                      >
                        {investment}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="glass-card rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-4 sm:p-6 lg:p-8 shadow-[0px_2px_8px_rgba(0,0,0,0.04)] bg-primary/5 border-primary/20">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-[16px] sm:text-[18px] font-[500] text-foreground mb-2">
                Fundraising Strategy Insights
              </h3>
              <ul className="space-y-2 text-[13px] sm:text-[14px] text-foreground/80 leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-primary flex-shrink-0">•</span>
                  <span>
                    <strong>Portfolio Gap Strategy:</strong> Bessemer and Accel show strong interest signals - they lack AI CFO tools in their fintech portfolios
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary flex-shrink-0">•</span>
                  <span>
                    <strong>Timing Advantage:</strong> Start conversations 3-4 months before target close (January 2025) to build relationships
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary flex-shrink-0">•</span>
                  <span>
                    <strong>Valuation Position:</strong> Your LTV:CAC of 15.7:1 and growth rate support a $12M-$15M pre-money valuation
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary flex-shrink-0">•</span>
                  <span>
                    <strong>Action Items:</strong> Complete your 3-year roadmap and organize data room to reach 95%+ readiness before outreach
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
