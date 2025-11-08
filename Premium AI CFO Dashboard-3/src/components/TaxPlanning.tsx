import { useState } from "react";
import { DollarSign, Calculator } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

export function TaxPlanning() {
  const [revenue, setRevenue] = useState("168000");
  const [dividends, setDividends] = useState("45000");
  const [pension, setPension] = useState("20000");

  const calculateTax = () => {
    const rev = parseFloat(revenue) || 0;
    const div = parseFloat(dividends) || 0;
    const pen = parseFloat(pension) || 0;
    
    const corporateTax = rev * 0.19;
    const incomeTax = div * 0.325;
    const total = corporateTax + incomeTax - (pen * 0.25);
    
    return {
      corporateTax,
      incomeTax,
      total,
      effectiveRate: (total / rev * 100).toFixed(2)
    };
  };

  const taxes = calculateTax();

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Tax Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-card rounded-[16px] p-4 sm:p-5 lg:p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
          <p className="text-[11px] sm:text-[12px] text-muted-foreground uppercase tracking-wide mb-2">
            Corporate Tax
          </p>
          <p className="text-[24px] sm:text-[28px] lg:text-[32px] font-[300] text-foreground">
            ${(taxes.corporateTax / 1000).toFixed(1)}k
          </p>
          <p className="text-[12px] text-muted-foreground mt-1">19% on profits</p>
        </div>

        <div className="glass-card rounded-[16px] p-4 sm:p-5 lg:p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
          <p className="text-[11px] sm:text-[12px] text-muted-foreground uppercase tracking-wide mb-2">
            Income Tax
          </p>
          <p className="text-[24px] sm:text-[28px] lg:text-[32px] font-[300] text-foreground">
            ${(taxes.incomeTax / 1000).toFixed(1)}k
          </p>
          <p className="text-[12px] text-muted-foreground mt-1">On dividends</p>
        </div>

        <div className="glass-card rounded-[16px] p-4 sm:p-5 lg:p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
          <p className="text-[11px] sm:text-[12px] text-muted-foreground uppercase tracking-wide mb-2">
            Total Tax Liability
          </p>
          <p className="text-[24px] sm:text-[28px] lg:text-[32px] font-[300] text-destructive">
            ${(taxes.total / 1000).toFixed(1)}k
          </p>
          <p className="text-[12px] text-muted-foreground mt-1">Annual estimate</p>
        </div>

        <div className="glass-card rounded-[16px] p-4 sm:p-5 lg:p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
          <p className="text-[11px] sm:text-[12px] text-muted-foreground uppercase tracking-wide mb-2">
            Effective Tax Rate
          </p>
          <p className="text-[24px] sm:text-[28px] lg:text-[32px] font-[300] text-primary">
            {taxes.effectiveRate}%
          </p>
          <p className="text-[12px] text-muted-foreground mt-1">After reliefs</p>
        </div>
      </div>

      {/* Tax Calculator */}
      <div className="glass-card rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-4 sm:p-6 lg:p-8 shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
        <div className="space-y-4 sm:space-y-5">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Calculator className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            </div>
            <div>
              <p className="text-[11px] sm:text-[12px] text-muted-foreground tracking-wide uppercase mb-1">
                Planning Tool
              </p>
              <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-[300] tracking-tight text-foreground">
                Tax Calculator
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="revenue" className="text-[13px] text-foreground">
                Annual Revenue ($)
              </Label>
              <Input
                id="revenue"
                type="number"
                value={revenue}
                onChange={(e) => setRevenue(e.target.value)}
                className="text-[14px]"
                placeholder="168000"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dividends" className="text-[13px] text-foreground">
                Dividends Paid ($)
              </Label>
              <Input
                id="dividends"
                type="number"
                value={dividends}
                onChange={(e) => setDividends(e.target.value)}
                className="text-[14px]"
                placeholder="45000"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pension" className="text-[13px] text-foreground">
                Pension Contributions ($)
              </Label>
              <Input
                id="pension"
                type="number"
                value={pension}
                onChange={(e) => setPension(e.target.value)}
                className="text-[14px]"
                placeholder="20000"
              />
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-[14px] bg-primary/5 border border-primary/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-[11px] text-muted-foreground mb-1">Corporate Tax</p>
                <p className="text-[18px] sm:text-[20px] font-[300] text-foreground">
                  ${(taxes.corporateTax / 1000).toFixed(1)}k
                </p>
              </div>
              <div>
                <p className="text-[11px] text-muted-foreground mb-1">Income Tax</p>
                <p className="text-[18px] sm:text-[20px] font-[300] text-foreground">
                  ${(taxes.incomeTax / 1000).toFixed(1)}k
                </p>
              </div>
              <div>
                <p className="text-[11px] text-muted-foreground mb-1">Total</p>
                <p className="text-[18px] sm:text-[20px] font-[300] text-destructive">
                  ${(taxes.total / 1000).toFixed(1)}k
                </p>
              </div>
              <div>
                <p className="text-[11px] text-muted-foreground mb-1">Effective Rate</p>
                <p className="text-[18px] sm:text-[20px] font-[300] text-primary">
                  {taxes.effectiveRate}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tax Optimization Tips */}
      <div className="glass-card rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-4 sm:p-6 lg:p-8 shadow-[0px_2px_8px_rgba(0,0,0,0.04)] bg-primary/5 border-primary/20">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <DollarSign className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-[16px] sm:text-[18px] font-[500] text-foreground mb-2">
                AI Tax Optimization Recommendations
              </h3>
              <ul className="space-y-2 text-[13px] sm:text-[14px] text-foreground/80 leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-primary flex-shrink-0">•</span>
                  <span>Maximize pension contributions up to £60k annual allowance for 25% tax relief</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary flex-shrink-0">•</span>
                  <span>Consider salary-dividend split optimization to minimize NI contributions while staying under higher rate threshold</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary flex-shrink-0">•</span>
                  <span>Utilize R&D tax credits - you may be eligible for up to 33% enhanced deduction on qualifying expenditure</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary flex-shrink-0">•</span>
                  <span>Review capital allowances on equipment and software purchases for immediate tax deduction</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary flex-shrink-0">•</span>
                  <span>Plan dividend timing to optimize tax years and personal allowance usage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
