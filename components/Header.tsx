'use client'
import { Show, useAuth, useUser } from "@clerk/nextjs"
import Link from 'next/link'
import Logo from './logo'
import { cn } from "@/lib/utils";
import { BookOpen, LayoutDashboard, Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";
const loggedOutLinks = [
  {href: "#courses", label: "Courses"},
  {href: "/pricing", label: "Pricing"},
  { href: "#testimonials", label: "Reviews"}
]
function Header() {
  const pathname = usePathname()
  const { has} = useAuth();

  const isUltra = has?.({ plan: "ultra" });

  const loggedInLinks = [
    {href: "/dashboard",  label: "Dashboard", icon: LayoutDashboard},
    {href: "/dashboard/courses", label: "My Courses", icon: BookOpen},
    ...(isUltra ? [{
      href: "/pricing", label: "Account", icon: Sparkles
    }]: [{ href: "/pricing", label: "Upgrade", icon: Sparkles }])
  ]


  return (
    <nav className="relative z-10 flex items-center justify-between px-6 lg:px-6 lg:px-12 py-5 max-w-7xl mx-auto">
    
        <div>
          <Show when="signed-in">
            <Link href="/dashboard" className="flex 
            items-center gap-3 group">
              <Logo />
            </Link>
          </Show>
          <Show when="signed-out">
            <Link href='/' className="flex 
            items-center gap-3 group">
              <Logo />
            </Link>
          </Show>
        </div>

        <div className="hidden md:flex absolute left-1/2 top-1/2 
        -translate-x-1/2 -translate-y-1/2">
          <Show when="signed-out">
            <div className="flex items-center gap-8 text-sm text-zinc-400">
              {loggedOutLinks.map((link) => (
                <Link href={link.href} key={link.href} 
                className="hover:text-white transition-colors duration-200">
                  {link.label}
                </Link>
              ))}

            </div>
          </Show>

          <Show when="signed-in">
            <div className="flex items-center gap-1">
              {loggedInLinks.map((link) => {
                const Icon  = link.icon;
                const isActive = pathname === link.href || 
                (link.href !== "/dashboard" && pathname.startsWith(link.href));

                return (
                  <Link key={link.href} href={link.href} className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                    isActive ? "bg-violet-500/10 text-violet-300" :
                    "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                  )}>
                    <Icon className="w-4 h-4" />
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </Show>
          </div>
    </nav>
  )
}

export default Header