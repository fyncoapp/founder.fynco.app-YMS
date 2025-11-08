import { Sparkles, AlertTriangle, TrendingUp, Target, Zap } from "lucide-react";
import { Button } from "./ui/button";

const predictions = [
  {
    title: "Revenue Forecast",
    prediction: "Projected to reach $2.4M ARR by Q4 2026",
    confidence: "92%",
    impact: "High",
    icon: TrendingUp,
  },
  {
    title: "Fundraising Timing",
    prediction: "Optimal fundraising window: Q1 2026",
    confidence: "87%",
    impact: "Critical",
    icon: Target,
  },
  {
    title: "Burn Rate Optimization",
    prediction: "Potential 15% cost reduction identified",
    confidence: "94%",
    impact: "Medium",
    icon: Zap,
  },
];

const recommendations = [
  {
    priority: "High",
    title: "Accelerate Fundraising Timeline",
    description: "Market conditions favor raising capital in Q1 2026. Competitor activity suggests acting within 90 days.",
    action: "Prepare Series A materials"
  },
  {
    priority: "High",
    title: "Optimize Customer Acquisition",
    description: "Your CAC decreased 12% while LTV increased 18%. Scale marketing spend by 25% to capitalize on efficiency gains.",
    action: "Review marketing budget"
  },
  {
    priority: "Medium",
    title: "Expand Option Pool",
    description: "Increase option pool to 20% before next funding round to attract senior talent without additional dilution.",
    action: "Discuss with board"
  },
  {
    priority: "Medium",
    title: "Explore R&D Tax Credits",
    description: "Based on your engineering spend, you may qualify for up to $45k in R&D tax credits for 2025.",
    action: "Consult tax advisor"
  },
];

export function AIInsights() {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* AI Analysis Engine Summary */}
      <div className="glass-card rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-4 sm:p-6 lg:p-8 shadow-[0px_2px_8px_rgba(0,0,0,0.04)] bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-[300] tracking-tight text-foreground mb-2">
                AI-Powered Financial Analysis
              </h3>
              <p className="text-[13px] sm:text-[14px] text-foreground/80 leading-relaxed">
                Our AI engine has analyzed your financial data, market conditions, and 10,000+ comparable companies 
                to generate personalized insights and recommendations for your business.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* AI Predictions */}
      <div className="glass-card rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-4 sm:p-6 lg:p-8 shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
        <div className="space-y-4 sm:space-y-5">
          <div>
            <p className="text-[11px] sm:text-[12px] text-muted-foreground tracking-wide uppercase mb-1">
              Machine Learning
            </p>
            <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-[300] tracking-tight text-foreground">
              AI Predictions
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {predictions.map((pred, index) => {
              const Icon = pred.icon;
              return (
                <div
                  key={index}
                  className="p-5 rounded-[16px] bg-secondary/30 border border-border hover:border-primary/20 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-right">
                      <p className="text-[11px] text-muted-foreground mb-0.5">Confidence</p>
                      <p className="text-[13px] font-[500] text-primary">{pred.confidence}</p>
                    </div>
                  </div>
                  <h4 className="text-[15px] font-[500] text-foreground mb-2">{pred.title}</h4>
                  <p className="text-[13px] text-foreground/80 mb-3 leading-relaxed">{pred.prediction}</p>
                  <span className={`text-[11px] px-2 py-1 rounded-full inline-block ${
                    pred.impact === "Critical" ? "bg-destructive/10 text-destructive" :
                    pred.impact === "High" ? "bg-primary/10 text-primary" :
                    "bg-accent/20 text-accent-foreground"
                  }`}>
                    {pred.impact} Impact
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Strategic Recommendations */}
      <div className="glass-card rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-4 sm:p-6 lg:p-8 shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
        <div className="space-y-4 sm:space-y-5">
          <div>
            <p className="text-[11px] sm:text-[12px] text-muted-foreground tracking-wide uppercase mb-1">
              Action Items
            </p>
            <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-[300] tracking-tight text-foreground">
              Strategic Recommendations
            </h3>
          </div>

          <div className="space-y-3">
            {recommendations.map((rec, index) => (
              <div
                key={index}
                className="p-5 rounded-[16px] bg-secondary/20 border border-border hover:border-primary/20 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-[11px] px-2 py-0.5 rounded-full ${
                        rec.priority === "High" 
                          ? "bg-destructive/10 text-destructive" 
                          : "bg-accent/20 text-accent-foreground"
                      }`}>
                        {rec.priority} Priority
                      </span>
                      {rec.priority === "High" && (
                        <AlertTriangle className="h-4 w-4 text-destructive" />
                      )}
                    </div>
                    <h4 className="text-[15px] font-[500] text-foreground mb-2">{rec.title}</h4>
                    <p className="text-[13px] text-foreground/80 leading-relaxed mb-3">{rec.description}</p>
                    <p className="text-[12px] text-primary">Suggested action: {rec.action}</p>
                  </div>
                  <Button variant="outline" size="sm" className="self-start sm:self-auto">
                    Review
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Run Analysis CTA */}
      <div className="glass-card rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-6 sm:p-8 shadow-[0px_2px_8px_rgba(0,0,0,0.04)] text-center bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
        <h3 className="text-[18px] sm:text-[20px] font-[500] text-foreground mb-2">
          Run Comprehensive Analysis
        </h3>
        <p className="text-[13px] sm:text-[14px] text-muted-foreground mb-5">
          Get deeper insights by running a full AI analysis on your complete financial dataset
        </p>
        <Button className="px-8">
          <Sparkles className="h-4 w-4 mr-2" />
          Run Full Analysis
        </Button>
        <p className="text-[11px] sm:text-[12px] text-muted-foreground">Run comprehensive financial analysis</p>
      </div>
    </div>
  );
}
