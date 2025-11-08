import { useState } from "react";
import { Target, TrendingUp, Save } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const impactAreas = [
  { area: "Cash Flow", impact: "Extended runway projection by 2.5 months" },
  { area: "Shareholding", impact: "Adjusted for planned option pool expansion" },
  { area: "Tax Planning", impact: "Incorporated R&D credit projections" },
  { area: "Profitability", impact: "Adjusted for CAC reduction targets" },
];

export function FoundersInput() {
  const [businessGoal, setBusinessGoal] = useState("");
  const [milestone, setMilestone] = useState("");
  const [challenges, setChallenges] = useState("");
  const [questions, setQuestions] = useState("");

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Input Form */}
      <div className="glass-card rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-4 sm:p-6 lg:p-8 shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
        <div className="space-y-4 sm:space-y-5">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Target className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            </div>
            <div>
              <p className="text-[11px] sm:text-[12px] text-muted-foreground tracking-wide uppercase mb-1">
                Strategic Planning
              </p>
              <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-[300] tracking-tight text-foreground">
                Share Your Business Goals
              </h3>
              <p className="text-[13px] sm:text-[14px] text-muted-foreground mt-2">
                Help our AI understand your objectives to provide more personalized recommendations
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="business-goal" className="text-[13px] text-foreground">
                Primary Business Goal (Next 12 Months)
              </Label>
              <Input
                id="business-goal"
                value={businessGoal}
                onChange={(e) => setBusinessGoal(e.target.value)}
                placeholder="e.g., Reach $5M ARR, Raise Series A, Expand to US market"
                className="text-[14px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="milestone" className="text-[13px] text-foreground">
                Next Major Milestone
              </Label>
              <Input
                id="milestone"
                value={milestone}
                onChange={(e) => setMilestone(e.target.value)}
                placeholder="e.g., Launch enterprise tier, Achieve profitability, Hit 100 customers"
                className="text-[14px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="challenges" className="text-[13px] text-foreground">
                Current Challenges
              </Label>
              <Textarea
                id="challenges"
                value={challenges}
                onChange={(e) => setChallenges(e.target.value)}
                placeholder="Describe any challenges or concerns you're facing..."
                rows={4}
                className="text-[14px] resize-none"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="questions" className="text-[13px] text-foreground">
                Questions for AI CFO
              </Label>
              <Textarea
                id="questions"
                value={questions}
                onChange={(e) => setQuestions(e.target.value)}
                placeholder="What would you like to know about your financials?"
                rows={4}
                className="text-[14px] resize-none"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <Button className="flex-1">
                <Save className="h-4 w-4 mr-2" />
                Save Goals
              </Button>
              <Button variant="outline" className="flex-1">
                Generate AI Report
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Summary */}
      <div className="glass-card rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-4 sm:p-6 lg:p-8 shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
        <div className="space-y-4 sm:space-y-5">
          <div>
            <p className="text-[11px] sm:text-[12px] text-muted-foreground tracking-wide uppercase mb-1">
              Dashboard Updates
            </p>
            <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-[300] tracking-tight text-foreground">
              Impact of Your Latest Inputs
            </h3>
          </div>

          <div className="space-y-3">
            {impactAreas.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-[14px] bg-secondary/30 border border-border hover:border-primary/20 transition-all flex items-start gap-3"
              >
                <TrendingUp className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[14px] font-[500] text-foreground mb-1">{item.area}</p>
                  <p className="text-[13px] text-muted-foreground">{item.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Response Example */}
      <div className="glass-card rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-4 sm:p-6 lg:p-8 shadow-[0px_2px_8px_rgba(0,0,0,0.04)] bg-primary/5 border-primary/20">
        <div className="space-y-4">
          <div>
            <h3 className="text-[16px] sm:text-[18px] font-[500] text-foreground mb-2 flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              AI Analysis Based on Your Goals
            </h3>
            <div className="space-y-3 text-[13px] sm:text-[14px] text-foreground/80 leading-relaxed">
              <p>
                <strong className="text-foreground">Goal Alignment:</strong> Your objective to raise Series A funding 
                aligns well with your current metrics. With 14.2 months runway and strong unit economics 
                (LTV:CAC of 15.7:1), you're in a strong position to approach investors.
              </p>
              <p>
                <strong className="text-foreground">Recommended Timeline:</strong> Based on current burn rate and 
                market conditions, we recommend initiating fundraising conversations in Q1 2026. This timing 
                allows you to raise from a position of strength while maintaining 9-12 months runway buffer.
              </p>
              <p>
                <strong className="text-foreground">Key Milestones Before Fundraising:</strong>
              </p>
              <ul className="space-y-1.5 ml-5">
                <li className="flex gap-2">
                  <span className="text-primary flex-shrink-0">•</span>
                  <span>Reach $200k MRR (currently at $168k - 81% there)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary flex-shrink-0">•</span>
                  <span>Expand customer base to 120+ (2-3 enterprise clients recommended)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary flex-shrink-0">•</span>
                  <span>Demonstrate 15%+ MoM growth for 3 consecutive months</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary flex-shrink-0">•</span>
                  <span>Prepare comprehensive data room and update cap table</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="glass-card rounded-[14px] p-5 shadow-[0px_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0px_4px_12px_rgba(0,0,0,0.06)] transition-all cursor-pointer border border-transparent hover:border-primary/20">
          <h4 className="text-[14px] font-[500] text-foreground mb-2">Update Financial Targets</h4>
          <p className="text-[12px] text-muted-foreground mb-3">Adjust revenue and growth projections</p>
          <Button variant="outline" size="sm" className="w-full">
            Update Targets
          </Button>
        </div>

        <div className="glass-card rounded-[14px] p-5 shadow-[0px_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0px_4px_12px_rgba(0,0,0,0.06)] transition-all cursor-pointer border border-transparent hover:border-primary/20">
          <h4 className="text-[14px] font-[500] text-foreground mb-2">Schedule Review</h4>
          <p className="text-[12px] text-muted-foreground mb-3">Set up monthly AI-powered review</p>
          <Button variant="outline" size="sm" className="w-full">
            Schedule Review
          </Button>
        </div>

        <div className="glass-card rounded-[14px] p-5 shadow-[0px_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0px_4px_12px_rgba(0,0,0,0.06)] transition-all cursor-pointer border border-transparent hover:border-primary/20">
          <h4 className="text-[14px] font-[500] text-foreground mb-2">Export Insights</h4>
          <p className="text-[12px] text-muted-foreground mb-3">Download AI recommendations report</p>
          <Button variant="outline" size="sm" className="w-full">
            Export PDF
          </Button>
        </div>
      </div>
    </div>
  );
}
