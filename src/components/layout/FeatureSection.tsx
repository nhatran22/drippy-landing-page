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
        <section className="bg-[#121316] w-full pt-[120px]">
            <div className="w-full">
                <h2 className="text-[40px] md:text-[40px] font-semibold text-center text-white pb-[15px]">
                    Built to help you launch <span className="italic">faster</span> and <span className="italic">easier</span>.
                </h2>
                <h2 className="text-[18px] font-regular text-center text-[#99999A]">
                    Go from 3D design to sewing patterns in seconds, not days.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[49px] py-6 md:py-[35px]">
                    {features.map((f, i) => (
                        <div key={i}>
                            <img src={f.src} />
                            <h3 className="text-xl font-semibold text-white mb-2 pt-[35px]">{f.title}</h3>
                            <p className="text-white/70 text-base">{f.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-[15px]">
                    <Button
                        className="rounded-full border border-[#33343A] bg-transparent text-[#99999A] text-[16px] w-[181px] h-[50px] font-normal shadow-none flex items-center justify-center gap-2 hover:bg-[#23242a]/40 transition"
                    >
                        Try it out <ExternalLink size={18} className="ml-1" />
                    </Button>
                </div>
            </div>
        </section>
    )
} 