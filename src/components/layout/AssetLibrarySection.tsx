import precisePatterns from "@/assets/precise-patterns.png"
import editor from "@/assets/editor.png"
import { ExternalLink } from "lucide-react"
import { Button } from "../ui/Button"

export default function AssetLibrarySection() {
    return (
        <section className="bg-[#121316] w-full py-[60px]">
            <div className="max-w-[950px] w-full min-h-[500px] md:h-[833px] mx-auto bg-[#191A1D] rounded-3xl flex flex-col items-center p-4 md:p-12">
                <h2 className="text-[40px] font-semibold text-white text-center mb-4 mt-[56px]">
                    Generate <span className="italic">precise patterns</span> in one-click.
                </h2>
                <a href="#" className="text-[18px] text-[#99999A] text-center mb-6 underline underline-offset-2 hover:text-blue-400 transition block">
                    Each 3D block comes with verified DXF pattern files — ready to send<br />to your seamstress or manufacturer.
                </a>
                <Button
                    className="rounded-full border border-[#33343A] bg-transparent text-[#99999A] text-[16px] w-[181px] h-[50px] font-normal shadow-none flex items-center justify-center gap-2 hover:bg-[#23242a]/40 transition mb-8"
                >
                    View a sample <ExternalLink size={18} className="ml-1" />
                </Button>
                <img src={precisePatterns} className="max-h-[300px] md:max-h-[530px] w-auto mx-auto" />
            </div>
            <div className="flex flex-row justify-center pt-[120px]">
                <img src={editor} />
                <div className="flex flex-col items-start pl-[108px]">
                    <h2 className="text-[40px] font-semibold text-white mb-4">
                        The possibilities are quite possibly <span className="italic">endless.</span>
                    </h2>
                    <p className="text-white text-[16px] font-regular mb-6 max-w-xl">
                        Our ever-growing asset library gives you instant access to:
                    </p>
                    <ul className="text-white text-[16px] font-regular space-y-2 mb-6">
                        <li>• 500+ modular garment blocks, trims and accessories</li>
                        <li>• 300+ curated materials, prints and graphics</li>
                        <li>• 26 million+ possible combinations (for now)</li>
                        <li>• 120+ assets creator & contributors</li>
                        <li>• New assets drop every single month</li>
                    </ul>
                    <Button
                        className="rounded-full border border-[#33343A] bg-transparent text-[#99999A] text-[16px] w-[224px] h-[50px] font-normal shadow-none flex items-center justify-center gap-2 hover:bg-[#23242a]/40 transition mb-8"
                    >
                        View assets library <ExternalLink size={18} className="ml-1" />
                    </Button>
                </div>
            </div>
        </section>
    )
} 