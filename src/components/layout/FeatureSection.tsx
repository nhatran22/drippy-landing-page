import Block from "@/assets/3D-block.png"
import Builder from "@/assets/3D-builder.png"
import Patterns from "@/assets/patterns.png"
import { Button } from "../ui/Button"
import { ExternalLink } from "lucide-react"

const features = [
    {
        src: Block,
        title: "3D blocks & assets",
        desc: "Skip the blank canvas — Start by mixing & matching garments blocks and materials.",
    },
    {
        src: Builder,
        title: "Browser-based 3D builder",
        desc: "A lightweight, easy-to-use platform built for speed, not steep learning curves.",
    },
    {
        src: Patterns,
        title: "Export verified patterns",
        desc: "Seamlessly turn designs into sampling-ready sewing patterns in minutes.",
    },
]

export default function FeatureSection() {
    return (
        <section className="bg-[#121316] w-full pt-20 pb-10 px-4 sm:pt-[120px] sm:px-0">
            <div className="w-full">
                <h2 className="text-2xl sm:text-[40px] font-semibold text-center text-white mb-4 sm:pb-[15px]">
                    Built to help you launch <span className="italic">faster</span> and <span className="italic">easier</span>.
                </h2>
                <h2 className="text-base sm:text-[18px] font-regular text-center text-[#99999A] mb-6 sm:mb-0">
                    Go from 3D design to sewing patterns in seconds, not days.
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-[49px] py-6 sm:py-[35px]">
                    {features.map((f, i) => (
                        <div key={i} className="p-4 rounded-xl sm:rounded-2xl mb-4 bg-[#191A1D] flex flex-col items-center">
                            <img src={f.src} className="w-20 h-20 object-contain mb-4" />
                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 pt-4 sm:pt-[35px]">{f.title}</h3>
                            <p className="text-white/70 text-base text-center">{f.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-4 sm:mt-[15px]">
                    <Button
                        className="rounded-full border border-[#33343A] bg-transparent text-[#99999A] text-base sm:text-[16px] w-full max-w-xs sm:w-[181px] sm:h-[50px] py-4 sm:py-0 font-normal shadow-none flex items-center justify-center gap-2 hover:bg-[#23242a]/40 transition"
                    >
                        Try it out <ExternalLink size={18} className="ml-1" />
                    </Button>
                </div>
            </div>
        </section>
    )
} 