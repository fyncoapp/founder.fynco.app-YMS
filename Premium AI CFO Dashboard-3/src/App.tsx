import { useState } from "react";
import { Menu, X, Home, TrendingUp, Users, FileText, PieChart, Globe, Sparkles, Target, ChevronLeft, Database, DollarSign } from "lucide-react";
import fyncoLogo from "figma:asset/78dc60057593080f7d54f6b956a62ba72bc30a78.png";
import { Overview } from "./components/Overview";
import { CashflowAnalysis } from "./components/CashflowAnalysis";
import { ShareholderDilution } from "./components/ShareholderDilution";
import { TaxPlanning } from "./components/TaxPlanning";
import { ProfitabilityMetrics } from "./components/ProfitabilityMetrics";
import { VCPitchDeck } from "./components/VCPitchDeck";
import { IndustryInsights } from "./components/IndustryInsights";
import { AIInsights } from "./components/AIInsights";
import { IntegrationsData } from "./components/IntegrationsData";
import { FoundersInput } from "./components/FoundersInput";
import { Fundraising } from "./components/Fundraising";
import { TalkToFyn } from "./components/TalkToFyn";

type Section = "overview" | "cashflow" | "shareholding" | "tax" | "profitability" | "pitch" | "industry" | "ai" | "integrations" | "founders" | "fundraising";

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { id: "overview" as Section, name: "Overview", icon: Home },
    { id: "cashflow" as Section, name: "Cashflow Analysis", icon: TrendingUp },
    { id: "shareholding" as Section, name: "Shareholding & Dilution", icon: Users },
    { id: "tax" as Section, name: "Tax Planning", icon: FileText },
    { id: "profitability" as Section, name: "Profitability Metrics", icon: PieChart },
    { id: "fundraising" as Section, name: "Fundraising", icon: DollarSign },
    { id: "pitch" as Section, name: "VC Pitch Deck", icon: Target },
    { id: "industry" as Section, name: "Industry Insights", icon: Globe },
    { id: "ai" as Section, name: "AI Insights", icon: Sparkles },
    { id: "integrations" as Section, name: "Integrations & Data", icon: Database },
    { id: "founders" as Section, name: "Founders Input", icon: FileText },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <Overview />;
      case "cashflow":
        return <CashflowAnalysis />;
      case "shareholding":
        return <ShareholderDilution />;
      case "tax":
        return <TaxPlanning />;
      case "profitability":
        return <ProfitabilityMetrics />;
      case "pitch":
        return <VCPitchDeck />;
      case "industry":
        return <IndustryInsights />;
      case "ai":
        return <AIInsights />;
      case "integrations":
        return <IntegrationsData />;
      case "founders":
        return <FoundersInput />;
      case "fundraising":
        return <Fundraising />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-[280px] bg-sidebar border-r border-sidebar-border transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 flex flex-col`}
      >
        {/* Logo & Brand Section */}
        <div className="px-6 pt-8 pb-6 border-b border-sidebar-border">
          <div className="flex items-center gap-3 mb-4">
            <img src={fyncoLogo} alt="Fynco Logo" className="w-10 h-10 object-contain" />
            <span className="text-[20px] font-[500] text-sidebar-foreground tracking-tight">Fynco</span>
          </div>
          <p className="text-[13px] text-sidebar-foreground/60 leading-relaxed">
            Welcome back to Fynco
          </p>
        </div>

        {/* Close button for mobile */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden absolute top-6 right-6 text-sidebar-foreground/60 hover:text-sidebar-foreground transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-[12px] transition-all ${
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-[0px_1px_3px_rgba(0,0,0,0.06)]"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                }`}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                <span className="text-[14px] font-[400]">{item.name}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-sidebar-border">
          <div className="flex items-center gap-3 px-4 py-3 rounded-[12px] bg-sidebar-accent/30">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground text-[13px] font-[500]">YM</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-[500] text-sidebar-foreground truncate">Yi-Maan</p>
              <p className="text-[11px] text-sidebar-foreground/60 truncate">Founder</p>
            </div>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 overflow-y-auto bg-secondary/30">
          <div className="max-w-[1600px] mx-auto">
            {/* Main Content */}
            <div className="p-4 sm:p-6 lg:p-8">
              {/* Mobile menu button */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden fixed top-4 right-4 z-30 w-10 h-10 rounded-full bg-background border border-border shadow-lg flex items-center justify-center text-foreground/60 hover:text-foreground"
              >
                <Menu className="h-5 w-5" />
              </button>
              
              {renderContent()}
            </div>
          </div>
        </main>
      </div>
      
      {/* Floating Talk to Fyn AI Chat */}
      <TalkToFyn />
    </div>
  );
}