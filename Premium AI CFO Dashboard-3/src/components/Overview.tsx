import { useState } from "react";
import { AlertTriangle, TrendingUp, TrendingDown, Flame, DollarSign, Calendar, Target, Zap, Newspaper, BarChart3 } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Line, LineChart } from "recharts@2.15.2";

const cashflowData = [
  { month: "Jan", base: 450000, best: 480000, worst: 420000 },
  { month: "Feb", base: 520000, best: 560000, worst: 490000 },
  { month: "Mar", base: 480000, best: 510000, worst: 450000 },
  { month: "Apr", base: 610000, best: 650000, worst: 570000 },
  { month: "May", base: 580000, best: 620000, worst: 540000 },
  { month: "Jun", base: 650000, best: 690000, worst: 610000 },
  { month: "Jul", base: 720000, best: 770000, worst: 680000 },
  { month: "Aug", base: 680000, best: 720000, worst: 640000 },
  { month: "Sep", base: 750000, best: 800000, worst: 710000 },
  { month: "Oct", base: 820000, best: 880000, worst: 780000 },
  { month: "Nov", base: 780000, best: 830000, worst: 730000 },
  { month: "Dec", base: 850000, best: 910000, worst: 800000 },
];

const revenueData = [
  { month: "Jan", revenue: 120000 },
  { month: "Feb", revenue: 135000 },
  { month: "Mar", revenue: 128000 },
  { month: "Apr", revenue: 155000 },
  { month: "May", revenue: 148000 },
  { month: "Jun", revenue: 168000 },
  { month: "Jul", revenue: 185000 },
  { month: "Aug", revenue: 178000 },
  { month: "Sep", revenue: 195000 },
  { month: "Oct", revenue: 212000 },
  { month: "Nov", revenue: 225000 },
  { month: "Dec", revenue: 240000 },
];

const newsHighlights = [
  {
    source: "Financial Times",
    title: "Tech valuations stabilize amid rate optimism",
    time: "2h ago",
    url: "#"
  },
  {
    source: "Bloomberg",
    title: "SaaS companies see 15% increase in Q4 funding",
    time: "4h ago",
    url: "#"
  },
  {
    source: "TechCrunch",
    title: "AI startups attract record investment levels",
    time: "6h ago",
    url: "#"
  },
];

const aiInsights = [
  {
    icon: Zap,
    title: "Cash Optimization",
    message: "Shifting $28k from low-ROI marketing to product could extend runway by 1.8 months",
    type: "success" as const,
  },
  {
    icon: Target,
    title: "Growth Opportunity",
    message: "Your customer acquisition cost dropped 23% — perfect time to scale marketing",
    type: "info" as const,
  },
  {
    icon: AlertTriangle,
    title: "Burn Alert",
    message: "At current pace, you'll need funding by Q2 2026. Start conversations in 60 days.",
    type: "warning" as const,
  },
];

export function Overview() {
  const [chartView, setChartView] = useState<"base" | "scenarios">("scenarios");

  return (
    <div className="space-y-6">
      {/* Critical Alert Banner */}
      <div className="glass-card border-[#F7931A]/30 bg-gradient-to-r from-[#FFF4E6] to-[#FFF8F0] backdrop-blur-sm rounded-[20px] p-6 shadow-[0px_4px_16px_rgba(247,147,26,0.1)] border">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-[#F7931A]/10 flex items-center justify-center flex-shrink-0 ring-2 ring-[#F7931A]/20">
            <AlertTriangle className="h-6 w-6 text-[#F7931A]" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-[18px] text-[#12191A]">
                Critical Insight: Competitor Activity Detected
              </h3>
            </div>
            <p className="text-[14px] text-[#12191A]/80 leading-relaxed mb-3">
              A well-funded competitor entered your sector with $15M Series A. With your 14.2-month runway, consider initiating fundraising conversations in Q1 2026 to maintain competitive advantage.
            </p>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 bg-[#F7931A] hover:bg-[#F7931A]/90 text-white rounded-[10px] text-[13px] transition-colors">
                View Recommendation
              </button>
              <button className="px-4 py-2 text-[#F7931A] hover:bg-[#F7931A]/10 rounded-[10px] text-[13px] transition-colors">
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Cash Balance */}
        <div className="glass-card rounded-[20px] p-6 shadow-[0px_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0px_4px_20px_rgba(0,0,0,0.08)] transition-all border border-transparent hover:border-primary/20">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[12px] text-muted-foreground uppercase tracking-wide">Cash Balance</p>
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <DollarSign className="w-4 h-4 text-primary" />
            </div>
          </div>
          <p className="text-[32px] font-[300] text-foreground mb-2">$850k</p>
          <div className="flex items-center gap-1 text-[#10B981]">
            <TrendingUp className="h-4 w-4" />
            <span className="text-[13px]">+8.9% vs last month</span>
          </div>
        </div>

        {/* Monthly Burn */}
        <div className="glass-card rounded-[20px] p-6 shadow-[0px_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0px_4px_20px_rgba(0,0,0,0.08)] transition-all border border-transparent hover:border-primary/20">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[12px] text-muted-foreground uppercase tracking-wide">Monthly Burn</p>
            <div className="w-8 h-8 rounded-full bg-[#F7931A]/10 flex items-center justify-center">
              <Flame className="w-4 h-4 text-[#F7931A]" />
            </div>
          </div>
          <p className="text-[32px] font-[300] text-foreground mb-2">$60k</p>
          <div className="flex items-center gap-1 text-[#10B981]">
            <TrendingDown className="h-4 w-4" />
            <span className="text-[13px]">-5.2% reduction</span>
          </div>
        </div>

        {/* Runway */}
        <div className="glass-card rounded-[20px] p-6 shadow-[0px_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0px_4px_20px_rgba(0,0,0,0.08)] transition-all border border-transparent hover:border-primary/20">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[12px] text-muted-foreground uppercase tracking-wide">Runway</p>
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Calendar className="w-4 h-4 text-primary" />
            </div>
          </div>
          <p className="text-[32px] font-[300] text-primary mb-2">14.2mo</p>
          <p className="text-[13px] text-muted-foreground">Until Apr 2027</p>
        </div>

        {/* Growth */}
        <div className="glass-card rounded-[20px] p-6 shadow-[0px_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0px_4px_20px_rgba(0,0,0,0.08)] transition-all border border-transparent hover:border-primary/20">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[12px] text-muted-foreground uppercase tracking-wide">Growth</p>
            <div className="w-8 h-8 rounded-full bg-[#10B981]/10 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-[#10B981]" />
            </div>
          </div>
          <p className="text-[32px] font-[300] text-foreground mb-2">+13.5%</p>
          <p className="text-[13px] text-muted-foreground">MoM revenue</p>
        </div>

        {/* Break-even */}
        <div className="glass-card rounded-[20px] p-6 shadow-[0px_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0px_4px_20px_rgba(0,0,0,0.08)] transition-all border border-transparent hover:border-primary/20">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[12px] text-muted-foreground uppercase tracking-wide">Break-even</p>
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Target className="w-4 h-4 text-primary" />
            </div>
          </div>
          <p className="text-[32px] font-[300] text-foreground mb-2">8 mo</p>
          <p className="text-[13px] text-muted-foreground">At current pace</p>
        </div>
      </div>

      {/* 12-Month Forecast Chart */}
      <div className="glass-card rounded-[20px] p-8 shadow-[0px_2px_12px_rgba(0,0,0,0.04)] border border-border/50">
        <div className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-[12px] text-muted-foreground tracking-wide uppercase mb-1">
                AI-Powered Forecast
              </p>
              <h3 className="text-[24px] font-[300] tracking-tight text-foreground">
                12-Month Cash Flow Projection
              </h3>
            </div>
            <div className="flex items-center gap-2 p-1 bg-secondary/50 rounded-[12px]">
              <button
                onClick={() => setChartView("base")}
                className={`px-4 py-2 rounded-[10px] text-[13px] transition-all ${
                  chartView === "base"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Base Case
              </button>
              <button
                onClick={() => setChartView("scenarios")}
                className={`px-4 py-2 rounded-[10px] text-[13px] transition-all ${
                  chartView === "scenarios"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Scenarios
              </button>
            </div>
          </div>

          <div className="h-[320px] -mx-4">
            <ResponsiveContainer width="100%" height="100%">
              {chartView === "scenarios" ? (
                <AreaChart data={cashflowData}>
                  <defs>
                    <linearGradient id="baseGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#143A43" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#143A43" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="rangeGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#E9ECEF" stopOpacity={0.6} />
                      <stop offset="95%" stopColor="#E9ECEF" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#59696C", fontSize: 11 }}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#59696C", fontSize: 11 }}
                    tickFormatter={(value) => `$${value / 1000}k`}
                    dx={-10}
                    width={60}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(254, 254, 254, 0.95)",
                      border: "1px solid rgba(18, 25, 26, 0.1)",
                      borderRadius: "12px",
                      padding: "12px",
                      fontSize: "12px",
                      boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                    }}
                    formatter={(value, name) => {
                      const labels: Record<string, string> = {
                        base: "Base Case",
                        best: "Best Case",
                        worst: "Worst Case",
                      };
                      return [`$${Number(value).toLocaleString()}`, labels[name as string] || name];
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="worst"
                    stroke="transparent"
                    fill="url(#rangeGradient)"
                    stackId="1"
                  />
                  <Area
                    type="monotone"
                    dataKey="best"
                    stroke="transparent"
                    fill="url(#rangeGradient)"
                    stackId="2"
                  />
                  <Line
                    type="monotone"
                    dataKey="base"
                    stroke="#143A43"
                    strokeWidth={3}
                    dot={{ fill: "#143A43", strokeWidth: 2, r: 4 }}
                  />
                </AreaChart>
              ) : (
                <LineChart data={cashflowData}>
                  <defs>
                    <linearGradient id="singleGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#143A43" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#143A43" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#59696C", fontSize: 11 }}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#59696C", fontSize: 11 }}
                    tickFormatter={(value) => `$${value / 1000}k`}
                    dx={-10}
                    width={60}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(254, 254, 254, 0.95)",
                      border: "1px solid rgba(18, 25, 26, 0.1)",
                      borderRadius: "12px",
                      padding: "12px",
                      fontSize: "12px",
                      boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                    }}
                    formatter={(value) => [`$${Number(value).toLocaleString()}`, "Cash Balance"]}
                  />
                  <Line
                    type="monotone"
                    dataKey="base"
                    stroke="#143A43"
                    strokeWidth={3}
                    dot={{ fill: "#143A43", strokeWidth: 2, r: 4 }}
                    fill="url(#singleGradient)"
                  />
                </LineChart>
              )}
            </ResponsiveContainer>
          </div>

          <div className="pt-4 border-t border-border grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#143A43]"></div>
              <span className="text-[12px] text-muted-foreground">Base projection</span>
            </div>
            {chartView === "scenarios" && (
              <>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#E9ECEF]"></div>
                  <span className="text-[12px] text-muted-foreground">Best/Worst case range</span>
                </div>
              </>
            )}
            <div className="text-[12px] text-muted-foreground sm:text-right">
              Funding required by: <span className="text-foreground">Q2 2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* AI Insights Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {aiInsights.map((insight, index) => {
          const Icon = insight.icon;
          const colors = {
            success: { bg: "#EEF9F2", icon: "#10B981", border: "#10B981/20" },
            info: { bg: "#EFF6FF", icon: "#3B82F6", border: "#3B82F6/20" },
            warning: { bg: "#FFF4E6", icon: "#F7931A", border: "#F7931A/20" },
          };
          const color = colors[insight.type];

          return (
            <div
              key={index}
              className="glass-card rounded-[16px] p-5 shadow-[0px_2px_12px_rgba(0,0,0,0.04)] border border-border/50 hover:shadow-[0px_4px_16px_rgba(0,0,0,0.08)] transition-all"
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: color.bg }}
                >
                  <Icon className="w-5 h-5" style={{ color: color.icon }} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-[14px] text-foreground mb-1">{insight.title}</h4>
                  <p className="text-[12px] text-muted-foreground leading-relaxed">
                    {insight.message}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Today's News Highlights */}
      <div className="glass-card rounded-[20px] p-8 shadow-[0px_2px_12px_rgba(0,0,0,0.04)] border border-border/50">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#EFF6FF] flex items-center justify-center">
              <Newspaper className="w-5 h-5 text-[#3B82F6]" />
            </div>
            <div>
              <p className="text-[12px] text-muted-foreground tracking-wide uppercase mb-1">
                Market Intelligence
              </p>
              <h3 className="text-[20px] font-[300] tracking-tight text-foreground">
                Today's News Highlights
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {newsHighlights.map((news, index) => (
              <a
                key={index}
                href={news.url}
                className="p-5 rounded-[16px] bg-secondary/30 hover:bg-secondary/50 transition-all cursor-pointer border border-transparent hover:border-primary/20 group"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span className="text-[11px] text-primary uppercase tracking-wide">
                    {news.source}
                  </span>
                  <span className="text-[11px] text-muted-foreground">
                    {news.time}
                  </span>
                </div>
                <p className="text-[14px] text-foreground leading-relaxed group-hover:text-primary transition-colors">
                  {news.title}
                </p>
              </a>
            ))}
          </div>

          <button className="w-full pt-4 border-t border-border text-[13px] text-primary hover:text-primary/80 transition-colors">
            View All Market Insights →
          </button>
        </div>
      </div>

      {/* Revenue Growth Chart */}
      <div className="glass-card rounded-[20px] p-8 shadow-[0px_2px_12px_rgba(0,0,0,0.04)] border border-border/50">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#EEF9F2] flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-[#10B981]" />
            </div>
            <div>
              <p className="text-[12px] text-muted-foreground tracking-wide uppercase mb-1">
                Revenue Growth
              </p>
              <h3 className="text-[20px] font-[300] tracking-tight text-foreground">
                Monthly Revenue Trend
              </h3>
            </div>
          </div>

          <div className="h-[280px] -mx-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10B981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#59696C", fontSize: 11 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#59696C", fontSize: 11 }}
                  tickFormatter={(value) => `$${value / 1000}k`}
                  dx={-10}
                  width={60}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(254, 254, 254, 0.95)",
                    border: "1px solid rgba(18, 25, 26, 0.1)",
                    borderRadius: "12px",
                    padding: "12px",
                    fontSize: "12px",
                    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                  }}
                  formatter={(value) => [`$${Number(value).toLocaleString()}`, "Revenue"]}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#10B981"
                  strokeWidth={3}
                  fill="url(#revenueGradient)"
                  dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="pt-4 border-t border-border flex items-center justify-between">
            <div>
              <p className="text-[12px] text-muted-foreground">Current MRR</p>
              <p className="text-[24px] font-[300] text-foreground">$240k</p>
            </div>
            <div className="flex items-center gap-2 text-[#10B981]">
              <TrendingUp className="h-4 w-4" />
              <span className="text-[14px]">+13.5% MoM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}