import React from 'react';

const ServiceSection = () => {
  return (
    <div className="py-20 pl-20 bg-white max-md:pl-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-24 text-lg font-medium text-zinc-900 max-md:mt-10 max-md:max-w-full">
            <div className="text-5xl leading-[80px] max-md:max-w-full max-md:text-4xl max-md:leading-[68px]">
              What can we do for you
            </div>
            <div className="mt-10 leading-8 text-neutral-400 max-md:mt-10 max-md:max-w-full">
              We have several services for you, our services are carried out by
              professional people in their fields
            </div>
            <div className="mt-11 underline leading-[178%] max-md:mt-10 max-md:max-w-full">
              See more services
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[66%] max-md:ml-0 max-md:w-full">
          <div className="grow mt-24 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-center px-12 py-9 w-full text-white bg-orange-500 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/923261bd920393fb233f86f58e9f1adafa884570ad9d40c4c05bfd49364808be?apiKey=409c33fc5d1744fa925c830aab5fd972&"
                    className="w-12 aspect-square"
                  />
                  <div className="mt-8 text-xl font-medium leading-8">
                    Cyber Security
                  </div>
                  <div className="self-stretch mt-7 text-lg leading-8 text-center">
                    Cyber security is the practice of defending computers,
                    servers, mobile devices, electronic....
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
                <div className="grow pb-20 pl-20 mt-40 w-full bg-neutral-800 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
                      <div className="flex z-10 flex-col px-9 py-7 mt-0 w-full text-xl font-medium leading-8 bg-white shadow-2xl text-zinc-900 max-md:px-5 max-md:-mt-12">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f18a3713995779e5ae811d9b4a86c0ba3d242daf014a798f2626a7fb60b354ac?apiKey=409c33fc5d1744fa925c830aab5fd972&"
                          className="self-center w-12 aspect-square fill-white"
                        />
                        <div className="mt-8">Cloud Computing</div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col items-start py-7 pr-px pl-20 mt-0 w-full text-xl font-medium leading-8 bg-white text-zinc-900 max-md:pl-5 max-md:-mt-12">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/820d7e82795d6195a94bec82e1b6ccaef85dd822ddb2ceb11b0d0a2e40ddb339?apiKey=409c33fc5d1744fa925c830aab5fd972&"
                          className="ml-6 w-12 aspect-square fill-white max-md:ml-2.5"
                        />
                        <div className="mt-8">IT Services</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
