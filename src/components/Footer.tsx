import { ArrowRight, Medal } from "lucide-react";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-6 lg:px-28">
      <div className="w-full flex flex-col items-start justify-between">
        <hr className="border-neutral-200 w-full" />
        <div className="flex flex-col gap-8 md:flex-row h-[90%] py-12 md:py-6 px-7 w-full md:justify-between items-center md:items-start">
          <div className="company-logo-section flex flex-col justify-center items-center md:items-start gap-6">
            <h1 className="text-4xl font-bold">caml.</h1>
            <span className="md:mt-3 text-sm font-medium text-center md:text-left flex gap-2 items-center">
              This website was built with 💖 by Eniola Amusu <br />
              Buy me a coffee
            </span>
            <div
              className="bg-[#fafafa] border border-neutral-200 rounded-xl flex items-center
            justify-center gap-3 md:px-4 py-2 px-4"
            >
              <Medal className="w-6 h-6 text-green-500" />
              <div className="flex flex-col items-start md:pr-1">
                <span className="text-[10px] font-medium">PRODUCT HUNT</span>
                <span className="text-sm text-left font-bold">
                  #2 Product of The Week
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start md:justify-center gap-14 md:gap-8">
            <div>
              <h3 className="text-md font-bold mb-2">GENERAL</h3>
              <ul className="text-sm flex md:items-start items-center justify-start gap-1 flex-col ">
                <li>Home</li>
                <li>Features</li>
                <li>About Us</li>
              </ul>
            </div>
            <div>
              <h3 className="text-md font-bold mb-2">RESOURCES</h3>
              <ul className="text-sm flex md:items-start items-center justify-start gap-1 flex-col ">
                <li>FAQs</li>
                <li>How to Post</li>
                <li>Readers Circle</li>
                <li>Community</li>
                <li>caml. Blog</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center gap-1">
            <div>
              <h3 className="text-md font-bold mb-2">FOLLOW US</h3>
              <ul className="text-sm flex md:items-start items-center  justify-start gap-1 flex-col ">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Linkedin</li>
                <li className="flex gap-2 items-center">
                  <FaDiscord className="w-4 h-4 text-amber-500" /> Discord
                </li>
                <li>TikTok</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center gap-1">
            <div>
              <h3 className="text-md font-bold mb-2">PARTNER PROGRAM</h3>
              <ul className="text-sm flex md:items-start items-center  justify-start gap-1 flex-col ">
                <li className="md:text-left text-center">
                  Earn up to 40% recurring <br /> commission
                </li>
                <li className="mt-4 text-md flex items-center gap-2 text-amber-500 font-medium">
                  Become a Partner <ArrowRight className="w-4 h-4" />{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-neutral-200 w-full" />
      </div>
      <div className="flex-col flex md:flex-row text-neutral-500 justify-between items-center py-8 md:px-6">
        <div className="text-xs md:text-sm font-normal mb-4">
          &copy; 2025 caml. inc. All rights reserved
        </div>
        <div className="flex gap-4">
          <span className="text-xs md:text-sm font-normal">Privacy Policy</span>
          <span className="text-xs md:text-sm font-normal">
            Terms & Conditions
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
