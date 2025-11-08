import { useState } from "react";
import { Calculator, TrendingUp } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts@2.15.2";

const currentCapTable = [
  { shareholder: "Founder 1 (You)", shares: 4500000, ownership: 45.0, type: "Common" },
  { shareholder: "Founder 2", shares: 3500000, ownership: 35.0, type: "Common" },
  { shareholder: "Employee Pool", shares: 1500000, ownership: 15.0, type: "Options" },
  { shareholder: "Seed Investors", shares: 500000, ownership: 5.0, type: "Preferred" },
];

const fundingHistory = [
  {
    round: "Seed",
    date: "Jan 2024",
    amount: "$500k",
    valuation: "$4M",
    dilution: "11.1%",
    investors: "Angel Group"
  },
  {
    round: "Pre-Seed",
    date: "Jun 2023",
    amount: "$150k",
    valuation: "$1.5M",
    dilution: "9.1%",
    investors: "Friends & Family"
  },
];

const COLORS = ["#143A43", "#34565D", "#95A8AE", "#EBEFEF"];

export function ShareholderDilution() {
  const [fundingAmount, setFundingAmount] = useState("500000");
  const [preMoneyVal, setPreMoneyVal] = useState("4500000");
  const [optionPool, setOptionPool] = useState("15");

  const chartData = currentCapTable.map(holder => ({
    name: holder.shareholder,
    value: holder.ownership
  }));

  const calculateDilution = () => {
    const funding = parseFloat(fundingAmount) || 0;
    const preMoney = parseFloat(preMoneyVal) || 1;
    const postMoney = preMoney + funding;
    const newInvestorOwnership = (funding / postMoney) * 100;
    return newInvestorOwnership.toFixed(2);
  };

  const calculatePostFunding = () => {
    const dilution = parseFloat(calculateDilution());
    return currentCapTable.map(holder => ({
      ...holder,
      newOwnership: (holder.ownership * (100 - dilution) / 100).toFixed(2)
    }));
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Ownership Chart & Current Cap Table */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Donut Chart */}
        <div className="glass-card rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-4 sm:p-6 lg:p-8 shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
          <div className="space-y-4 sm:space-y-5">
            <div>
              <p className="text-[11px] sm:text-[12px] text-muted-foreground tracking-wide uppercase mb-1">
                Ownership Distribution
              </p>
              <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-[300] tracking-tight text-foreground">
                Current Shareholding
              </h3>
            </div>

            <div className="h-[300px] sm:h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius="60%"
                    outerRadius="80%"
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(254, 254, 254, 0.95)",
                      border: "1px solid rgba(18, 25, 26, 0.1)",
                      borderRadius: "12px",
                      padding: "8px 12px",
                      fontSize: "12px",
                    }}
                    formatter={(value) => `${Number(value).toFixed(1)}%`}
                  />
                  <Legend
                    verticalAlign="bottom"
                    height={36}
                    iconType="circle"
                    wrapperStyle={{
                      fontSize: "12px",
                      paddingTop: "20px"
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Current Cap Table */}
        <div className="glass-card rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-4 sm:p-6 lg:p-8 shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
          <div className="space-y-4 sm:space-y-5">
            <div>
              <p className="text-[11px] sm:text-[12px] text-muted-foreground tracking-wide uppercase mb-1">
                Equity Structure
              </p>
              <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-[300] tracking-tight text-foreground">
                Current Cap Table
              </h3>
            </div>

            <div className="overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full align-middle px-4 sm:px-6 lg:px-8">
                <table className="min-w-full">
                  <thead className="border-b border-border">
                    <tr>
                      <th className="py-3 text-left text-[11px] sm:text-[12px] text-muted-foreground uppercase tracking-wide">
                        Shareholder
                      </th>
                      <th className="py-3 text-right text-[11px] sm:text-[12px] text-muted-foreground uppercase tracking-wide">
                        Shares
                      </th>
                      <th className="py-3 text-right text-[11px] sm:text-[12px] text-muted-foreground uppercase tracking-wide">
                        Ownership %
                      </th>
                      <th className="py-3 text-right text-[11px] sm:text-[12px] text-muted-foreground uppercase tracking-wide">
                        Type
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {currentCapTable.map((holder, index) => (
                      <tr key={index} className="hover:bg-secondary/20 transition-colors">
                        <td className="py-3 text-[13px] sm:text-[14px] text-foreground">{holder.shareholder}</td>
                        <td className="py-3 text-right text-[13px] sm:text-[14px] text-foreground">
                          {holder.shares.toLocaleString()}
                        </td>
                        <td className="py-3 text-right text-[13px] sm:text-[14px] text-primary font-[500]">
                          {holder.ownership.toFixed(1)}%
                        </td>
                        <td className="py-3 text-right text-[12px] sm:text-[13px] text-muted-foreground">
                          {holder.type}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="border-t-2 border-border">
                    <tr>
                      <td className="py-3 text-[13px] sm:text-[14px] font-[500] text-foreground">Total</td>
                      <td className="py-3 text-right text-[13px] sm:text-[14px] font-[500] text-foreground">
                        {currentCapTable.reduce((sum, h) => sum + h.shares, 0).toLocaleString()}
                      </td>
                      <td className="py-3 text-right text-[13px] sm:text-[14px] font-[500] text-primary">
                        100.0%
                      </td>
                      <td></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dilution Calculator */}
      <div className="glass-card rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-4 sm:p-6 lg:p-8 shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
        <div className="space-y-4 sm:space-y-5">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Calculator className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-[11px] sm:text-[12px] text-muted-foreground tracking-wide uppercase mb-1">
                Fundraising Tool
              </p>
              <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-[300] tracking-tight text-foreground">
                Dilution Calculator
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="funding-amount" className="text-[13px] text-foreground">
                Funding Amount ($)
              </Label>
              <Input
                id="funding-amount"
                type="number"
                value={fundingAmount}
                onChange={(e) => setFundingAmount(e.target.value)}
                className="text-[14px]"
                placeholder="500000"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pre-money" className="text-[13px] text-foreground">
                Pre-Money Valuation ($)
              </Label>
              <Input
                id="pre-money"
                type="number"
                value={preMoneyVal}
                onChange={(e) => setPreMoneyVal(e.target.value)}
                className="text-[14px]"
                placeholder="4500000"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="option-pool" className="text-[13px] text-foreground">
                Option Pool (%)
              </Label>
              <Input
                id="option-pool"
                type="number"
                value={optionPool}
                onChange={(e) => setOptionPool(e.target.value)}
                className="text-[14px]"
                placeholder="15"
              />
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-[14px] bg-primary/5 border border-primary/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[12px] text-muted-foreground mb-1">New Investor Ownership</p>
                <p className="text-[28px] sm:text-[32px] font-[300] text-primary">{calculateDilution()}%</p>
              </div>
              <div className="text-right">
                <p className="text-[12px] text-muted-foreground mb-1">Your New Ownership</p>
                <p className="text-[28px] sm:text-[32px] font-[300] text-foreground">
                  {(45 * (100 - parseFloat(calculateDilution())) / 100).toFixed(2)}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Post-Funding Ownership Structure */}
      <div className="glass-card rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-4 sm:p-6 lg:p-8 shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
        <div className="space-y-4 sm:space-y-5">
          <div>
            <p className="text-[11px] sm:text-[12px] text-muted-foreground tracking-wide uppercase mb-1">
              Projected Structure
            </p>
            <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-[300] tracking-tight text-foreground">
              Post-Funding Ownership
            </h3>
          </div>

          <div className="overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full align-middle px-4 sm:px-6 lg:px-8">
              <table className="min-w-full">
                <thead className="border-b border-border">
                  <tr>
                    <th className="py-3 text-left text-[11px] sm:text-[12px] text-muted-foreground uppercase tracking-wide">
                      Shareholder
                    </th>
                    <th className="py-3 text-right text-[11px] sm:text-[12px] text-muted-foreground uppercase tracking-wide">
                      Current %
                    </th>
                    <th className="py-3 text-right text-[11px] sm:text-[12px] text-muted-foreground uppercase tracking-wide">
                      Post-Funding %
                    </th>
                    <th className="py-3 text-right text-[11px] sm:text-[12px] text-muted-foreground uppercase tracking-wide">
                      Change
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {calculatePostFunding().map((holder, index) => (
                    <tr key={index} className="hover:bg-secondary/20 transition-colors">
                      <td className="py-3 text-[13px] sm:text-[14px] text-foreground">{holder.shareholder}</td>
                      <td className="py-3 text-right text-[13px] sm:text-[14px] text-muted-foreground">
                        {holder.ownership.toFixed(1)}%
                      </td>
                      <td className="py-3 text-right text-[13px] sm:text-[14px] text-primary font-[500]">
                        {holder.newOwnership}%
                      </td>
                      <td className="py-3 text-right text-[12px] sm:text-[13px] text-destructive">
                        -{(holder.ownership - parseFloat(holder.newOwnership)).toFixed(1)}%
                      </td>
                    </tr>
                  ))}
                  <tr className="hover:bg-secondary/20 transition-colors">
                    <td className="py-3 text-[13px] sm:text-[14px] text-foreground">New Investor</td>
                    <td className="py-3 text-right text-[13px] sm:text-[14px] text-muted-foreground">0.0%</td>
                    <td className="py-3 text-right text-[13px] sm:text-[14px] text-primary font-[500]">
                      {calculateDilution()}%
                    </td>
                    <td className="py-3 text-right text-[12px] sm:text-[13px] text-primary">
                      +{calculateDilution()}%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Funding History */}
      <div className="glass-card rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-4 sm:p-6 lg:p-8 shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
        <div className="space-y-4 sm:space-y-5">
          <div>
            <p className="text-[11px] sm:text-[12px] text-muted-foreground tracking-wide uppercase mb-1">
              Historical Data
            </p>
            <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-[300] tracking-tight text-foreground">
              Funding History
            </h3>
          </div>

          <div className="space-y-3">
            {fundingHistory.map((round, index) => (
              <div
                key={index}
                className="p-4 sm:p-5 rounded-[14px] bg-secondary/30 border border-border hover:border-primary/20 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-[15px] sm:text-[16px] font-[500] text-foreground">{round.round}</h4>
                      <span className="text-[11px] text-muted-foreground">{round.date}</span>
                    </div>
                    <p className="text-[13px] text-muted-foreground">{round.investors}</p>
                  </div>
                  <div className="flex gap-6">
                    <div className="text-left sm:text-right">
                      <p className="text-[11px] text-muted-foreground">Amount</p>
                      <p className="text-[15px] font-[500] text-foreground">{round.amount}</p>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-[11px] text-muted-foreground">Valuation</p>
                      <p className="text-[15px] font-[500] text-foreground">{round.valuation}</p>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-[11px] text-muted-foreground">Dilution</p>
                      <p className="text-[15px] font-[500] text-destructive">{round.dilution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Strategic Recommendations */}
      <div className="glass-card rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-4 sm:p-6 lg:p-8 shadow-[0px_2px_8px_rgba(0,0,0,0.04)] bg-primary/5 border-primary/20">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-[16px] sm:text-[18px] font-[500] text-foreground mb-2">
                AI Strategic Recommendations
              </h3>
              <ul className="space-y-2 text-[13px] sm:text-[14px] text-foreground/80 leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-primary flex-shrink-0">•</span>
                  <span>Consider raising $3.0M-$3.5M at a $8M-$10M pre-money valuation to extend runway to 24 months</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary flex-shrink-0">•</span>
                  <span>Maintain founder ownership above 60% (combined) to retain control through Series A</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary flex-shrink-0">•</span>
                  <span>Expand option pool to 20% before next round to attract senior talent without additional dilution</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary flex-shrink-0">•</span>
                  <span>Target strategic investors who can provide industry connections and customer introductions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
