import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <main
      className="min-h-screen w-full flex items-center justify-center 
      bg-gradient-to-br from-slate-50 to-slate-100 p-4"
    >
      <Card className="w-full max-w-lg mx-auto shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardContent className="py-10 text-center space-y-6">
          {/* Animated Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative">
              <div
                className="absolute inset-0 bg-red-100 rounded-full animate-pulse"
                aria-hidden="true"
              />
              <AlertCircle
                className="relative h-16 w-16 text-red-500"
                aria-label="Error icon"
              />
            </div>
          </motion.div>

          {/* Title + Subtitle */}
          <div>
            <h1 className="text-5xl font-bold text-slate-900 mb-1">404</h1>
            <h2 className="text-xl font-semibold text-slate-700">
              Page Not Found
            </h2>
          </div>

          {/* Description */}
          <p className="text-slate-600 leading-relaxed max-w-md mx-auto">
            Sorry, the page you’re looking for doesn’t exist.
            <br className="hidden sm:block" />
            It may have been moved or deleted.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={() => setLocation("/")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 
              rounded-lg transition-all duration-200 shadow-md hover:shadow-lg 
              flex items-center justify-center"
            >
              <Home className="w-4 h-4 mr-2" aria-hidden="true" />
              Go Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
