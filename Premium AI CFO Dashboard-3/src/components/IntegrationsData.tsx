import { useState } from "react";
import { FileSpreadsheet, Upload, Sheet, Building2, Receipt, Calculator, Info, CheckCircle2, Clock, AlertCircle } from "lucide-react";

interface Integration {
  id: string;
  name: string;
  description: string;
  icon: typeof FileSpreadsheet;
  status: "connected" | "not-connected";
  lastSynced?: string;
  buttonText: string;
}

const integrations: Integration[] = [
  {
    id: "excel",
    name: "Excel",
    description: "Sync your financial models directly from spreadsheets.",
    icon: FileSpreadsheet,
    status: "connected",
    lastSynced: "2 hours ago",
    buttonText: "Manage",
  },
  {
    id: "csv",
    name: "CSV Upload",
    description: "Manually upload transaction or cashflow data.",
    icon: Upload,
    status: "not-connected",
    buttonText: "Upload",
  },
  {
    id: "google-sheets",
    name: "Google Sheets",
    description: "Connect live business data via Sheets integration.",
    icon: Sheet,
    status: "connected",
    lastSynced: "1 day ago",
    buttonText: "Manage",
  },
  {
    id: "bank",
    name: "Bank Accounts",
    description: "Link your business bank accounts for real-time cash tracking.",
    icon: Building2,
    status: "not-connected",
    buttonText: "Connect",
  },
  {
    id: "xero",
    name: "Xero",
    description: "Sync invoices, expenses, and reports automatically.",
    icon: Receipt,
    status: "connected",
    lastSynced: "Just now",
    buttonText: "Manage",
  },
  {
    id: "quickbooks",
    name: "QuickBooks",
    description: "Connect your accounting data for automated insights.",
    icon: Calculator,
    status: "not-connected",
    buttonText: "Connect",
  },
];

export function IntegrationsData() {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <h1 className="text-[32px] font-[300] tracking-tight text-foreground">
            Integrations & Data
          </h1>
          <button className="w-8 h-8 rounded-full bg-secondary/50 hover:bg-secondary/70 flex items-center justify-center transition-colors group">
            <Info className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </button>
        </div>
        <p className="text-[14px] text-muted-foreground max-w-3xl">
          Connect your financial sources for automated reporting and forecasting.
        </p>
      </div>

      {/* Integration Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
        {integrations.map((integration) => {
          const Icon = integration.icon;
          const isConnected = integration.status === "connected";

          return (
            <div
              key={integration.id}
              className="glass-card rounded-[20px] p-6 shadow-[0px_2px_12px_rgba(0,0,0,0.04)] border border-border/50 min-h-[260px] flex flex-col hover:scale-[1.02] hover:shadow-[0px_8px_24px_rgba(0,0,0,0.08)] transition-all duration-200"
            >
              {/* Top Row: Icon + Status */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-[12px] bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-primary stroke-[1.5]" />
                </div>
                <div className="flex items-center">
                  {isConnected ? (
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#D1FAE5] border border-[#10B981]/20">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                      <span className="text-[11px] text-[#10B981]">Connected</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E5E7EB] border border-[#D1D5DB]">
                      <AlertCircle className="w-3.5 h-3.5 text-[#6B7280]" />
                      <span className="text-[11px] text-[#6B7280]">Not Connected</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[18px] font-[400] text-foreground mb-2" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
                {integration.name}
              </h3>

              {/* Description */}
              <p className="text-[14px] text-[#6B7280] leading-relaxed mb-2">
                {integration.description}
              </p>

              {/* Last Synced (if connected) */}
              {isConnected && integration.lastSynced ? (
                <div className="flex items-center gap-2 text-[#6B7280] mb-6">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="text-[12px]">Last synced {integration.lastSynced}</span>
                </div>
              ) : (
                <div className="mb-6 h-[20px]"></div>
              )}

              {/* Spacer to push button to bottom */}
              <div className="flex-1"></div>

              {/* Action Button */}
              <button
                className={`w-full h-[44px] rounded-[12px] text-[14px] font-[500] transition-all flex items-center justify-center ${
                  isConnected
                    ? "bg-[#E9ECEF] border-0 text-foreground hover:bg-primary hover:text-primary-foreground shadow-[0px_1px_3px_rgba(0,0,0,0.08),0px_1px_2px_rgba(0,0,0,0.06)]"
                    : "bg-primary border-0 text-primary-foreground hover:bg-primary/90 shadow-[0px_1px_3px_rgba(0,0,0,0.08),0px_1px_2px_rgba(0,0,0,0.06)]"
                }`}
              >
                {integration.buttonText}
              </button>
            </div>
          );
        })}
      </div>

      {/* Footer Info Bar */}
      <div className="rounded-[20px] p-6 bg-[#F3F4F6] border border-border/30">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex-1 text-center sm:text-left">
            <p className="text-[14px] text-foreground">
              Have an integration you'd like to request?{" "}
              <span className="text-primary font-[500] cursor-pointer hover:underline" onClick={() => setShowContactModal(true)}>
                Contact us
              </span>
            </p>
          </div>
          <button
            onClick={() => setShowContactModal(true)}
            className="px-6 py-2.5 bg-[#E9ECEF] border-0 text-foreground rounded-[12px] text-[14px] font-[500] hover:bg-primary hover:text-primary-foreground transition-all whitespace-nowrap shadow-[0px_1px_3px_rgba(0,0,0,0.08),0px_1px_2px_rgba(0,0,0,0.06)]"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowContactModal(false)}
        >
          <div
            className="bg-background rounded-[20px] p-8 max-w-md w-full shadow-[0px_16px_48px_rgba(0,0,0,0.2)] border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-5">
              <div>
                <h3 className="text-[20px] text-foreground mb-2">
                  Request an Integration
                </h3>
                <p className="text-[13px] text-muted-foreground">
                  Tell us which integration you need and we'll add it to our roadmap.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-[12px] text-muted-foreground mb-2 block">
                    Integration Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Stripe, Salesforce, HubSpot"
                    className="w-full px-4 py-3 rounded-[12px] bg-background border border-border text-[13px] focus:outline-none focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground"
                  />
                </div>

                <div>
                  <label className="text-[12px] text-muted-foreground mb-2 block">
                    Use Case
                  </label>
                  <textarea
                    placeholder="How would this integration help your business?"
                    rows={4}
                    className="w-full px-4 py-3 rounded-[12px] bg-background border border-border text-[13px] focus:outline-none focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground resize-none"
                  />
                </div>

                <div>
                  <label className="text-[12px] text-muted-foreground mb-2 block">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-[12px] bg-background border border-border text-[13px] focus:outline-none focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => setShowContactModal(false)}
                  className="flex-1 px-5 py-2.5 bg-secondary text-foreground rounded-[12px] text-[13px] hover:bg-secondary/70 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowContactModal(false)}
                  className="flex-1 px-5 py-2.5 bg-primary text-primary-foreground rounded-[12px] text-[13px] hover:bg-primary/90 transition-colors"
                >
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}