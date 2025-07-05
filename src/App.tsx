import AssetLibrarySection from './components/layout/AssetLibrarySection';
import CreativeEngineSection from './components/layout/CreativeEngineSection';
import FeatureSection from './components/layout/FeatureSection';
import GalleryGridSection from './components/layout/GalleryGridSection';
import Header from './components/layout/Header';
import HeroSection from './components/layout/HeroSection';

function App() {
  return (
    <div className="min-h-screen bg-[#121316] flex flex-col p-[50px] font-poppins">
      <Header />
      <HeroSection />
      <FeatureSection />
      <CreativeEngineSection />
      <AssetLibrarySection />
      <GalleryGridSection />
    </div>
  );
}

export default App;
