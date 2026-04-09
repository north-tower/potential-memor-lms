import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[-600px] bg-violet-600/20 rounded-full blur-[120px] animate-pulse"/>
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-fuchsia-600/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay:  "1s"}}/>
        <div className="absolute top-[40%] left-[20%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay:  "2s"}}/>

        <div className="fixed inset-0 pointer-events-none opacity-[0.015]"
          style={{backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'
           viewBox='0 0 100 100' width='100' height='100' preserveAspectRatio='none'><filter id='noise'><feTurbulence type='fractalNoise' 
           baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(#noise)'/></svg>")`}} />

           <Header />
      </div>
    </div>
  );
}
