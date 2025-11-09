import Image from "next/image";
import project_1 from "@/public/projects/project_1.png";
import project_2 from "@/public/projects/project_2.png";
import project_3 from "@/public/projects/project_3.png";

const Portfolio = () => {
  return (
    <div className="main-container w-full  pt-20 pb-20 relative">
      <div className="w-full flex flex-col items-start gap-10">
        <div className="text-center w-full text-[#297FDF] text-[42px] font-bold flex items-center justify-center">
          Our Portfolio
        </div>
        <div className="w-full flex flex-col items-start gap-1">
          <div className="font-inter text-[20px] text-[#A3A3A3] z-20">03</div>
          <div className="text-[32px] font-semibold text-stroke z-20">
            Featured Projects
          </div>
          <div className="text-[18px] font-inter text-[#999999]">
            Explore our portfolio of successful projects that showcase our
            expertise and innovation.
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {/* project 1 */}
          <div className="w-full bg-white shadow-sm  rounded-t-2xl flex flex-col gap-2.5 overflow-hidden">
            <div className="w-full aspect-402/219">
              <Image
                src={project_1}
                width={402}
                height={219}
                className="w-full h-full"
                alt="project 1"
              />
            </div>
            <div className="p-5 gap-3 flex flex-col items-start">
              <div className="text-[18px] font-inter text-[#101828]">
                AI-Powered Analytics Dashboard
              </div>
              <div className="text-sm font-inter text-[#999999]">
                Real-time analytics platform with predictive insights for
                e-commerce optimization.
              </div>
              <ul className="w-full flex items-center gap-2">
                <li className="text-xs bg-[#EFF6FF] text-[#155DFC] px-2 py-1 rounded-3xl">
                  Python
                </li>
                <li className="text-xs bg-[#EFF6FF] text-[#155DFC] px-2 py-1 rounded-3xl">
                  TensorFlow
                </li>
                <li className="text-xs bg-[#EFF6FF] text-[#155DFC] px-2 py-1 rounded-3xl">
                  React
                </li>
              </ul>
            </div>
          </div>
          {/* project 2 */}
          <div className="w-full bg-white shadow-sm  rounded-t-2xl flex flex-col gap-2.5 overflow-hidden">
            <div className="w-full aspect-402/219">
              <Image
                src={project_2}
                width={402}
                height={219}
                className="w-full h-full"
                alt="project 1"
              />
            </div>
            <div className="p-5 gap-3 flex flex-col items-start">
              <div className="text-[18px] font-inter text-[#101828]">
                AI-Powered Analytics Dashboard
              </div>
              <div className="text-sm font-inter text-[#999999]">
                Real-time analytics platform with predictive insights for
                e-commerce optimization.
              </div>
              <ul className="w-full flex items-center gap-2">
                <li className="text-xs bg-[#EFF6FF] text-[#155DFC] px-2 py-1 rounded-3xl">
                  Python
                </li>
                <li className="text-xs bg-[#EFF6FF] text-[#155DFC] px-2 py-1 rounded-3xl">
                  TensorFlow
                </li>
                <li className="text-xs bg-[#EFF6FF] text-[#155DFC] px-2 py-1 rounded-3xl">
                  React
                </li>
              </ul>
            </div>
          </div>
          {/* project 3 */}
          <div className="w-full bg-white shadow-sm  rounded-t-2xl flex flex-col gap-2.5 overflow-hidden">
            <div className="w-full aspect-402/219">
              <Image
                src={project_3}
                width={402}
                height={219}
                className="w-full h-full"
                alt="project 1"
              />
            </div>
            <div className="p-5 gap-3 flex flex-col items-start">
              <div className="text-[18px] font-inter text-[#101828]">
                AI-Powered Analytics Dashboard
              </div>
              <div className="text-sm font-inter text-[#999999]">
                Real-time analytics platform with predictive insights for
                e-commerce optimization.
              </div>
              <ul className="w-full flex items-center gap-2">
                <li className="text-xs bg-[#EFF6FF] text-[#155DFC] px-2 py-1 rounded-3xl">
                  Python
                </li>
                <li className="text-xs bg-[#EFF6FF] text-[#155DFC] px-2 py-1 rounded-3xl">
                  TensorFlow
                </li>
                <li className="text-xs bg-[#EFF6FF] text-[#155DFC] px-2 py-1 rounded-3xl">
                  React
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
