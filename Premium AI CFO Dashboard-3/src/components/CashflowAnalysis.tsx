import { useState } from "react";
import { TrendingUp, TrendingDown, AlertCircle, Newspaper, DollarSign, CreditCard, Target, Zap } from "lucide-react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Bar, BarChart, ReferenceLine } from "recharts@2.15.2";
import { Progress } from "./ui/progress";
import { Slider } from "./ui/slider";
import { Sparkline } from "./Sparkline";

const cashflowData = [
  { month: "Jan", inflow: 120000, outflow: 85000 },
  { month: "Feb", inflow: 135000, outflow: 92000 },
  { month: "Mar", inflow: 128000, outflow: 88000 },
  { month: "Apr", inflow: 155000, outflow: 95000 },
  { month: "May", inflow: 148000, outflow: 89000 },
  { month: "Jun", inflow: 168000, outflow: 98000 },
  { month: "Jul", inflow: 175000, outflow: 102000 },
  { month: "Aug", inflow: 165000, outflow: 98000 },
  { month: "Sep", inflow: 180000, outflow: 105000 },
  { month: "Oct", inflow: 190000, outflow: 108000 },
  { month: "Nov", inflow: 185000, outflow: 103000 },
  { month: "Dec", inflow: 195000, outflow: 110000 },
];

const projectionData = [
  { month: "Nov '25", balance: 850000 },
  { month: "Dec '25", balance: 935000 },
  { month: "Jan '26", balance: 870000 },
  { month: "Feb '26", balance: 810000 },
  { month: "Mar '26", balance: 750000 },
  { month: "Apr '26", balance: 690000 },
  { month: "May '26", balance: 630000 },
  { month: "Jun '26", balance: 570000 },
  { month: "Jul '26", balance: 510000 },
  { month: "Aug '26", balance: 450000 },
  { month: "Sep '26", balance: 390000 },
  { month: "Oct '26", balance: 330000 },
];

const marketInsights = [
  {
    title: "SaaS Market Growth +12.3%",
    source: "TechCrunch",
    time: "2h ago"
  },
  {
    title: "Series B Funding Rounds Up 18%",
    source: "Crunchbase",
    time: "5h ago"
  },
  {
    title: "B2B Software Valuations Stable",
    source: "PitchBook",
    time: "1d ago"
  }
];

// Operational metrics data
const operationalMetrics = {
  inflows: [
    { label: "Revenue", value: 165000, change: 8.5, trend: [148, 155, 158, 162, 165] },
    { label: "Funding", value: 0, change: 0, trend: [0, 0, 0, 0, 0] },
    { label: "Grants", value: 15000, change: 0, trend: [15, 15, 15, 15, 15] },
    { label: "Interest", value: 5000, change: 2.1, trend: [4.8, 4.9, 4.9, 5.0, 5.0] },
  ],
  outflows: [
    { label: "Payroll", value: 85000, change: 3.2, trend: [80, 81, 83, 84, 85] },
    { label: "SaaS & Tools", value: 28000, change: 5.5, trend: [25, 26, 27, 27, 28] },
    { label: "Marketing", value: 32000, change: -2.8, trend: [35, 34, 33, 32, 32] },
    { label: "Operations", value: 15000, change: 1.5, trend: [14.5, 14.6, 14.8, 14.9, 15] },
  ],
};

// Variance data
const varianceData = [
  { month: "Aug '25", actualInflow: 165000, forecastInflow: 160000, actualOutflow: 98000, forecastOutflow: 95000 },
  { month: "Sep '25", actualInflow: 180000, forecastInflow: 175000, actualOutflow: 105000, forecastOutflow: 100000 },
  { month: "Oct '25", actualInflow: 190000, forecastInflow: 185000, actualOutflow: 108000, forecastOutflow: 105000 },
];

export function CashflowAnalysis() {
  const [timeRange, setTimeRange] = useState("12");
  const [revenueGrowth, setRevenueGrowth] = useState([15]);
  const [monthlyBurn, setMonthlyBurn] = useState([60]);
  const [fundingInjection, setFundingInjection] = useState([0]);

  // Calculate adjusted projection based on scenario sliders
  const getAdjustedProjection = () => {
    const growthMultiplier = 1 + (revenueGrowth[0] - 15) / 100;
    const burnMultiplier = monthlyBurn[0] / 60;
    const funding = fundingInjection[0] * 1000;

    return projectionData.map((item, index) => {
      const baseBalance = 850000;
      const monthlyGrowth = (baseBalance * growthMultiplier * 0.01);
      const monthlyBurnAmount = 60000 * burnMultiplier;
      const netMonthly = monthlyGrowth - monthlyBurnAmount;
      
      let balance = baseBalance + (netMonthly * index);
      
      // Add funding at month 6 if applicable
      if (index >= 6 && funding > 0) {
        balance += funding;
      }
      
      return {
        ...item,
        balance: Math.max(0, balance)
      };
    });
  };

  const adjustedProjection = getAdjustedProjection();

  // Calculate total inflows and outflows
  const totalInflow = operationalMetrics.inflows.reduce((sum, item) => sum + item.value, 0);
  const totalOutflow = operationalMetrics.outflows.reduce((sum, item) => sum + item.value, 0);
  const netCashFlow = totalInflow - totalOutflow;
  const netChange = ((netCashFlow - 75000) / 75000) * 100; // Compared to last month's 75k net

  // Calculate AI insight based on sliders
  const getAIInsight = () => {
    const burnReduction = ((60 - monthlyBurn[0]) / 60) * 100;
    const runwayExtension = (850000 / (monthlyBurn[0] * 1000)) - 14.2;
    
    if (burnReduction > 5) {
      return `Reducing burn by ${burnReduction.toFixed(1)}% extends runway by ${Math.abs(runwayExtension).toFixed(1)} months.`;
    } else if (fundingInjection[0] > 0) {
      const addedRunway = fundingInjection[0] / monthlyBurn[0];
      return `$${fundingInjection[0]}k funding injection adds ${addedRunway.toFixed(1)} months of runway.`;
    } else if (revenueGrowth[0] > 15) {
      return `${revenueGrowth[0]}% revenue growth improves cash position by $${((revenueGrowth[0] - 15) * 8500).toFixed(0)}/month.`;
    }
    return "Adjust the scenario parameters above to see AI-powered insights.";
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-card rounded-[16px] p-4 sm:p-5 lg:p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
          <p className="text-[11px] sm:text-[12px] text-muted-foreground uppercase tracking-wide mb-2">Cash Balance</p>
          <p className="text-[24px] sm:text-[28px] lg:text-[32px] font-[300] text-foreground mb-1">$850k</p>
          <div className="flex items-center gap-1 text-primary">
            <TrendingUp className="h-4 w-4" />
            <span className="text-[12px]">+8.9% vs last month</span>
          </div>
        </div>

        <div className="glass-card rounded-[16px] p-4 sm:p-5 lg:p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
          <p className="text-[11px] sm:text-[12px] text-muted-foreground uppercase tracking-wide mb-2">Monthly Burn Rate</p>
          <p className="text-[24px] sm:text-[28px] lg:text-[32px] font-[300] text-foreground mb-1">$60k</p>
          <div className="flex items-center gap-1 text-destructive">
            <TrendingDown className="h-4 w-4" />
            <span className="text-[12px]">-5.2% reduction</span>
          </div>
        </div>

        <div className="glass-card rounded-[16px] p-4 sm:p-5 lg:p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
          <p className="text-[11px] sm:text-[12px] text-muted-foreground uppercase tracking-wide mb-2">Runway</p>
          <p className="text-[24px] sm:text-[28px] lg:text-[32px] font-[300] text-primary mb-1">14.2 mo</p>
          <p className="text-[12px] text-muted-foreground">Until Apr 2027</p>
        </div>

        <div className="glass-card rounded-[16px] p-4 sm:p-5 lg:p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
          <p className="text-[11px] sm:text-[12px] text-muted-foreground uppercase tracking-wide mb-2">Operating Margin</p>
          <p className="text-[24px] sm:text-[28px] lg:text-[32px] font-[300] text-foreground mb-1">28.5%</p>
          <div className="flex items-center gap-1 text-primary">
            <TrendingUp className="h-4 w-4" />
            <span className="text-[12px]">+3.1% improvement</span>
          </div>
        </div>
      </div>

      {/* 12 Month Cash Flow Projection */}
      <div className="glass-card rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-4 sm:p-6 lg:p-8 shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
        <div className="space-y-4 sm:space-y-5">
          <div>
            <p className="text-[11px] sm:text-[12px] text-muted-foreground tracking-wide uppercase mb-1">
              AI-Powered Forecast
            </p>
            <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-[300] tracking-tight text-foreground">
              12-Month Cash Flow Projection
            </h3>
          </div>

          <div className="h-[280px] sm:h-[320px] -mx-2 sm:-mx-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={adjustedProjection}>
                <defs>
                  <linearGradient id="cashGradient" x1="0" y1="0" x2="0" y2="1">
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
                  formatter={(value, name, props) => {
                    const index = props.payload ? adjustedProjection.indexOf(props.payload) : 0;
                    const runway = Math.max(0, adjustedProjection.length - index - 1);
                    return [
                      `$${Number(value).toLocaleString()}`,
                      `Cash Balance • ${runway}mo runway`
                    ];
                  }}
                />
                <ReferenceLine
                  x="Apr '26"
                  stroke="#F59E0B"
                  strokeDasharray="3 3"
                  label={{
                    value: "Series A Planned",
                    position: "top",
                    fill: "#F59E0B",
                    fontSize: 10,
                    offset: 10,
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="balance"
                  stroke="#143A43"
                  strokeWidth={3}
                  dot={{ fill: "#143A43", strokeWidth: 2, r: 4 }}
                  fill="url(#cashGradient)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="pt-3 border-t border-border">
            <p className="text-[12px] text-muted-foreground text-center">
              Projected runway: <span className="text-foreground">14.2 months</span> • Funding required by: <span className="text-foreground">Q2 2026</span>
            </p>
          </div>
        </div>
      </div>

      {/* Operational Metrics Panel */}
      <div className="glass-card rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-4 sm:p-6 lg:p-8 shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
        <div className="space-y-5">
          <div>
            <p className="text-[11px] sm:text-[12px] text-muted-foreground tracking-wide uppercase mb-1">
              Current Month
            </p>
            <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-[300] tracking-tight text-foreground">
              Operational Metrics
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Cash Inflows */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#EEF9F2] flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-[#10B981]" />
                </div>
                <h4 className="text-[15px] text-foreground">Cash Inflows</h4>
              </div>

              {operationalMetrics.inflows.map((item) => (
                <div key={item.label} className="flex items-center justify-between gap-4 py-3 border-b border-border last:border-0">
                  <div className="flex-1">
                    <p className="text-[13px] text-muted-foreground mb-1">{item.label}</p>
                    <p className="text-[16px] text-foreground">${(item.value / 1000).toFixed(0)}k</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Sparkline 
                      data={item.trend} 
                      color="#10B981" 
                      className="w-16 h-8"
                    />
                    <span className={`text-[12px] ${item.change > 0 ? 'text-[#10B981]' : item.change < 0 ? 'text-destructive' : 'text-muted-foreground'}`}>
                      {item.change > 0 ? '+' : ''}{item.change}%
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Cash Outflows */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#FEF3E2] flex items-center justify-center">
                  <TrendingDown className="w-4 h-4 text-[#F59E0B]" />
                </div>
                <h4 className="text-[15px] text-foreground">Cash Outflows</h4>
              </div>

              {operationalMetrics.outflows.map((item) => (
                <div key={item.label} className="flex items-center justify-between gap-4 py-3 border-b border-border last:border-0">
                  <div className="flex-1">
                    <p className="text-[13px] text-muted-foreground mb-1">{item.label}</p>
                    <p className="text-[16px] text-foreground">${(item.value / 1000).toFixed(0)}k</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Sparkline 
                      data={item.trend} 
                      color="#F59E0B" 
                      className="w-16 h-8"
                    />
                    <span className={`text-[12px] ${item.change > 0 ? 'text-destructive' : item.change < 0 ? 'text-[#10B981]' : 'text-muted-foreground'}`}>
                      {item.change > 0 ? '+' : ''}{item.change}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Net Cash Flow Summary */}
          <div className="pt-4 border-t-2 border-border">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-[#F9FAFB] rounded-[12px]">
              <div>
                <p className="text-[12px] text-muted-foreground mb-1">Net Cash Flow (Inflow - Outflow)</p>
                <p className="text-[20px] text-foreground">${(netCashFlow / 1000).toFixed(0)}k</p>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-[#EEF9F2] rounded-[8px]">
                <Zap className="w-4 h-4 text-[#10B981]" />
                <span className="text-[12px] text-[#059669]">
                  {netChange > 0 ? `+${netChange.toFixed(1)}%` : `${netChange.toFixed(1)}%`} vs last month
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Forecasting Tools Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Scenario Simulator */}
        <div className="lg:col-span-2 glass-card rounded-[16px] sm:rounded-[20px] p-5 sm:p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
          <div className="flex items-start gap-3 mb-5">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#EFF6FF] flex items-center justify-center">
              <Target className="w-5 h-5 text-[#3B82F6]" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-[15px] sm:text-[16px] text-foreground mb-1">Scenario Simulator</h4>
              <p className="text-[12px] text-muted-foreground">Adjust parameters to see impact on cash flow projection</p>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-[13px] text-muted-foreground">Revenue Growth Rate</label>
                <span className="text-[13px] text-foreground">{revenueGrowth[0]}%</span>
              </div>
              <Slider
                value={revenueGrowth}
                onValueChange={setRevenueGrowth}
                min={0}
                max={30}
                step={0.5}
                className="w-full"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-[13px] text-muted-foreground">Monthly Burn Rate</label>
                <span className="text-[13px] text-foreground">${monthlyBurn[0]}k</span>
              </div>
              <Slider
                value={monthlyBurn}
                onValueChange={setMonthlyBurn}
                min={30}
                max={100}
                step={1}
                className="w-full"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-[13px] text-muted-foreground">Funding Injection (Month 6)</label>
                <span className="text-[13px] text-foreground">${fundingInjection[0]}k</span>
              </div>
              <Slider
                value={fundingInjection}
                onValueChange={setFundingInjection}
                min={0}
                max={500}
                step={25}
                className="w-full"
              />
            </div>
          </div>

          {/* AI Insight */}
          <div className="mt-5 pt-5 border-t border-border">
            <div className="flex items-start gap-2 p-3 bg-[#F0F9FF] rounded-[10px]">
              <Zap className="w-4 h-4 text-[#3B82F6] mt-0.5 flex-shrink-0" />
              <p className="text-[12px] text-[#1E40AF]">{getAIInsight()}</p>
            </div>
          </div>
        </div>

        {/* Variance Table */}
        <div className="glass-card rounded-[16px] sm:rounded-[20px] p-5 sm:p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
          <div className="flex items-start gap-3 mb-5">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F3F4F6] flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-[#6B7280]" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-[15px] sm:text-[16px] text-foreground mb-1">Variance Analysis</h4>
              <p className="text-[12px] text-muted-foreground">Last 3 months</p>
            </div>
          </div>

          <div className="space-y-3">
            {varianceData.map((item) => {
              const inflowVariance = ((item.actualInflow - item.forecastInflow) / item.forecastInflow) * 100;
              const outflowVariance = ((item.actualOutflow - item.forecastOutflow) / item.forecastOutflow) * 100;

              return (
                <div key={item.month} className="pb-3 border-b border-border last:border-0 last:pb-0">
                  <p className="text-[12px] text-muted-foreground mb-2">{item.month}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-muted-foreground">Inflow</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[12px] text-foreground">${(item.actualInflow / 1000).toFixed(0)}k</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                          inflowVariance > 0 
                            ? 'bg-[#EEF9F2] text-[#059669]' 
                            : 'bg-[#FEF3E2] text-[#D97706]'
                        }`}>
                          {inflowVariance > 0 ? '+' : ''}{inflowVariance.toFixed(1)}%
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-muted-foreground">Outflow</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[12px] text-foreground">${(item.actualOutflow / 1000).toFixed(0)}k</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                          outflowVariance < 0 
                            ? 'bg-[#EEF9F2] text-[#059669]' 
                            : 'bg-[#FEE2E2] text-[#DC2626]'
                        }`}>
                          {outflowVariance > 0 ? '+' : ''}{outflowVariance.toFixed(1)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Historical Analysis */}
      <div className="glass-card rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-4 sm:p-6 lg:p-8 shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
        <div className="space-y-4 sm:space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-[11px] sm:text-[12px] text-muted-foreground tracking-wide uppercase mb-1">
                Historical Analysis
              </p>
              <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-[300] tracking-tight text-foreground">
                Cash Inflow vs Outflow
              </h3>
            </div>
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 rounded-[10px] bg-input-background border border-input text-[13px] focus:outline-none focus:ring-2 focus:ring-ring w-full sm:w-auto"
            >
              <option value="6">Last 6 months</option>
              <option value="12">Last 12 months</option>
              <option value="24">Last 24 months</option>
            </select>
          </div>

          <div className="h-[280px] sm:h-[320px] -mx-2 sm:-mx-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={cashflowData}>
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
                <Bar dataKey="inflow" fill="#143A43" radius={[6, 6, 0, 0]} />
                <Bar dataKey="outflow" fill="#95A8AE" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center justify-center gap-6 pt-3 border-t border-border">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span className="text-[12px] text-muted-foreground">Cash Inflow</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent"></div>
              <span className="text-[12px] text-muted-foreground">Cash Outflow</span>
            </div>
          </div>
        </div>
      </div>

      {/* Funding Requirements & Market Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Funding Requirements */}
        <div className="glass-card rounded-[16px] sm:rounded-[20px] p-5 sm:p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
          <div className="flex items-start gap-3 mb-5">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FEF3E2] flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-[#F59E0B]" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-[15px] sm:text-[16px] text-foreground mb-1">Funding Requirements</h4>
              <p className="text-[12px] text-muted-foreground">Based on current burn rate and growth targets</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-baseline justify-between">
              <span className="text-[13px] text-muted-foreground">Required by Q2 2026</span>
              <span className="text-[20px] sm:text-[24px] font-[300] text-foreground">$2.5M</span>
            </div>

            <div className="space-y-2">
              <Progress value={65} className="h-2" />
              <div className="flex justify-between items-center">
                <span className="text-[11px] text-muted-foreground">Progress to goal</span>
                <span className="text-[12px] text-foreground">65% ($1.625M secured)</span>
              </div>
            </div>

            <div className="pt-3 border-t border-border space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[12px] text-muted-foreground">Recommended raise</span>
                <span className="text-[13px] text-foreground">$3.0M - $3.5M</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[12px] text-muted-foreground">Target runway</span>
                <span className="text-[13px] text-foreground">18-24 months</span>
              </div>
            </div>
          </div>
        </div>

        {/* Market Insights */}
        <div className="glass-card rounded-[16px] sm:rounded-[20px] p-5 sm:p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
          <div className="flex items-start gap-3 mb-5">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#EFF6FF] flex items-center justify-center">
              <Newspaper className="w-5 h-5 text-[#3B82F6]" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-[15px] sm:text-[16px] text-foreground">Market Insights</h4>
            </div>
          </div>

          <div className="space-y-4">
            {marketInsights.map((insight, index) => (
              <div key={index} className="pb-4 border-b border-border last:border-0 last:pb-0">
                <p className="text-[13px] sm:text-[14px] text-foreground mb-1.5">{insight.title}</p>
                <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                  <span>{insight.source}</span>
                  <span>•</span>
                  <span>{insight.time}</span>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-5 pt-4 border-t border-border text-[13px] text-primary hover:text-primary/80 transition-colors">
            View All Insights
          </button>
        </div>
      </div>
    </div>
  );
}
