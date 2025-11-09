import get_in_touch from "@/public/projects/get_in_touch.png";
import Image from "next/image";

const GetInTouch = () => {
  return (
    <div className="main-container w-full pt-20 relative">
      <div className="w-full flex flex-col items-start gap-10">
        <div className="text-center w-full text-[#297FDF] text-[42px] font-bold flex items-center justify-center">
          Get In Touch
        </div>
        <div className="w-full flex flex-col items-start gap-1">
          <div className="font-inter text-[20px] text-[#A3A3A3] z-20">06</div>
          <div className="text-[32px] font-semibold text-stroke z-20">
            Contact Us
          </div>
          <div className="text-[18px] font-inter text-[#999999]">
            Have a question or an idea? We’d love to hear from you.
          </div>
        </div>
        <div className="w-full flex items-center gap-5">
          <div className="flex flex-col items-start gap-6 w-1/2">
            {/* name */}
            <div className="flex flex-col gap-2 items-start w-full">
              <label className="text-[#999999]" htmlFor="Your Name">
                Your Name
              </label>
              <input
                type="text"
                className="w-full h-[54px] bg-[#F8F8F8] rounded-4xl outline-none px-5"
              />
            </div>
            {/* email */}
            <div className="flex flex-col gap-2 items-start w-full">
              <label className="text-[#999999]" htmlFor="Your Name">
                Your Email
              </label>
              <input
                type="email"
                className="w-full h-[54px] bg-[#F8F8F8] rounded-4xl outline-none px-5"
              />
            </div>
            {/* your message */}
            <div className="flex flex-col gap-2 items-start w-full">
              <label className="text-[#999999]" htmlFor="Your Name">
                Your Message
              </label>
              <textarea className="w-full h-[187px] bg-[#F8F8F8] rounded-4xl outline-none p-5" />
            </div>
            {/* button */}
            <button className="w-full flex items-center gap-2 justify-center bg-[#297FDF] rounded-4xl h-[54px] text-white max-w-[314px]">
              Send
              <svg
                width="23"
                height="9"
                viewBox="0 0 23 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.2969 0C18.3359 1.13281 19.2344 1.99609 19.9922 2.58984C20.75 3.17578 21.4648 3.61328 22.1367 3.90234V4.42969C21.3633 4.80469 20.6133 5.28516 19.8867 5.87109C19.1602 6.44922 18.293 7.30078 17.2852 8.42578H16.3828C17.1172 6.85547 17.8867 5.64844 18.6914 4.80469H0V3.62109H18.6914C18.0977 2.86328 17.6836 2.30078 17.4492 1.93359C17.2148 1.56641 16.8672 0.921875 16.4062 0H17.2969Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <div className="w-1/2  translate-y-[-150px] items-center justify-center flex flex-col">
            <Image
              src={get_in_touch}
              width={500}
              height={500}
              alt="Get in touch"
            />
            <div className="flex flex-col items-start w-full gap-3">
              <div className="flex items-center gap-2">
                <div className="w-[50px] aspect-square rounded-full bg-[#297FDF] flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.2463 6.30025V19.336C22.2463 20.1827 21.5981 20.8697 20.7983 20.8697H17.417V12.1795L11.6228 16.7815L5.82862 12.1795V20.8705H2.44802C1.64821 20.8705 1 20.1842 1 19.3375V19.3367V6.301C1 5.0305 1.97267 4 3.17274 4C3.66438 4 4.11777 4.17325 4.4819 4.46425L4.47624 4.45975L11.6228 10.135L18.7694 4.45975C19.1279 4.1725 19.5812 4 20.0729 4C21.273 4 22.2463 5.02975 22.2463 6.30025Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="text-[#999999] text-[16px] font-semibold font-inter">
                  info@apexdigital.com
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[50px] aspect-square rounded-full bg-[#297FDF] flex items-center justify-center">
                  <svg
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5562 10.9062L12.1007 11.359C12.1007 11.359 11.0181 12.4355 8.0631 9.4972C5.10812 6.55901 6.1907 5.48257 6.1907 5.48257L6.4775 5.19738C7.1841 4.49484 7.2507 3.36691 6.6342 2.54348L5.37326 0.859077C4.61028 -0.160083 3.13596 -0.294713 2.26145 0.574827L0.691848 2.13552C0.258228 2.56668 -0.0323518 3.12559 0.0028882 3.74561C0.0930382 5.33182 0.810708 8.7447 4.81536 12.7266C9.0621 16.9492 13.0468 17.117 14.6763 16.9651C15.1917 16.9171 15.6399 16.6546 16.0011 16.2954L17.4217 14.883C18.3806 13.9295 18.1102 12.2949 16.8833 11.628L14.9728 10.5894C14.1672 10.1515 13.1858 10.2801 12.5562 10.9062Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="text-[#999999] text-[16px] font-semibold font-inter">
                  09-941567399 | 09-640884675
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
