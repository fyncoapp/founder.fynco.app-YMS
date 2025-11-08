import { TrendingUp, DollarSign, BarChart3, Activity } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Line, LineChart } from "recharts@2.15.2";

const kpis = [
  { name: "Gross Margin", value: "72%", change: "+3.2%", trend: "up" },
  { name: "Net Margin", value: "28.5%", change: "+2.8%", trend: "up" },
  { name: "EBITDA Margin", value: "35.2%", change: "+4.1%", trend: "up" },
  { name: "Operating Margin", value: "31.8%", change: "+3.5%", trend: "up" },
];

const profitData = [
  { month: "Jan", revenue: 120000, costs: 85000, profit: 35000 },
  { month: "Feb", revenue: 135000, costs: 92000, profit: 43000 },
  { month: "Mar", revenue: 128000, costs: 88000, profit: 40000 },
  { month: "Apr", revenue: 155000, costs: 95000, profit: 60000 },
  { month: "May", revenue: 148000, costs: 89000, profit: 59000 },
  { month: "Jun", revenue: 168000, costs: 98000, profit: 70000 },
];

const unitEconomics = [
  { metric: "Customer Acquisition Cost (CAC)", value: "$245", trend: "Down 12%" },
  { metric: "Lifetime Value (LTV)", value: "$3,850", trend: "Up 18%" },
  { metric: "LTV:CAC Ratio", value: "15.7:1", trend: "Healthy" },
  { metric: "Payback Period", value: "3.2 months", trend: "Improving" },
  { metric: "Gross Margin per Customer", value: "$2,780", trend: "Up 8%" },
  { metric: "Churn Rate", value: "2.1%", trend: "Low" },
];

const costStructure = [
  { category: "Salaries & Benefits", amount: 85000, percentage: 58 },
  { category: "Cloud Infrastructure", amount: 22000, percentage: 15 },
  { category: "Marketing & Sales", amount: 28000, percentage: 19 },
  { category: "Operations & Overhead", amount: 12000, percentage: 8 },
];

const marketIntelligence = [
  { metric: "Industry Avg Margin", value: "58.2%", badge: "Stable", badgeColor: "bg-[#95A8AE]" },
  { metric: "Competitor ARR Growth", value: "+32%", badge: "Rising", badgeColor: "bg-primary" },
  { metric: "Market Saturation", value: "Low", badge: "Opportunity", badgeColor: "bg-[#34565D]" },
];

const integrations = [
  { name: "Stripe", status: "connected" },
  { name: "QuickBooks", status: "connected" },
  { name: "HubSpot", status: "connected" },
  { name: "Xero", status: "connected" },
];

const integrationChartData = [
  { month: "Jan", value: 45 },
  { month: "Feb", value: 52 },
  { month: "Mar", value: 49 },
  { month: "Apr", value: 63 },
  { month: "May", value: 58 },
  { month: "Jun", value: 71 },
  { month: "Jul", value: 68 },
  { month: "Aug", value: 76 },
  { month: "Sep", value: 82 },
  { month: "Oct", value: 79 },
  { month: "Nov", value: 88 },
  { month: "Dec", value: 95 },
];

export function ProfitabilityMetrics() {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Key KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, index) => (
          <div key={index} className="glass-card rounded-[16px] p-4 sm:p-5 lg:p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
            <p className="text-[11px] sm:text-[12px] text-muted-foreground uppercase tracking-wide mb-2">
              {kpi.name}
            </p>
            <p className="text-[24px] sm:text-[28px] lg:text-[32px] font-[300] text-foreground mb-1">
              {kpi.value}
            </p>
            <div className="flex items-center gap-1 text-primary">
              <TrendingUp className="h-4 w-4" />
              <span className="text-[12px]">{kpi.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Profitability Chart */}
      <div className="glass-card rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-4 sm:p-6 lg:p-8 shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
        <div className="space-y-4 sm:space-y-5">
          <div>
            <p className="text-[11px] sm:text-[12px] text-muted-foreground tracking-wide uppercase mb-1">
              Financial Performance
            </p>
            <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-[300] tracking-tight text-foreground">
              Revenue vs Profit Trend
            </h3>
          </div>

          <div className="h-[280px] sm:h-[320px] -mx-2 sm:-mx-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={profitData}>
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
                  width={50}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(254, 254, 254, 0.95)",
                    border: "1px solid rgba(18, 25, 26, 0.1)",
                    borderRadius: "12px",
                    padding: "8px 12px",
                    fontSize: "12px",
                  }}
                  formatter={(value) => `$${Number(value).toLocaleString()}`}
                />
                <Bar dataKey="revenue" fill="#143A43" radius={[6, 6, 0, 0]} />
                <Bar dataKey="costs" fill="#95A8AE" radius={[6, 6, 0, 0]} />
                <Bar dataKey="profit" fill="#34565D" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center justify-center gap-6 pt-3 border-t border-border">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span className="text-[12px] text-muted-foreground">Revenue</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent"></div>
              <span className="text-[12px] text-muted-foreground">Costs</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#34565D]"></div>
              <span className="text-[12px] text-muted-foreground">Profit</span>
            </div>
          </div>
        </div>
      </div>

      {/* Unit Economics */}
      <div className="glass-card rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-4 sm:p-6 lg:p-8 shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
        <div className="space-y-4 sm:space-y-5">
          <div>
            <p className="text-[11px] sm:text-[12px] text-muted-foreground tracking-wide uppercase mb-1">
              Customer Metrics
            </p>
            <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-[300] tracking-tight text-foreground">
              Unit Economics
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {unitEconomics.map((item, index) => (
              <div
                key={index}
                className="p-4 sm:p-5 rounded-[14px] bg-secondary/30 border border-border hover:border-primary/20 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[12px] sm:text-[13px] text-muted-foreground">{item.metric}</p>
                  <span className="text-[11px] text-primary">{item.trend}</span>
                </div>
                <p className="text-[20px] sm:text-[24px] font-[300] text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cost Structure and Market Intelligence - 2 Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Cost Structure Analysis */}
        <div className="glass-card rounded-[16px] sm:rounded-[20px] p-4 sm:p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-2 mb-5">
            <BarChart3 className="h-5 w-5 text-muted-foreground" />
            <h3 className="text-[14px] font-[400] text-foreground">Cost Structure Analysis</h3>
          </div>

          <div className="space-y-4">
            {costStructure.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[13px] text-foreground">{item.category}</span>
                  <span className="text-[13px] text-foreground">${item.amount.toLocaleString()}</span>
                </div>
                <div className="relative h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <div className="text-right mt-1">
                  <span className="text-[11px] text-muted-foreground">{item.percentage}%</span>
                </div>
              </div>
            ))}

            <div className="pt-4 border-t border-border mt-4">
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-[500] text-foreground">Total Monthly Cost</span>
                <span className="text-[20px] font-[300] text-foreground">$147,000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Market Intelligence */}
        <div className="glass-card rounded-[16px] sm:rounded-[20px] p-4 sm:p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-2 mb-5">
            <Activity className="h-5 w-5 text-muted-foreground" />
            <h3 className="text-[14px] font-[400] text-foreground">Market Intelligence</h3>
          </div>

          <div className="space-y-5">
            {marketIntelligence.map((item, index) => (
              <div key={index} className="pb-4 border-b border-border last:border-0 last:pb-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[12px] text-muted-foreground">{item.metric}</span>
                  <span className={`text-[11px] px-2 py-1 rounded-[6px] text-white ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>
                <p className="text-[24px] font-[300] text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="glass-card rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-4 sm:p-6 lg:p-8 shadow-[0px_2px_8px_rgba(0,0,0,0.04)] bg-primary/5 border-primary/20">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <DollarSign className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-[16px] sm:text-[18px] font-[500] text-foreground mb-2">
                Profitability Insights
              </h3>
              <ul className="space-y-2 text-[13px] sm:text-[14px] text-foreground/80 leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-primary flex-shrink-0">•</span>
                  <span>Your LTV:CAC ratio of 15.7:1 exceeds industry benchmark of 3:1, indicating excellent unit economics</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary flex-shrink-0">•</span>
                  <span>Net margin improved by 2.8% - on track to reach 35% target by Q2 2026</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary flex-shrink-0">•</span>
                  <span>Consider scaling customer acquisition given strong payback period of 3.2 months</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary flex-shrink-0">•</span>
                  <span>Low churn rate of 2.1% suggests high product-market fit - focus on expansion revenue</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}