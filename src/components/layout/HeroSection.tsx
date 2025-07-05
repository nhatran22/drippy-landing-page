import { Button } from "../ui/Button"
import overviewImg from "@/assets/overview.png"

export default function HeroSection() {
    return (
        <section className="bg-[#121316] w-full flex flex-col items-center justify-center pt-20 pb-10 px-4 sm:pt-[63px] sm:px-0">
            <h1 className="text-3xl sm:text-[54px] font-semibold text-center text-white mb-4 leading-tight sm:leading-tight">
                Remix. Export. Launch. <span className="italic">Repeat!</span>
            </h1>
            <p className="text-base sm:text-lg text-center text-white/70 max-w-xs sm:max-w-2xl mt-2 mb-4">
                Designing garments and sample-ready patterns has never been this fun — or this fast.
            </p>
            <div className="flex justify-center mt-4 mb-4 w-full">
                <Button className="bg-[#6979FF] hover:bg-[#6979FF] text-white text-base sm:text-[16px] w-full max-w-xs sm:w-[274px] sm:h-[50px] py-4 sm:py-0 font-semibold shadow transition">
                    Try it yourself – It’s FREE →
                </Button>
            </div>
            <div className="mt-8 w-full flex justify-center">
                <img src={overviewImg} className="w-full max-w-xs sm:max-w-full mx-auto rounded-lg object-cover" />
            </div>
        </section>
    )
} 