import { Suspense, lazy } from "react";
import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ClipLoader } from "react-spinners";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Destinations = lazy(() => import("./pages/DestinationsPage"));
const Experiences = lazy(() => import("./pages/ExperiencesPage"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const Contact = lazy(() => import("./pages/Contact"));
const Yacht = lazy(() => import("./pages/Yacht"));
const NotFound = lazy(() => import("./pages/NotFound"));

function Router() {
  return (
       <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen bg-background">
          <ClipLoader color="#fff" size={60} />
        </div>
      }
    >
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/destinations" component={Destinations} />
        <Route path="/experiences" component={Experiences} />
        <Route path="/how-it-works" component={HowItWorks} />
        <Route path="/contact" component={Contact} />
        <Route path="/yacht" component={Yacht} />
        {/* Fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
