import { Card } from "flowbite-react";

const CardPopular = () => {
  return (
    <>
      <div className="py-10 text-center text-3xl font-bold  tracking-wide text-gray-600">
        <p>POPULAR course</p>
      </div>
      <div className="mt-10 flex justify-around">
        <Card
          className="max-w-sm w-[400px] shadow-lg hover:scale-105 transition-transform duration-300"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
        >
          <img src="" alt="" className="w-[400px] h-[250px]" />
        </Card>
        <Card
          className="max-w-sm w-[400px] shadow-lg hover:scale-105 transition-transform duration-300"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
        >
          <img src="" alt="" className="w-[400px] h-[250px]" />
        </Card>
        <Card
          className="max-w-sm w-[400px] shadow-lg hover:scale-105 transition-transform duration-300"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
        >
          <img src="" alt="" className="w-[400px] h-[250px]" />
        </Card>
      </div>
    </>
  );
};
export default CardPopular;
