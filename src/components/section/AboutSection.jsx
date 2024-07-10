import React from 'react';

const AboutSection = () => {
  return (
    <div className="flex flex-col py-20 pl-2.5 bg-white">
      <div className="flex gap-5 self-center mt-5 -ml-2.5 max-md:flex-wrap">
        <div className="flex-auto self-start pl-11 mr-20 text-5xl font-medium leading-[80.08px] text-zinc-900 max-md:max-w-full max-md:text-4xl">
          Get to know us more
        </div>
        <div className="flex-auto text-lg leading-8 text-neutral-400 max-md:max-w-full">
          We are a full-service digital agency, specializing in modern
          technology,With the best service and professional people
        </div>
      </div>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/746a3e80b223c0a37d861fc81883d77b77157948ca6cabebcbe245fbbd1608df?apiKey=409c33fc5d1744fa925c830aab5fd972&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/746a3e80b223c0a37d861fc81883d77b77157948ca6cabebcbe245fbbd1608df?apiKey=409c33fc5d1744fa925c830aab5fd972&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/746a3e80b223c0a37d861fc81883d77b77157948ca6cabebcbe245fbbd1608df?apiKey=409c33fc5d1744fa925c830aab5fd972&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/746a3e80b223c0a37d861fc81883d77b77157948ca6cabebcbe245fbbd1608df?apiKey=409c33fc5d1744fa925c830aab5fd972&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/746a3e80b223c0a37d861fc81883d77b77157948ca6cabebcbe245fbbd1608df?apiKey=409c33fc5d1744fa925c830aab5fd972&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/746a3e80b223c0a37d861fc81883d77b77157948ca6cabebcbe245fbbd1608df?apiKey=409c33fc5d1744fa925c830aab5fd972&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/746a3e80b223c0a37d861fc81883d77b77157948ca6cabebcbe245fbbd1608df?apiKey=409c33fc5d1744fa925c830aab5fd972&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/746a3e80b223c0a37d861fc81883d77b77157948ca6cabebcbe245fbbd1608df?apiKey=409c33fc5d1744fa925c830aab5fd972&"
        className="mt-16 w-full aspect-[3.23] max-md:mt-10 max-md:max-w-full"
      />
    </div>
  );
}

export default AboutSection;
