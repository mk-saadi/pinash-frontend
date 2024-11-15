import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import hero from "../assets/hero.jpeg";
import leaf from "../assets/Frame.png";

const Hero = () => {
	return (
		<div className="bg-[#F0F1EE]">
			<div className="flex flex-col xl:flex-row gap-x-[72px] items-center justify-center mx-auto xl:w-[1148px]">
				<div className="">
					<div className="flex items-center justify-start gap-x-4">
						<ul>
							<li className="text-[#FF9700] text-xl flex justify-center">
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStarHalfAlt />
							</li>
						</ul>
						<p className="text-2xl">4.9 (566)</p>
					</div>
					<h1 className="text-5xl font-bold mt-[24px] leading-[56px]">
						#1 Platform Powering Health and Wellness
					</h1>
					<h2 className="text-2xl font-medium mt-[40px]">
						We’re restoring home as the primary place of personal well-being
					</h2>
					<h3 className="my-[24px] text-base">
						Health is not just about what you&apos;re eating. It&apos;s also about what
						you&apos;re thinking and saying
					</h3>
					<div className="flex justify-start items-center gap-x-[16px]">
						<button className="px-6 text-[14px] py-3 font-semibold text-white rounded-full bg-til">
							Browse Courses
						</button>
						<button className="px-6 text-[14px] py-3 font-semibold text-til rounded-full border border-til">
							Get Started
						</button>
					</div>
				</div>
				<div className="relative">
					<div className="h-[760px] w-[648px] object-cover rounded-3xl overflow-hidden">
						<img
							src={hero}
							alt=""
							className="scale-[1.8]"
						/>
					</div>
					<div className="absolute bottom-0 w-full p-2 pb-2 overflow-hidden rounded-2xl">
						<div className="flex bg-[#FFFFFFB2] rounded-2xl  backdrop-blur-sm flex-col">
							<div className="flex px-8 py-[26px] gap-x-6 justify-center items-center">
								<p className="text-5xl font-[900]">12,000+</p>
								<div className="h-[40px] w-px bg-black" />
								<p className="text-2xl">Happy learners rely on us regularly</p>
							</div>
							{/* 2nd section */}
							<div className="bg-[#FFFFFF99] justify-center items-center pl-8 pr-20 rounded-2xl py-7 flex gap-x-8">
								<p className="text-base font-medium whitespace-nowrap">Find your wellbeing</p>
								<p className="text-[13px]">
									By prioritizing self-care and making informed choices, one can enhance
									their overall quality of life
								</p>
							</div>
						</div>
					</div>
					<div className="absolute right-0 top-36 -left-6">
						<img
							src={leaf}
							alt=""
							className="h-[74px] w-auto"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
