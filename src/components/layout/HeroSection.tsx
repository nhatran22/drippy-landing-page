import { Button } from "../ui/Button"
import overviewImg from "@/assets/overview.png"

export default function HeroSection() {
    return (
        <section className="bg-[#121316] w-full flex flex-col items-center justify-center pt-[63px]">
            <h1 className="text-[54px] md:text-[54px] font-semibold text-center text-white mb-4 leading-tight">
                Remix. Export. Launch. <span className="italic">Repeat!</span>
            </h1>
            <p className="text-lg md:text-[21px] text-center text-white/70 max-w-2xl">
                Designing garments and sample-ready patterns has never been this fun — or this fast.
            </p>
            <div className="flex justify-center mt-[15px]">
                <Button className="bg-[#6979FF] hover:bg-[#6979FF] text-white text-[16px] w-[274px] h-[50px] font-semibold shadow transition">
                    Try it yourself – It’s FREE →
                </Button>
            </div>
            <div className="mt-[35px]">
                <img src={overviewImg} className="w-full object-cover rounded" />
            </div>
        </section>
    )
} 