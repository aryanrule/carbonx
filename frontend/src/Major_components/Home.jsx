import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#2E8B57] via-[#3CB371] to-[#66CDAA] backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold inline-block bg-gradient-to-r from-[#2E8B57] via-[#3CB371] to-[#66CDAA] bg-clip-text text-transparent z-30"

          >
            Codex
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <btn className="bg-white text-[#2E8B57] hover:bg-white/90 transition px-4 py-2 rounded-lg">
                Login
              </btn>
            </Link>

            <Link to="/signup">
              <btn className="bg-white text-[#2E8B57] hover:bg-white/90 transition px-4 py-2 rounded-lg font-semibold">
                Sign Up
              </btn>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Build Something{" "}
            <span className="bg-gradient-to-r from-[#2E8B57] via-[#3CB371] to-[#66CDAA] bg-clip-text text-transparent">
              Amazing
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Simple, powerful, and elegant. Start your journey with us today.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link to="/signup">
              <btn className="bg-gradient-to-r from-[#2E8B57] via-[#3CB371] to-[#66CDAA] text-white hover:opacity-90 transition-opacity gap-2 px-6 py-3 rounded-lg flex items-center">
                Get Started <ArrowRight className="w-5 h-5" />
              </btn>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#2E8B57] via-[#3CB371] to-[#66CDAA] flex items-center justify-center mb-5">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast & Reliable</h3>
              <p className="text-muted-foreground">
                Lightning-fast performance you can count on.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#2E8B57] via-[#3CB371] to-[#66CDAA] flex items-center justify-center mb-5">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure</h3>
              <p className="text-muted-foreground">
                Your data is protected with enterprise-grade security.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#2E8B57] via-[#3CB371] to-[#66CDAA] flex items-center justify-center mb-5">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Team Ready</h3>
              <p className="text-muted-foreground">
                Collaborate seamlessly with your entire team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2026 GreenFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
