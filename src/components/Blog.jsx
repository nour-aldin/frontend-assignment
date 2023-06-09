/* eslint-disable react/no-unescaped-entities */
import Button from "./UI/Button";

const Blog = () => {
  return (
    <div className="relative px-4 sm:px-6 lg:px-8 py-5 lg:mt-32 lg:mx-28 mx-auto lg:w-[69%] md:w-fit">
      <div className="relative z-10 inline">
        <div className="flex flex-row justify-start items-center mx-auto md:mx-0 lg:mx-0">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
            >
              <path
                d="M10.4018 1.9077C8.75371 1.92331 7.14724 2.42729 5.78557 3.3559C4.42389 4.28452 3.36816 5.59606 2.75188 7.12468C2.1356 8.65331 1.98644 10.3304 2.32328 11.9437C2.66012 13.5571 3.46782 15.0344 4.64424 16.1888C5.82066 17.3431 7.31297 18.1227 8.93245 18.4289C10.5519 18.7351 12.2259 18.5542 13.7425 17.9091C15.2592 17.264 16.5505 16.1836 17.4532 14.8046C18.3558 13.4256 18.8293 11.8098 18.8137 10.1617C18.7902 7.9525 17.8914 5.84277 16.3145 4.29538C14.7375 2.74799 12.6111 1.8893 10.4018 1.9077ZM13.599 13.3004C13.5224 13.3786 13.4311 13.4408 13.3304 13.4837C13.2297 13.5265 13.1216 13.5491 13.0122 13.5501C12.9027 13.5512 12.7942 13.5306 12.6927 13.4897C12.5912 13.4488 12.4988 13.3883 12.4207 13.3116L9.89712 10.8354C9.81899 10.7588 9.75672 10.6675 9.71387 10.5668C9.67103 10.4661 9.64845 10.358 9.64743 10.2486L9.60008 5.24878C9.59799 5.02777 9.68378 4.81499 9.83857 4.65723C9.99336 4.49948 10.2045 4.40968 10.4255 4.40759C10.6465 4.40549 10.8593 4.49128 11.017 4.64607C11.1748 4.80087 11.2646 5.01199 11.2667 5.23299L11.3108 9.88773L13.5879 12.1221C13.666 12.1987 13.7283 12.29 13.7711 12.3907C13.8139 12.4914 13.8365 12.5995 13.8376 12.709C13.8386 12.8184 13.8181 12.9269 13.7771 13.0284C13.7362 13.1299 13.6757 13.2223 13.599 13.3004Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="ml-2">
            <span className="text-white font-medium text-[14px]">
              15 Minutes
            </span>
          </div>
        </div>
        <h1 className="text-white font-bold text-4xl  ">
          The Big Five: Your Gateway to Greater Discoveries!
        </h1>
        <br />
        <p className="text-white max-w-3xl text-sm">
          Before we embark on this thrilling journey to uncover your unique
          career path, we need to get to know you a little better. And what
          better way than through the 'Big Five Personality Assessment'?
        </p>
        <br />
        <p className="text-white max-w-3xl text-sm">
          The Big Five is a well-respected psychological model that helps us
          understand your unique personality traits. No, we're not mind-readers
          (though that would be cool), we simply use science to help you
          discover the best career paths suited to your personality.
        </p>{" "}
        <br />
        <p className="text-white max-w-3xl text-sm">
          This isn't a test, so there are no right or wrong answers. Just be
          honest, because the more truthful you are, the more accurate your
          career matches will be. And don't worry, we value your privacy and
          your responses will be kept confidential. This introspective journey
          will take about 15 minutes of your time. So, grab a snack, settle into
          your favorite chair, and get ready to dive deep into the fascinating
          world of you!
        </p>
        <br />
      </div>
      <div className="my-5">
        <Button content="Enter" />
      </div>

      <div className="absolute inset-0 bg-[#121826] rounded-[20px] opacity-75"></div>
    </div>
  );
};

export default Blog;
