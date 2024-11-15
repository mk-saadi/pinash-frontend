import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import hero from "../assets/hero.jpeg";
import leaf from "../assets/Frame.png";

const Hero = () => {
	return (
		<div className="bg-[#F0F1EE] px-1 xl:px-0">
			<div className="flex pt-8 xl:pt-0 flex-col xl:flex-row xl:gap-x-[72px] items-center justify-center mx-auto xl:w-[1148px]">
				{/* 1st section */}
				<div>
					<div className="flex items-center justify-center xl:justify-start gap-x-2 xl:gap-x-4">
						<ul>
							<li className="text-[#FF9700] xl:text-xl flex justify-center">
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStarHalfAlt />
							</li>
						</ul>
						<p className="text-base xl:text-2xl">4.9 (566)</p>
					</div>
					<h1 className="text-4xl text-center xl:text-start xl:text-5xl font-bold mt-1 xl:mt-[24px] leading-[46px] xl:leading-[56px]">
						#1 Platform Powering Health and Wellness
					</h1>
					<h2 className="text-lg xl:text-2xl text-center xl:text-start font-medium mt-[15px] xl:mt-[40px]">
						We’re restoring home as the primary place of personal well-being
					</h2>
					<h3 className="xl:my-[24px] my-4 text-base text-center xl:text-start">
						Health is not just about what you&apos;re eating. It&apos;s also about what
						you&apos;re thinking and saying
					</h3>
					<div className="flex xl:justify-start mb-4 xl:mb-0 justify-center items-center gap-x-[16px]">
						<button className="px-6 text-[14px] py-3 font-semibold text-white rounded-full bg-til">
							Browse Courses
						</button>
						<button className="px-6 text-[14px] py-3 font-semibold text-til rounded-full border border-til">
							Get Started
						</button>
					</div>
				</div>
				{/* image section */}
				<div className="relative">
					<div className="xl:h-[760px] xl:w-[648px] object-cover rounded-3xl overflow-hidden">
						<img
							src={hero}
							alt=""
							className="scale-[1.8]"
						/>
					</div>
					<div className="absolute bottom-0 w-full p-2 pb-2 overflow-hidden rounded-2xl">
						<div className="flex bg-[#FFFFFFB2] rounded-2xl backdrop-blur-sm flex-col">
							<div className="flex xl:px-8 px-1 xl:py-[26px] py-2 gap-x-2 xl:gap-x-6 justify-center items-center">
								<p className="text-2xl xl:text-5xl font-[900]">12,000+</p>
								<div className="xl:h-[40px] h-[30px] w-px bg-[#00000033]" />
								<p className="text-sm xl:text-2xl">Happy learners rely on us regularly</p>
							</div>
							{/* 2nd section */}
							<div className="bg-[#FFFFFF99] px-2 xl:px-0 flex-col xl:flex-row justify-center gap-y-2 items-center xl:pl-8 xl:pr-20 rounded-2xl py-2 xl:py-7 flex gap-x-8">
								<p className="text-sm font-medium xl:text-base whitespace-nowrap">
									Find your wellbeing
								</p>
								<p className="text-xs xl:text-[13px] text-center xl:text-start">
									By prioritizing self-care and making informed choices, one can enhance
									their overall quality of life
								</p>
							</div>
						</div>
					</div>
					<div className="absolute left-1 top-1 xl:top-36 xl:-left-6">
						<img
							src={leaf}
							alt=""
							className="h-[56px] xl:h-[74px] w-auto"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
