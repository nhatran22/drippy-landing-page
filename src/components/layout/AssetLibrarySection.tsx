import precisePatterns from "@/assets/precise-patterns.png"
import editor from "@/assets/editor.png"
import { ExternalLink } from "lucide-react"
import { Button } from "../ui/Button"

export default function AssetLibrarySection() {
    return (
        <section className="bg-[#121316] w-full py-16 px-4 sm:py-[60px] sm:px-0">
            <div className="max-w-[950px] w-full min-h-[400px] sm:min-h-[500px] md:h-[833px] mx-auto bg-[#191A1D] rounded-2xl sm:rounded-3xl flex flex-col items-center p-4 sm:p-12">
                <h2 className="text-2xl sm:text-[40px] font-semibold text-white text-center mb-4 mt-8 sm:mt-[56px]">
                    Generate <span className="italic">precise patterns</span> in one-click.
                </h2>
                <a href="#" className="text-base sm:text-[18px] text-[#99999A] text-center mb-6 underline underline-offset-2 hover:text-blue-400 transition block">
                    Each 3D block comes with verified DXF pattern files — ready to send<br />to your seamstress or manufacturer.
                </a>
                <Button
                    className="rounded-full border border-[#33343A] bg-transparent text-[#99999A] text-base sm:text-[16px] w-full max-w-xs sm:w-[181px] sm:h-[50px] py-4 sm:py-0 font-normal shadow-none flex items-center justify-center gap-2 hover:bg-[#23242a]/40 transition mb-8"
                >
                    View a sample <ExternalLink size={18} className="ml-1" />
                </Button>
                <img src={precisePatterns} className="w-full max-w-xs sm:max-w-full mx-auto mb-6 sm:mb-0" />
            </div>
            <div className="flex flex-col md:flex-row justify-center pt-16 sm:pt-[120px] px-0 md:px-8">
                <div className="flex flex-1">
                    <img src={editor} className="w-full max-w-xs sm:max-w-full mx-auto md:mx-0" />
                </div>
                <div className="flex flex-1 flex-col items-start pl-0 md:pl-[108px] mt-8 md:mt-0">
                    <h2 className="text-2xl sm:text-[40px] font-semibold text-white mb-4">
                        The possibilities are quite possibly <span className="italic">endless.</span>
                    </h2>
                    <p className="text-white text-base sm:text-[16px] font-regular mb-6 max-w-xl">
                        Our ever-growing asset library gives you instant access to:
                    </p>
                    <ul className="text-white text-sm sm:text-[16px] font-regular space-y-2 mb-6">
                        <li>• 500+ modular garment blocks, trims and accessories</li>
                        <li>• 300+ curated materials, prints and graphics</li>
                        <li>• 26 million+ possible combinations (for now)</li>
                        <li>• 120+ assets creator & contributors</li>
                        <li>• New assets drop every single month</li>
                    </ul>
                    <Button
                        className="rounded-full border border-[#33343A] bg-transparent text-[#99999A] text-base sm:text-[16px] w-full max-w-xs sm:w-[224px] sm:h-[50px] py-4 sm:py-0 font-normal shadow-none flex items-center justify-center gap-2 hover:bg-[#23242a]/40 transition mb-8"
                    >
                        View assets library <ExternalLink size={18} className="ml-1" />
                    </Button>
                </div>
            </div>
        </section>
    )
} 