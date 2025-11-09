import Image from "next/image";
import logo from "@/public/logo.svg";
import github from "@/public/footer/github.svg";
import linkedin from "@/public/footer/linkedin.svg";
import mail from "@/public/footer/mail.svg";
import twitter from "@/public/footer/twitter.svg";

const Footer = () => {
  return (
    <div className="main-container w-full py-10 bg-linear-to-r from-[#EFF6FF] to-[#ECFEFF] mt-[-50px]">
      <div className="w-full flex flex-col items-start gap-8">
        {/* top section */}
        <div className="w-full flex items-start gap-5">
          <div className="w-2/5">
            <Image src={logo} width={228} height={76} alt="logo" />
            <div className="mt-5 text-[#999999] text-sm max-w-[413px]">
              Pioneering technology solutions that transform businesses and
              drive innovation. Lets build the future together.
            </div>
            <div className="flex items-center gap-4 mt-5">
              <div className="w-10 aspect-square rounded-full bg-[#297FDF] flex items-center justify-center">
                <Image
                  src={github}
                  className="w-5 aspect-square"
                  width={20}
                  height={20}
                  alt="github"
                />
              </div>
              <div className="w-10 aspect-square rounded-full bg-[#297FDF] flex items-center justify-center">
                <Image
                  src={twitter}
                  className="w-5 aspect-square"
                  width={20}
                  height={20}
                  alt="github"
                />
              </div>
              <div className="w-10 aspect-square rounded-full bg-[#297FDF] flex items-center justify-center">
                <Image
                  src={linkedin}
                  className="w-5 aspect-square"
                  width={20}
                  height={20}
                  alt="github"
                />
              </div>
              <div className="w-10 aspect-square rounded-full bg-[#297FDF] flex items-center justify-center">
                <Image
                  src={mail}
                  className="w-5 aspect-square"
                  width={20}
                  height={20}
                  alt="github"
                />
              </div>
            </div>
          </div>
          <div className="w-3/5 grid grid-cols-3">
            <div className="flex flex-col gap-4 items-start">
              <h4 className="text-base text-[#297FDF] font-medium">Company</h4>
              <ul className="flex flex-col items-start gap-3 text-sm text-[#999999]">
                <li>About Us</li>
                <li>Our Approach</li>
                <li>Our Projects</li>
                <li>Solutions & Partners</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 items-start">
              <h4 className="text-base text-[#297FDF] font-medium">Services</h4>
              <ul className="flex flex-col items-start gap-3 text-sm text-[#999999]">
                <li>Web Development</li>
                <li>Mobile Apps</li>
                <li>e-Commerce Solutions</li>
                <li>Customized Products</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 items-start">
              <h4 className="text-base text-[#297FDF] font-medium">FAQS</h4>
              <ul className="flex flex-col items-start gap-3 text-sm text-[#999999]">
                <li>Contact Us</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#297FDF] h-px"></div>
        {/* bottom section */}
        <div className="w-full flex items-center justify-between text-sm text-[#99A1AF]">
          <div>© 2025 Apex Digital. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <div>Terms of Service</div>
            <div>Privacy Policy</div>
            <div>Cookie Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
