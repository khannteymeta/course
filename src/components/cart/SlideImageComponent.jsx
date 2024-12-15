import { Carousel } from "flowbite-react";

const SlideImageComponent = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 ">
      <Carousel slideInterval={100}>
        <div className="flex justify-center items-center h-full bg-white rounded-lg shadow-lg p-4">
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="Slide 1"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        
      </Carousel>
    </div>
  );
};

export default SlideImageComponent;
