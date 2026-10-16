import HeroBanner from "@/components/HeroBanner";
import ServicesSection from "@/components/ServicesSection";
import CompanyStorySection from "@/components/CompanyStorySection";
import IndustriesSection from "@/components/IndustriesSection";
import PartnerBrandsSection from "@/components/PartnerBrandsSection";
import WhyUsSection from "@/components/Whyussection";

import GallerySection from "@/components/GallerySection";
import VideoFrame from "@/components/VideoFrame";
import CategorySection from "@/components/CategorySection";
import EnquirySection from "@/components/EnquirySection";

export default function Home() {
  return (
    <div>
      {/* 01 · Hero Banner with Video Background */}
      <HeroBanner />

      {/* 02 · Services / Capabilities Interactive Slider */}
      <ServicesSection />

      {/* 03 · Company Story & Core Engineering Overview */}
      <CompanyStorySection />

      {/* 04 · Industries Served */}
      {/* <IndustriesSection /> */}

      {/* 05 · Trusted Partner Brands */}
      {/* <PartnerBrandsSection /> */}

      {/* 06 · Why Us / Why MTAT Advantages */}
      <WhyUsSection />

      {/* 08 · Factory Gallery */}
      {/* <GallerySection /> */}

      {/* 09 · Interactive Machine Parts / Video Frame */}
      <VideoFrame />

      {/* Product Categories */}
      <CategorySection />

      {/* 10 · Custom Component Enquiry & Quote Call-to-Action */}
      <EnquirySection />
    </div>
  );
}



// import CategorySection from "@/components/CategorySection";
// import HeroBanner from "@/components/HeroBanner";
// import ServicesSection from "@/components/ServicesSection";
// import VideoFrame from "@/components/VideoFrame";
// import WhyUsSection from "@/components/Whyussection";

// export default function Home() {
//   return (
//    <div>
// {/* <div className="h-screen bg-white ">

// </div> */}

// <HeroBanner />
// <ServicesSection />
// <WhyUsSection />
// <VideoFrame />
// <CategorySection />
// <div className="h-screen">

// </div>
//     </div>
//   );
// }
