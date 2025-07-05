import importAssets from "@/assets/import-assets.png"
import materialLibrary from "@/assets/material-library.png"
import dragAndDrop from "@/assets/drag-and-drop.png"
import materialEditor from "@/assets/material-editor.png"
import scene from "@/assets/3d-scene.png"
import realisticAvatars from "@/assets/realistic-avatars.png"
import templateLibrary from "@/assets/template-library.png"
import imageAndVideo from "@/assets/image-and-video.png"
import designGenerator from "@/assets/design-generator.png"


const features = [
    {
        icon: importAssets,
        title: "Import assets",
        desc: "Bring in your own 3D garments from CLO3D, Browzwear, Marvelous, or any tool that exports GLTF, GLB, or FBX.",
    },
    {
        icon: materialLibrary,
        title: "Material library",
        desc: "Access hundreds of curated materials, prints and graphics/artworks — or upload your own files.",
    },
    {
        icon: dragAndDrop,
        title: "Drag & Drop Graphics",
        desc: "Add logos, patches, or custom artwork by simply dragging them onto your garment. No mapping required.",
    },
    {
        icon: materialEditor,
        title: "Material editor",
        desc: "Tweak fabric color, shine, repeat, and opacity — directly on your 3D garment to make it truly yours.",
    },
    {
        icon: scene,
        title: "3D scene & background",
        desc: "Change backgrounds, lighting, and floor settings to set the perfect scene for your design or content export.",
    },
    {
        icon: realisticAvatars,
        title: "Realistic Avatars",
        desc: "Preview your designs on lifelike avatars — built to showcase drape and silhouette accurately.",
    },
    {
        icon: templateLibrary,
        title: "Templates library",
        desc: "Start with pre-designed looks and customize from there. All templates are made from verified modular blocks.",
    },
    {
        icon: imageAndVideo,
        title: "Image and video export",
        desc: "Download crisp PNGs or short turntable videos of your look — perfect for portfolios, pitches, or social media.",
    },
    {
        icon: designGenerator,
        title: "Instant design generator",
        desc: "Shuffle blocks, materials, and colors in one click to spark ideas and explore new directions instantly.",
    },
]

export default function CreativeEngineSection() {
    return (
        <section className="bg-[#121316] w-full py-16 px-4">
            <div className="w-full px-4 md:px-[38px]">
                <h2 className="text-[40px] md:text-[40px] font-semibold text-center text-white mb-[13px]">
                    Your creative engine right <span className="italic">on the browser.</span>
                </h2>
                <h2 className="text-[18px] text-[#99999A] font-regular text-center">
                    Enjoy the full power of 3D technology - minus the complexity
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[41px] pt-6 md:pt-10">
                    {features.map((f, i) => (
                        <div key={i} className="bg-[#191A1D] rounded-2xl p-4 md:p-7 flex flex-col items-center text-center shadow-lg border border-white/5 w-full h-[279px]">
                            <div className="flex items-center justify-center rounded-2xl bg-[#1F2023] w-14 h-14 mb-5">
                                <img src={f.icon} className="w-7 h-7 opacity-60" />
                            </div>
                            <h3 className="text-base font-semibold text-white mb-2">{f.title}</h3>
                            <p className="text-[#99999A] text-sm font-normal leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 