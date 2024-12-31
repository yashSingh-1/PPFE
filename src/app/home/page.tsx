import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Brain, TrendingUp, Lock, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-100 ">
      <Navbar />

      <main className="bg-black">
        {/* Hero Section */}
        <section className="container mx-auto px-10 py-20 text-center flex-col justify-start items-center border-b font-mono">
          <h1
            className="text-5xl w-full font-bold mb-6 bg-gradient-to-r from-blue-500
           via-green-500 to-purple-500 animate-gradientMove bg-[length:200%_200%]
            rounded-lg"
          >
            Analyze Social Media Posts with AI
          </h1>
          <p className="text-xl mb-8 text-gray-400">
            Unlock insights from your social media content using advanced AI
            technology
          </p>
          <Link href={"/"}>
            <Button className="bg-purple-600 hover:bg-purple-700 font-mono text-white px-8 py-6 rounded-lg text-lg">
              Get Started
            </Button>
          </Link>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-gray-950 py-20 ">
          <div className="container mx-auto px-4 ">
            <h2 className="text-3xl font-bold mb-12 text-center mt-6">
              Key Features
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<Brain className="w-12 h-12 text-purple-600" />}
                title="AI-Powered Analysis"
                description="Leverage cutting-edge AI to gain deep insights from your social media posts."
              />
              <FeatureCard
                icon={<TrendingUp className="w-12 h-12 text-purple-600" />}
                title="Improve Traction"
                description="Improve traction by analysing what works and what doesn't."
              />
              <FeatureCard
                icon={<Lock className="w-12 h-12 text-purple-600" />}
                title="Privacy Focused"
                description="Your data is secure with our robust privacy measures and encryption."
              />
              <FeatureCard
                icon={<Zap className="w-12 h-12 text-purple-600" />}
                title="Insights into what people think!"
                description="Get into what posting content that you do does to Audience."
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          id="how-it-works"
          className="container mx-auto px-4 py-20 border-t font-mono"
        >
          <h2 className="text-3xl font-bold mb-12 text-center ">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard
              number="1"
              title="Connect Your Accounts"
              description="Easily link your social media accounts to PostPulse."
            />
            <StepCard
              number="2"
              title="AI Analyzes Your Content"
              description="Our advanced AI processes and analyzes your posts and engagement data."
            />
            <StepCard
              number="3"
              title="Get Valuable Insights"
              description="Receive detailed reports and actionable insights to improve your social media strategy."
            />
          </div>
        </section>

        {/* Call to Action */}
        <section
          className="bg-purple-900 py-20"
          style={{
            backgroundImage: `
              radial-gradient(circle, red 1px, transparent 2px),
              radial-gradient(circle, blue 1px, transparent 1px),
              radial-gradient(circle, green 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            backgroundPosition: "0 0, 40px 13px, 21px 5px",
          }}
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Pulse Up Your Social Media?
            </h2>
            <p className="text-xl mb-8">
              Join PostPulse today and transform your social media strategy with
              AI-powered insights.
            </p>
            <Button className="bg-white text-purple-900 hover:bg-gray-200 px-8 py-3 rounded-full text-lg">
              Start Your Free Trial
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 PostPulse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode,
  title: string,
  description: string
}) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg text-center bg-gradient-to-r from-blue-950 via-black to-yellow-950">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg text-center">
      <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
