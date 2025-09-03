import Button from "./ui/Button";
import user1 from "./../assets/images/user1.jpg";
import user2 from "./../assets/images/user2.jpg";
import user3 from "./../assets/images/user3.jpg";
import heroImg from "./../assets/images/hero-img.jpg";
import { motion } from "motion/react";
import { Pen } from "lucide-react";
import { TiStar, TiStarHalf } from "react-icons/ti";

const Hero = () => {
  return (
    <div className="mt-28">
      <div className="flex flex-col items-center lg:flex-row w-full gap-10 lg:justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className="flex flex-col items-center lg:items-start gap-4"
        >
          <div className="flex justify-center items-center gap-3">
            <span className="bg-green-100 rounded-full h-fit py-1 px-3 font-medium text-[10px] md:text-xs border-green-300 border">
              Trusted by 10k+ writers
            </span>
            <div className="flex flex-col gap-1 items-start">
              <div className="users-pic-container flex gap-0 relative h-[32px] md:h-[34px] w-[80px]">
                <div className="pic-sm z-10 absolute left-0 w-[32px] md:w-[34px]">
                  <img
                    src={user1}
                    alt=""
                    width={34}
                    height={34}
                    className="rounded-full border-2 border-white"
                  />
                </div>
                <div className="pic-sm z-9 absolute left-6 w-[32px] md:w-[34px]">
                  <img
                    src={user2}
                    alt=""
                    width={34}
                    height={34}
                    className="rounded-full border-2 border-white"
                  />
                </div>
                <div className="pic-sm z-8 absolute left-12 w-[32px] md:w-[34px]">
                  <img
                    src={user3}
                    alt=""
                    width={34}
                    height={34}
                    className="rounded-full border-2 border-white"
                  />
                </div>
              </div>
              <div className="stars-container flex gap-0 text-yellow-300 items-center">
                <TiStar />
                <TiStar />
                <TiStar />
                <TiStar />
                <TiStarHalf />
                <span className="font-bold text-xs text-black">{"(4.5)"}</span>
              </div>
            </div>
          </div>
          <h1 className="md:text-5xl text-3xl font-extrabold text-center lg:text-left leading-10 md:leading-15 tracking-tight mt-2">
            The{" "}
            <span className="bg-linear-to-r from-yellow-400 to-amber-500 py-1 px-2 rounded-xl text-white">
              #1
            </span>{" "}
            Platform for <br />
            Creative Writers based in Nigeria
          </h1>
          <p className="text-xs md:text-sm text-center md:text-md lg:text-left leading-[18px] md:leading-normal font-medium max-w-xs lg:max-w-md">
            Publish your work, connect with a community of readers, and build
            your legacy, one chapter at a time.
          </p>
          <div className="flex gap-3 items-center">
            <Button type="primary" content="Start Publishing" icon={Pen} />
            <a
              href="/learnmore"
              className="font-medium text-black text-[14px] underline"
            >
              Learn more
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
          }}
          className="flex"
        >
          <div className="lg:max-w-5xl relative z-10 rounded-3xl bg-[#FCFCFC] p-2 shadow-sm">
            <div className="w-full overflow-hidden rounded-2xl">
              <img
                src={heroImg}
                alt="Hero Image"
                className="h-auto w-[800px] object-cover"
                height={800}
                width={800}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
