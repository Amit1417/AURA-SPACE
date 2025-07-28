import { useLocation } from "react-router-dom";
import { Construction, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface PlaceholderPageProps {
  title?: string;
  description?: string;
}

export default function PlaceholderPage({ 
  title = "Page Under Construction", 
  description = "This page is currently being built. Check back soon!" 
}: PlaceholderPageProps) {
  const location = useLocation();
  const pageName = location.pathname.replace("/", "").replace("-", " ") || "home";

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="glass-card p-8 rounded-2xl space-y-6">
          <div className="flex justify-center">
            <div className="p-4 rounded-full bg-neon/20 animate-float">
              <Construction className="h-12 w-12 text-neon" />
            </div>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-foreground capitalize">
              {title}
            </h1>
            <p className="text-muted-foreground">
              {description}
            </p>
            <p className="text-sm text-muted-foreground">
              Page: <span className="capitalize">{pageName}</span>
            </p>
          </div>

          <div className="space-y-3">
            <Button asChild className="w-full bg-neon hover:bg-neon/90 text-neon-foreground">
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Homepage
              </Link>
            </Button>
            
            <p className="text-xs text-muted-foreground">
              💡 Continue prompting to have me build this page with the features you need!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
