import imagin from "@/assets/imagin.png"
import { ExternalLink } from "lucide-react"
import { Button } from "../ui/Button"

export default function GalleryGridSection() {
    return (
        <section className="bg-[#121316] w-full pt-20 pb-10 px-4 sm:pt-0 sm:pb-0 sm:px-0">
            <div className="w-full justify-center">
                <h2 className="text-2xl sm:text-[40px] font-semibold text-center text-white mb-4 sm:mb-[13px]">
                    Create everything you can <span className="italic">imagine.</span>
                </h2>
                <h2 className="text-base sm:text-[18px] text-center text-[#99999A] font-regular mb-6 sm:mb-0">
                    Never start from scratch ever again.
                </h2>
                <div>
                    <div className="grid grid-cols-2 gap-3 justify-center py-4 sm:flex sm:gap-6 sm:justify-center sm:py-6">
                        {[
                            "Dress",
                            "Jumpsuit",
                            "T-shirt",
                            "Blouse",
                            "Hoodie",
                            "Jacket",
                            "Skirt",
                        ].map((item, idx) => (
                            <button
                                key={item}
                                type="button"
                                className={`px-3 py-2 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ease-in-out
                                ${idx === 0
                                        ? "bg-[#23242a] text-white shadow-lg"
                                        : "bg-transparent text-[#99999A] hover:bg-[#23242a]/60 hover:text-white"
                                    }
                                focus:outline-none focus:ring-2 focus:ring-[#23242a] focus:ring-offset-2 focus:ring-offset-[#121316] w-full sm:w-auto`}
                                onClick={(e) => {
                                    // Remove active class from all buttons
                                    e.currentTarget.parentElement?.querySelectorAll('button').forEach(btn => {
                                        btn.classList.remove('bg-[#23242a]', 'text-white', 'shadow-lg');
                                        btn.classList.add('bg-transparent', 'text-[#99999A]');
                                    });
                                    // Add active class to clicked button
                                    e.currentTarget.classList.remove('bg-transparent', 'text-[#99999A]');
                                    e.currentTarget.classList.add('bg-[#23242a]', 'text-white', 'shadow-lg');
                                }}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center pt-6 sm:pt-[35px]">
                    <img src={imagin} className="w-full max-w-xs sm:max-w-full h-auto mx-auto" />
                </div>
                <div className="flex justify-center mt-8 sm:mt-[35px]">
                    <Button
                        className="rounded-full border border-[#33343A] bg-transparent text-[#99999A] text-base sm:text-[16px] w-full max-w-xs sm:w-[181px] sm:h-[50px] py-4 sm:py-0 font-normal shadow-none flex items-center justify-center gap-2 hover:bg-[#23242a]/40 transition"
                    >
                        Browse designs <ExternalLink size={18} className="ml-1" />
                    </Button>
                </div>
            </div>
        </section>
    )
} 