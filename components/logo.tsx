import { Code2, Play } from "lucide-react"


function logo() {
  return (
    <>
        <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-violet-500/25
            group-hover:shadow-violet-500/40 transition-shadow">
                <Code2 className="w-5 h-5 text-white" />

            </div>
            <div className="absolute bottom-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                <Play className="w-2 h-2 text-white fill-white" />
            </div>
        </div>
        <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight loading-none"> NORTHTOWER </span>
            <span className="text-[10px] uppercase tracking-[0.2rem] text-zinc-500">ACADEMY</span>
        </div>
    </>
  )
}

export default logo