import { FileText, Download, Eye } from "lucide-react";
import { Button } from "./ui/button";

const templates = [
  { name: "Series A Template", slides: 18, description: "Comprehensive deck for Series A fundraising" },
  { name: "Seed Round Template", slides: 12, description: "Focused deck for seed stage investors" },
  { name: "Product Update", slides: 8, description: "Quick update for existing investors" },
];

const savedDecks = [
  { title: "Q4 Investor Update", date: "Oct 15", slides: 15 },
  { title: "Series A Deck v3", date: "Sep 28", slides: 18 },
  { title: "Board Meeting Deck", date: "Sep 15", slides: 12 },
];

export function VCPitchDeck() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="glass-card rounded-[16px] sm:rounded-[24px] p-4 sm:p-6 lg:p-8 shadow-[0px_2px_8px_rgba(0,0,0,0.04)] transition-all hover:shadow-[0px_4px_16px_rgba(0,0,0,0.06)]">
        <div className="space-y-4 sm:space-y-6">
          <div>
            <p className="text-[11px] sm:text-[12px] text-muted-foreground tracking-wide uppercase mb-1">
              Fundraising Tools
            </p>
            <h3 className="text-[20px] sm:text-[24px] lg:text-[32px] font-[300] tracking-tight text-foreground">
              VC Pitch Deck Maker
            </h3>
            <p className="text-[13px] sm:text-[14px] text-muted-foreground mt-2">
              Create professional investor decks powered by your dashboard data
            </p>
          </div>

          {/* Templates */}
          <div>
            <h4 className="text-[15px] sm:text-[16px] font-[500] text-foreground mb-3">Choose a Template</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {templates.map((template, index) => (
                <div
                  key={index}
                  className="p-5 rounded-[14px] bg-secondary/30 border border-border hover:border-primary/30 transition-all cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <FileText className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-[11px] text-muted-foreground">{template.slides} slides</span>
                  </div>
                  <h5 className="text-[15px] font-[500] text-foreground mb-1">{template.name}</h5>
                  <p className="text-[12px] text-muted-foreground">{template.description}</p>
                  <Button className="w-full mt-4" variant="outline">
                    Use Template
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Saved Decks */}
          <div>
            <h4 className="text-[15px] sm:text-[16px] font-[500] text-foreground mb-3">Saved Decks</h4>
            <div className="space-y-3">
              {savedDecks.map((deck, index) => (
                <div
                  key={index}
                  className="p-4 rounded-[14px] bg-secondary/20 border border-border hover:border-primary/20 transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[14px] font-[500] text-foreground">{deck.title}</p>
                      <p className="text-[12px] text-muted-foreground">{deck.date} • {deck.slides} slides</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
