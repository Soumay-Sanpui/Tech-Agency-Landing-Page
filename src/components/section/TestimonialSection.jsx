import React from 'react';

const TestimonialSection = () => {
  return (
    <div className="py-20 pl-20 bg-neutral-50 max-md:pl-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-5 max-md:mt-10 max-md:max-w-full">
            <div className="text-5xl font-medium leading-[80px] text-zinc-900 max-md:max-w-full max-md:text-4xl max-md:leading-[68px]">
              What people say about us
            </div>
            <div className="mt-16 text-lg leading-8 text-neutral-400 max-md:mt-10 max-md:max-w-full">
              These are some opinions from our customers about our service and
              quality.
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/242c6fb8e92bea346f01070c7ba857d55e54a4971cb906808d26691167fc31a7?apiKey=409c33fc5d1744fa925c830aab5fd972&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/242c6fb8e92bea346f01070c7ba857d55e54a4971cb906808d26691167fc31a7?apiKey=409c33fc5d1744fa925c830aab5fd972&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/242c6fb8e92bea346f01070c7ba857d55e54a4971cb906808d26691167fc31a7?apiKey=409c33fc5d1744fa925c830aab5fd972&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/242c6fb8e92bea346f01070c7ba857d55e54a4971cb906808d26691167fc31a7?apiKey=409c33fc5d1744fa925c830aab5fd972&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/242c6fb8e92bea346f01070c7ba857d55e54a4971cb906808d26691167fc31a7?apiKey=409c33fc5d1744fa925c830aab5fd972&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/242c6fb8e92bea346f01070c7ba857d55e54a4971cb906808d26691167fc31a7?apiKey=409c33fc5d1744fa925c830aab5fd972&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/242c6fb8e92bea346f01070c7ba857d55e54a4971cb906808d26691167fc31a7?apiKey=409c33fc5d1744fa925c830aab5fd972&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/242c6fb8e92bea346f01070c7ba857d55e54a4971cb906808d26691167fc31a7?apiKey=409c33fc5d1744fa925c830aab5fd972&"
            className="grow mt-5 w-full aspect-[2.44] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
