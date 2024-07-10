import React from 'react';

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="mt-5 mb-11 w-full max-w-[1199px] max-md:mb-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="text-5xl font-medium leading-[80px] text-zinc-900 max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[68px]">
                Trusted by technology companies
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="mt-3.5 text-lg leading-8 text-neutral-400 max-md:mt-10 max-md:max-w-full">
                We are trusted by technology companies in the world, because our
                very satisfactory performance makes them believe in us
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center px-16 pb-14 w-full bg-neutral-800 max-md:px-5 max-md:max-w-full">
        <div className="flex z-10 flex-col -mt-20 w-full max-w-[1199px] max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/91a1dcdcdc095b6b81bad543f14c2c6541748b8828d39b93752fcc6041e20fcf?apiKey=409c33fc5d1744fa925c830aab5fd972&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/91a1dcdcdc095b6b81bad543f14c2c6541748b8828d39b93752fcc6041e20fcf?apiKey=409c33fc5d1744fa925c830aab5fd972&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91a1dcdcdc095b6b81bad543f14c2c6541748b8828d39b93752fcc6041e20fcf?apiKey=409c33fc5d1744fa925c830aab5fd972&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/91a1dcdcdc095b6b81bad543f14c2c6541748b8828d39b93752fcc6041e20fcf?apiKey=409c33fc5d1744fa925c830aab5fd972&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/91a1dcdcdc095b6b81bad543f14c2c6541748b8828d39b93752fcc6041e20fcf?apiKey=409c33fc5d1744fa925c830aab5fd972&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91a1dcdcdc095b6b81bad543f14c2c6541748b8828d39b93752fcc6041e20fcf?apiKey=409c33fc5d1744fa925c830aab5fd972&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/91a1dcdcdc095b6b81bad543f14c2c6541748b8828d39b93752fcc6041e20fcf?apiKey=409c33fc5d1744fa925c830aab5fd972&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/91a1dcdcdc095b6b81bad543f14c2c6541748b8828d39b93752fcc6041e20fcf?apiKey=409c33fc5d1744fa925c830aab5fd972&"
            className="w-full aspect-[7.69] max-md:max-w-full"
          />
          <div className="flex gap-5 px-px mt-20 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col text-white">
              <div className="flex gap-3.5 text-3xl font-semibold leading-10 whitespace-nowrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc563ca924d88d1a20bd156cfe99a6df1be11105568314a47edf14286dd951b3?apiKey=409c33fc5d1744fa925c830aab5fd972&"
                  className="shrink-0 aspect-[1.41] fill-white w-[42px]"
                />
                <div className="flex-auto my-auto">TechTeam.</div>
              </div>
              <div className="mt-14 text-lg leading-8 max-md:mt-10">
                We are a full-service digital agency, specializing in modern
                technology,With the best service and professional people
              </div>
            </div>
            <div className="flex-auto max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col text-base text-white max-md:mt-10">
                    <div className="text-lg font-medium leading-5">Company</div>
                    <div className="mt-9">About Us</div>
                    <div className="mt-9">Portfolio</div>
                    <div className="mt-9">Testimonial</div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col text-base text-white max-md:mt-10">
                    <div className="text-lg font-medium leading-5">Support</div>
                    <div className="mt-9">FAQ</div>
                    <div className="mt-9">Privacy Policy</div>
                    <div className="mt-8">Term of service</div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-base text-white max-md:mt-10">
                    <div className="text-lg font-medium leading-5">
                      Social Media
                    </div>
                    <div className="mt-10">Dribbble</div>
                    <div className="mt-9">Behance</div>
                    <div className="mt-9">Instagram</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-center mt-20 text-base leading-7 text-white max-md:mt-10">
            ©2022 TechTeam. All right reserved
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
