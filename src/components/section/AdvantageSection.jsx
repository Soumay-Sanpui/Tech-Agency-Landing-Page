import React from 'react';

const AdvantageSection = () => {
  return (
    <div className="py-20 pl-20 bg-neutral-50 max-md:pl-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow mt-5 font-medium max-md:mt-10 max-md:max-w-full">
            <div className="text-5xl leading-[80px] text-zinc-900 max-md:max-w-full max-md:text-4xl max-md:leading-[68px]">
              The advantages when you work with us
            </div>
            <div className="mt-10 mr-11 text-lg leading-8 text-neutral-400 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
              We are a creative agency engaged in technology, we have been
              trusted by thousands of customers and companies, our services have
              been guaranteed for years
            </div>
            <div className="justify-center self-start px-8 py-4 mt-11 text-base tracking-tight leading-5 text-white bg-orange-500 max-md:px-5 max-md:mt-10">
              Contact Us
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/456d2c5b4d4e7c6e9e9b729fb3ee1e2e710f986cf7f401362e864eac12ac65dc?apiKey=409c33fc5d1744fa925c830aab5fd972&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/456d2c5b4d4e7c6e9e9b729fb3ee1e2e710f986cf7f401362e864eac12ac65dc?apiKey=409c33fc5d1744fa925c830aab5fd972&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/456d2c5b4d4e7c6e9e9b729fb3ee1e2e710f986cf7f401362e864eac12ac65dc?apiKey=409c33fc5d1744fa925c830aab5fd972&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/456d2c5b4d4e7c6e9e9b729fb3ee1e2e710f986cf7f401362e864eac12ac65dc?apiKey=409c33fc5d1744fa925c830aab5fd972&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/456d2c5b4d4e7c6e9e9b729fb3ee1e2e710f986cf7f401362e864eac12ac65dc?apiKey=409c33fc5d1744fa925c830aab5fd972&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/456d2c5b4d4e7c6e9e9b729fb3ee1e2e710f986cf7f401362e864eac12ac65dc?apiKey=409c33fc5d1744fa925c830aab5fd972&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/456d2c5b4d4e7c6e9e9b729fb3ee1e2e710f986cf7f401362e864eac12ac65dc?apiKey=409c33fc5d1744fa925c830aab5fd972&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/456d2c5b4d4e7c6e9e9b729fb3ee1e2e710f986cf7f401362e864eac12ac65dc?apiKey=409c33fc5d1744fa925c830aab5fd972&"
            className="grow mt-10 w-full aspect-[2] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default AdvantageSection;
