import CardPopular from "../../components/cart/CardPopular";
import HeroSection from "../../components/cart/HeroSection";
import SlideImageComponent from "../../components/cart/SlideImageComponent";
import image from "D:/course-website/course/src/assets/logo/spring.png";

export default function Homepage() {
  return (
    <>
      <div className="flex justify-around ">
        <div className="mt-32">
          <HeroSection className="" />
        </div>

        <img src={image} alt="" className="w-[400px] mt-12" />
      </div>
      <SlideImageComponent />
      <CardPopular/>
    </>
  );
}
