
import CategorySection from "@/components/CategorySection";
import HeroBanner from "@/components/HeroBanner";
import ServicesSection from "@/components/ServicesSection";
import VideoFrame from "@/components/VideoFrame";
import WhyUsSection from "@/components/Whyussection";

export default function Home() {
  return (
   <div>
{/* <div className="h-screen bg-white ">

</div> */}

<HeroBanner />
<ServicesSection />
<WhyUsSection />
<VideoFrame />
<CategorySection />
<div className="h-screen">

</div>
    </div>
  );
}
