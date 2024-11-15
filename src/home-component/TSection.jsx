import { IoCheckmarkCircle } from "react-icons/io5";
import hero from "../assets/2hero.png";
import check from "../assets/check.png";

const TSection = () => {
	return (
		<div className="flex flex-col px-1 xl:px-0 xl:flex-row gap-x-[161px] items-start justify-center mx-auto xl:w-[1148px]">
			{/* 1st section */}
			<div className="max-w-[424px]">
				<h4 className="text-3xl xl:text-[40px] font-bold">We provide...</h4>
				<div className="flex flex-col justify-start mt-8 mb-4 xl:mb-0 xl:mt-12 gap-y-3 xl:gap-y-8">
					<p className="text-[#00000080] xl:text-[20px] text-base font-medium flex gap-x-4 xl:gap-x-8 justify-start items-center">
						<IoCheckmarkCircle className="w-auto h-6 " /> Personalized routine
					</p>
					<p className="text-[#00000080] xl:text-[20px] text-base font-medium flex gap-x-4 xl:gap-x-8 justify-start items-center">
						<IoCheckmarkCircle className="w-auto h-6 " /> Follow-up after completing courses
					</p>
					<p className="flex flex-col gap-y-1 border-y border-[#00000033] py-5">
						<span className="xl:text-[20px] text-base font-medium flex gap-x-4 xl:gap-x-8 justify-start items-center flex-row">
							<IoCheckmarkCircle className="h-6 w-auto text-[#9998E1]" /> Access to additional
							resources
						</span>
						<span className="text-[#000000B2] ml-[40px] xl:ml-[58px] text-[11px] xl:text-[13px]">
							We offer access to a variety of additional resources to enhance your experience,
							including exclusive tools, guides, and support materials designed to help you
							achieve your goals more effectively.
						</span>
					</p>
					<p className="text-[#00000080] xl:text-[20px] text-base font-medium flex gap-x-4 xl:gap-x-8 justify-start items-center">
						<IoCheckmarkCircle className="w-auto h-6 " /> Free community support
					</p>
					<button className="text-til border border-til rounded-full px-6 w-fit py-1.5 xl:py-3 text-[14px] font-medium">
						Learn More About Our Services
					</button>
				</div>
			</div>
			{/* 2nd section */}
			<div>
				<div className="relative xl:w-[585px] xl:h-[600px] object-cover rounded-3xl">
					<img
						src={hero}
						alt=""
						className="rounded-2xl"
					/>
					<img
						src={check}
						alt=""
						// className="absolute h-[74px] w-auto top-[84px] -left-[36px]"
						className="absolute h-[56px] xl:h-[74px] w-auto left-1 top-1 xl:top-36 xl:-left-6"
					/>
				</div>
			</div>
		</div>
	);
};

export default TSection;
