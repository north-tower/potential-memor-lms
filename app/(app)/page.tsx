import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";
import { BookOpen, LayoutDashboard, Play, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const user = await currentUser();
  const isSignedIn = !!user;

  return (
    <div className="min-h-screen bg-[#09090b] text-white overflow-hidden">
    {/* Animated gradient mesh background */}
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[120px] animate-pulse" />
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-fuchsia-600/15 rounded-full blur-[100px] animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-[40%] right-[20%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[80px] animate-pulse"
        style={{ animationDelay: "2s" }}
      />
    </div>

    {/* Noise texture overlay */}
    <div
      className="fixed inset-0 pointer-events-none opacity-[0.015]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}
    />

    {/* Navigation */}
    <Header />

    <main className="relative z-10">
        <section className="px-6 lg:px-12 pt-16 pb-24 max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-8 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <Sparkles className="w-4 h-4 text-violet-400" />
              <span className="text-sm text-violet-300">
                Learn to code with real-world projects
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight leading-[0.95] mb-8 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="block text-white">Master coding</span>
              <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                the modern way
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Join Northtower&apos;s Academy and learn from expertly crafted courses,
              modules, and hands-on lessons. From free fundamentals to{" "}
              <span className="text-fuchsia-400">Pro exclusives</span> and{" "}
              <span className="text-cyan-400">Ultra gems</span>.
            </p>
                        {/* CTA Buttons */}
                        <div
              className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              {isSignedIn ? (
                <>
                  <Link href="/dashboard">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white border-0 shadow-xl shadow-violet-600/30 px-8 h-12 text-base font-semibold"
                    >
                      <LayoutDashboard className="w-4 h-4 mr-2" />
                      Go to Dashboard
                    </Button>
                  </Link>
                  <Link href="/dashboard/courses">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-zinc-700 bg-white/5 text-white px-8 h-12 text-base hover:bg-white/10 hover:text-white"
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      My Courses
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/pricing">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white border-0 shadow-xl shadow-violet-600/30 px-8 h-12 text-base font-semibold"
                    >
                      <Play className="w-4 h-4 mr-2 fill-white" />
                      Start Learning Free
                    </Button>
                  </Link>
                  <Link href="/dashboard">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-zinc-700 bg-white/5 text-white px-8 h-12 text-base hover:bg-white/10 hover:text-white"
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      Browse Courses
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
