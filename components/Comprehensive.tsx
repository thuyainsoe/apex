import Image from "next/image";
import compre_1 from "@/public/icons/compre_1.svg";
import compre_2 from "@/public/icons/compre_2.svg";
import compre_3 from "@/public/icons/compre_3.svg";
import compre_4 from "@/public/icons/compre_4.svg";

const Comprehensive = () => {
  return (
    <div className="main-container w-full bg-linear-to-b from-[#F9FAFB] to-[#EFF6FF4D] pt-20 pb-60 relative">
      <div className="w-full flex flex-col items-start gap-[40px]">
        <div className="text-center w-full text-[#297FDF] text-[42px] font-bold flex items-center justify-center">
          Comprehensive IT Solutions
        </div>
        <div className="w-full flex flex-col items-start gap-1">
          <div className="font-inter text-[20px] text-[#A3A3A3] z-20">02</div>
          <div className="text-[32px] font-semibold text-stroke z-20">
            Our Services
          </div>
          <div className="text-[18px] font-inter text-[#999999]">
            From concept to deployment, we offer end-to-end services that
            transform your vision into reality.
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <div className="w-full bg-white shadow-sm p-5 rounded-2xl flex flex-col gap-2.5">
            {/* image */}
            <div className="w-16 aspect-square bg-[#297FDF] rounded-2xl flex items-center justify-center">
              <Image
                src={compre_1}
                width={32}
                height={32}
                className="w-8 aspect-square"
                alt="service"
              />
            </div>
            <div className="text-[#747373] text-[22px] font-inter font-semibold">
              Portfolio Website Service
            </div>
            <div className="text-sm text-[#999999]">
              သင့်လုပ်ငန်းအကြောင်းကို professional ဆန်ဆန် ဖော်ပြပြီး Brand
              ပုံရိပ်ကို တိုးတက်စေမယ့် Portfolio website များကို Apex Digital မှ
              လုပ်ရှင်ရှင်တို့ စိတ်တိုင်းကျ ဆောင်ရွက်ပေးနေပါပြီ
            </div>
          </div>
          <div className="w-full bg-white shadow-sm p-5 rounded-2xl flex flex-col gap-2.5">
            {/* image */}
            <div className="w-16 aspect-square bg-[#297FDF] rounded-2xl flex items-center justify-center">
              <Image
                src={compre_2}
                width={32}
                height={32}
                className="w-8 aspect-square"
                alt="service"
              />
            </div>
            <div className="text-[#747373] text-[22px] font-inter font-semibold">
              e-Commerce Solutions
            </div>
            <div className="text-sm text-[#999999]">
              Apex Digital Software Company ကနေ သင့်စီးပွားရေးအတွက် အရောင်း
              order များကို ပိုမိုလွယ်ကူ ချောမွေ့စေမယ့် E-commerce Website
              ဝန်ဆောင်မှုကို ပေးနေပါပြီ။
            </div>
          </div>
          <div className="w-full bg-white shadow-sm p-5 rounded-2xl flex flex-col gap-2.5">
            {/* image */}
            <div className="w-16 aspect-square bg-[#297FDF] rounded-2xl flex items-center justify-center">
              <Image
                src={compre_3}
                width={32}
                height={32}
                className="w-8 aspect-square"
                alt="service"
              />
            </div>
            <div className="text-[#747373] text-[22px] font-inter font-semibold">
              Websites & Mobile Apps
            </div>
            <div className="text-sm text-[#999999]">
              Apex Digital မှ လူကြီးမင်းတို့ရဲ့ လုပ်ငန်းလိုအပ်ချက်များနှင့်
              အတိအကျ ကိုက်ညီစေရန် Customized Website နှင့် Mobile Application
              များကို စတင်ဝန်ဆောင်မှုပေးနေပါပြီ။
            </div>
          </div>
        </div>
      </div>
      <Image
        src={compre_4}
        width={32}
        height={32}
        className="w-full absolute bottom-0 left-0"
        alt="service"
      />
    </div>
  );
};

export default Comprehensive;
