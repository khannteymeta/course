import { Card } from "flowbite-react";

export function CardComponent() {
  return (
    <>
      <div className="flex justify-center gap-5 mt-5">
        <Card
          className="max-w-sm w-[400px] shadow-lg hover:scale-105 transition-transform duration-300"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
        >
          <img
            src="\src\assets\logo\next.png"
            alt=""
            className="w-[400px] h-[250px]"
          />
          <div className="m-4">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Next Framework
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021
            </p>
          </div>
        </Card>

        <Card
          className="max-w-sm w-[400px] shadow-lg hover:scale-105 transition-transform duration-300"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
        >
          <img
            src="\src\assets\logo\java.png"
            alt=""
            className="w-[400px] h-[250px]"
          />
          <div className="m-4">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Java Programming
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021
            </p>
          </div>
        </Card>

        <Card
          className="max-w-sm w-[400px]  shadow-lg hover:scale-105 transition-transform duration-300"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
        >
          <img
            src="\src\assets\logo\spring.png"
            alt=""
            className="w-[400px] h-[250px]"
          />
          <div className="m-4">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Spring Framework
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021
            </p>
          </div>
        </Card>
        <Card
          className="max-w-sm w-[400px]  shadow-lg hover:scale-105 transition-transform duration-300"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
        >
          <img
            src="\src\assets\logo\python.png"
            alt=""
            className="w-[400px] h-[250px]"
          />
          <div className="m-4">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Python for Data Science, AI & Development
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of
              2021.See how employees at top companies are mastering in-demand
              skills
            </p>
          </div>
        </Card>
      </div>

      <div className="flex justify-center gap-5 mt-5">
        <Card
          className="max-w-sm w-[400px] shadow-lg hover:scale-105 transition-transform duration-300"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
        >
          <img
            src="\src\assets\logo\next.png"
            alt=""
            className="w-[400px] h-[250px]"
          />
          <div className="m-4">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Next Framework
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021
            </p>
          </div>
        </Card>

        <Card
          className="max-w-sm w-[400px] shadow-lg hover:scale-105 transition-transform duration-300"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
        >
          <img
            src="\src\assets\logo\java.png"
            alt=""
            className="w-[400px] h-[250px]"
          />
          <div className="m-4">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Java Programming
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021
            </p>
          </div>
        </Card>

        <Card
          className="max-w-sm w-[400px]  shadow-lg hover:scale-105 transition-transform duration-300"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
        >
          <img
            src="\src\assets\logo\spring.png"
            alt=""
            className="w-[400px] h-[250px]"
          />
          <div className="m-4">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Spring Framework
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021
            </p>
          </div>
        </Card>
        <Card
          className="max-w-sm w-[400px]  shadow-lg hover:scale-105 transition-transform duration-300"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
        >
          <img
            src="\src\assets\logo\python.png"
            alt=""
            className="w-[400px] h-[250px]"
          />
          <div className="m-4">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Python Programming
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021
            </p>
          </div>
        </Card>
      </div>
    </>
  );
}
