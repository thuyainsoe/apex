import core_1 from "@/public/icons/core_1.svg";
import core_2 from "@/public/icons/core_2.svg";
import Image from "next/image";

const coreValuesData = [
  {
    title: "Innovation",
    description:
      "Continuously pushing boundaries to create groundbreaking solutions.",
  },
  {
    title: "Excellence",
    description:
      "Commitment to quality and precision in everything we deliver.",
  },
  {
    title: "Collaboration",
    description: "Working together with clients as true partners in success.",
  },
];

const OurCoreValue = () => {
  return (
    <div className="main-container w-full">
      <div className="w-full px-[50px]">
        <div className="w-full bg-[#297FDF] px-[79px] py-[30px] overflow-hidden rounded-3xl flex flex-col items-start gap-5 text-white relative">
          <div className="font-inter text-[18px]">Our Core Values</div>
          <div className="w-full flex items-start justify-between gap-8 z-20">
            {coreValuesData.map((item) => (
              <div key={item.title} className="flex flex-col items-start gap-3">
                <h4 className="font-semibold text-lg">{item.title}</h4>
                <div className="text-sm">{item.description}</div>
              </div>
            ))}
          </div>
          <Image
            src={core_1}
            width={384}
            height={384}
            className="w-[20%] aspect-square absolute left-[0%] -bottom-[65%] z-1"
            alt="core one image"
          />
          <Image
            src={core_2}
            width={256}
            height={256}
            className="w-[20%] aspect-square absolute right-[0%] -top-[50%] z-1"
            alt="core one image"
          />
        </div>
      </div>
    </div>
  );
};

export default OurCoreValue;
