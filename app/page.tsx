import Hero from "./components/sections/Hero";
import Blocks from "./components/sections/Blocks";
import Preorder from "./components/sections/Preorder";
import CommunityLinks from "./components/sections/CommunityLinks";
import Newsletter from "./components/sections/Newsletter";
import PhysicialEditions from "./components/sections/Physicial";
import Screenshots from "./components/sections/Screenshots";
import Trailers from "./components/sections/Trailers";
import UltimateEdition from "./components/sections/UltimateEdition";
import Intro from "./components/sections/Intro";
import FeatureHighlights from "./components/sections/FeatureHighlights";

export default function Home () {
  return (
    <>
      <Hero />
      <Intro />
      <Preorder />
      <FeatureHighlights />
      <UltimateEdition />
      <Trailers />
      <Blocks />
      <Screenshots />
      <PhysicialEditions />
      <Newsletter />
      <CommunityLinks />
    </>
  )
}