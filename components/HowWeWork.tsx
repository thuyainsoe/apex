import work_1 from "@/public/icons/work_1.svg";
import work_2 from "@/public/icons/work_2.svg";
import work_3 from "@/public/icons/work_3.svg";
import work_4 from "@/public/icons/work_4.svg";
import check from "@/public/icons/check.svg";
import Image from "next/image";

const workSteps = [
  {
    number: "01",
    title: "Discover & Strategy",
    description:
      "We begin by understanding your business goals, target audience, and technical requirements through comprehensive workshops and research.",
    icon: work_1,
    items: [
      "Stakeholder Interviews",
      "Market Analysis",
      "Technical Feasibility",
      "Project Roadmap",
    ],
  },
  {
    number: "02",
    title: "Design & Prototype",
    description:
      "Our design team creates intuitive user experiences and stunning interfaces that align with your brand and user needs.",
    icon: work_2,
    items: [
      "User research",
      "Wireframing",
      "UI/UX design",
      "Interactive prototypes",
    ],
  },
  {
    number: "03",
    title: "Development",
    description:
      "Expert developers build scalable, secure solutions using modern technologies and best practices with agile methodologies.",
    icon: work_3,
    items: [
      "Agile Sprints",
      "Code Reviews",
      "Continuous Integration",
      "Quality Assurance",
    ],
  },
  {
    number: "04",
    title: "Launch & Optimize",
    description:
      "We ensure smooth deployment and provide ongoing support, monitoring, and optimization to maximize performance and ROI.",
    icon: work_4,
    items: [
      "Deployment Strategy",
      "Performance Monitoring",
      "User Feedback",
      "Continuous Improvement",
    ],
  },
];

const HowWeWork = () => {
  return (
    <div className="main-container w-full">
      <div className="w-full flex flex-col items-center gap-[60px]">
        {/* Header */}
        <div className="text-center w-full text-[#297FDF] text-[42px] font-bold">
          How We Work
        </div>

        {/* Section Title */}
        <div className="w-full flex flex-col items-start gap-1">
          <div className="font-inter text-[20px] text-[#A3A3A3]">04</div>
          <div className="text-[32px] font-semibold text-stroke">
            Our Approach
          </div>
          <div className="text-[18px] font-inter text-[#999999]">
            Our proven methodology ensures successful project delivery from
            concept to launch.
          </div>
        </div>

        {/* Timeline Steps */}
        <div className="w-full relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[0.5px] bg-[#297FDF] -translate-x-1/2"></div>

          {/* Steps */}
          <div className="flex flex-col gap-10">
            {workSteps.map((step, index) => (
              <div
                key={step.number}
                className={`w-full flex items-start ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Left/Right content */}
                <div className="flex-1 w-full">
                  <div
                    className={`bg-white shadow-sm p-8 rounded-2xl w-full flex items-start gap-[20px] ${
                      index % 2 === 0
                        ? "translate-x-[29px]"
                        : "-translate-x-[29px]"
                    }`}
                  >
                    <div className="text-[64px] font-bold text-[#E5F0FF] leading-none">
                      {step.number}
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="text-[18px] font-inter font-normal text-[#101828]">
                        {step.title}
                      </h3>
                      <p className="text-[14px] text-[#4A5565] max-w-[400px]">
                        {step.description}
                      </p>
                      <div className="flex flex-col gap-2">
                        {step.items.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2 text-[#297FDF]"
                          >
                            <Image
                              src={check}
                              width={20}
                              height={20}
                              alt="check icon"
                              className="w-5 aspect-square"
                            />
                            <span className="text-[14px] text-[#4A5565]">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center icon */}
                <div className="relative z-10 shrink-0">
                  <div className="w-16 aspect-square rounded-full bg-linear-to-br from-[#155DFC] to-[#00B8DB] flex items-center justify-center text-white text-2xl shadow-lg">
                    <Image
                      src={step.icon}
                      width={32}
                      height={32}
                      alt="icon"
                      className="w-8 aspect-square"
                    />
                  </div>
                </div>

                {/* Right/Left spacing */}
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
