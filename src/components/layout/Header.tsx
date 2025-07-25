import React from "react"

import { Menu, LogIn, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "../ui/Button"

import discord from "@/assets/discord.png"
import instagram from "@/assets/instagram.png"
import social1 from "@/assets/social-1.png"
import social2 from "@/assets/social-2.png"
import drippyIcon from "@/assets/drippy-icon.png"

const socials = [
    {
        icon: discord, href: "#"
    },
    { icon: instagram, href: "#" },
    { icon: social1, href: "#" },
    { icon: social2, href: "#" },
]

export const Header: React.FC = () => {
    return (
        <header
            className={cn(
                "fixed top-0 left-0 w-full z-50 flex justify-center transition-shadow"
            )}
        >
            <div className="max-w-[1178px] w-full bg-[#18181b]/95 backdrop-blur border-b border-transparent shadow-lg border-border rounded-none sm:rounded-full mt-0 sm:mt-4 h-[56px] sm:h-[64px] px-2 sm:px-6">
                <div className="max-w-6xl pl-4 pr-4 sm:pl-12 sm:pr-6 flex items-center h-full w-full">
                    {/* Logo */}
                    <img src={drippyIcon} className="h-8" />
                    {/* Menu */}
                    <nav className="hidden md:flex ml-8 gap-2 text-sm font-regular text-white/90">
                        <div className="relative group">
                            <button className="px-3 py-2 rounded-lg hover:bg-white/5 transition">Product <span className="ml-1">▼</span></button>
                            {/* Dropdown giả lập */}
                            {/* <div className="absolute left-0 top-full mt-2 bg-[#23232b] rounded-xl shadow-lg p-2 min-w-[160px] opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition z-20">
                                <a href="#" className="block px-3 py-2 rounded hover:bg-white/10">3D Builder</a>
                                <a href="#" className="block px-3 py-2 rounded hover:bg-white/10">Asset Library</a>
                                <a href="#" className="block px-3 py-2 rounded hover:bg-white/10">Pattern Export</a>
                            </div> */}
                        </div>
                        <a href="#" className="px-3 py-2 rounded-lg hover:bg-white/5 transition">Pricing</a>
                        <a href="#" className="px-3 py-2 rounded-lg hover:bg-white/5 transition flex items-center gap-1">ITF <ExternalLink size={14} /></a>
                    </nav>
                    {/* Socials */}
                    <div className="hidden md:flex items-center gap-4 ml-auto mr-6">
                        {socials.map((s, i) => (
                            <a key={i} href={s.href} className="hover:text-blue-400 text-white/80 transition" target="_blank" rel="noopener noreferrer">
                                <img src={s.icon} />
                            </a>
                        ))}
                    </div>
                    {/* Auth buttons */}
                    <div className="hidden md:flex gap-2">
                        <Button variant="outline" className="rounded-full border-white/10 bg-white/5 text-white/80 hover:bg-white/10 px-5"><LogIn size={16} className="mr-2" />Log in</Button>
                        <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-6 font-semibold shadow">Drip it</Button>
                    </div>
                    {/* Mobile menu */}
                    <div className="sm:hidden ml-auto flex items-center">
                        <Button size="icon" variant="ghost" className="rounded-full text-white w-10 h-10 p-0 flex items-center justify-center"><Menu size={28} /></Button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header 
