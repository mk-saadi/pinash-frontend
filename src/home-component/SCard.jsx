import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaStopwatch } from "react-icons/fa6";
import { PiBookOpenTextFill } from "react-icons/pi";
import { IoCheckmarkCircle } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const SCard = ({ data }) => {
	const prevRef = useRef(null);
	const nextRef = useRef(null);
	const [isBeginning, setIsBeginning] = useState(true);
	const [isEnd, setIsEnd] = useState(false);
	const [swiper, setSwiper] = useState(null);

	useEffect(() => {
		if (swiper) {
			const updateNavigation = () => {
				if (swiper.params && swiper.navigation) {
					swiper.params.navigation.prevEl = prevRef.current;
					swiper.params.navigation.nextEl = nextRef.current;
					swiper.navigation.destroy();
					swiper.navigation.init();
					swiper.navigation.update();
				}
			};

			updateNavigation();

			if (document.readyState === "complete") {
				updateNavigation();
			} else {
				window.addEventListener("load", updateNavigation);
				return () => window.removeEventListener("load", updateNavigation);
			}
		}
	}, [swiper]);

	return (
		<div>
			<Swiper
				modules={[Pagination, Navigation]}
				className="select-none"
				onSwiper={setSwiper}
				onSlideChange={(swiper) => {
					setIsBeginning(swiper.isBeginning);
					setIsEnd(swiper.isEnd);
				}}
				breakpoints={{
					320: {
						slidesPerView: 1,
						spaceBetween: 2,
					},
					640: {
						slidesPerView: 2,
						spaceBetween: 6,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 10,
					},
					1280: {
						slidesPerView: 3,
						spaceBetween: 14,
					},
				}}
			>
				{data.map((da) => (
					<SwiperSlide
						key={da.id}
						className="w-[400px] rounded-xl hover:shadow-md group hover:cursor-pointer duration-300 hover:bg-[#9998E11A] border hover:border-[#9998E1] overflow-hidden h-[230px]"
					>
						<Items data={da} />
					</SwiperSlide>
				))}
			</Swiper>
			<div className="absolute flex items-center justify-end w-full h-full gap-x-3 xl:gap-x-6 right-1 xl:right-24 xl:-top-72 -top-[215px]">
				<button
					ref={prevRef}
					className={` focus:outline-0 backdrop-blur-sm z-10 xl:p-3 p-2 duration-300 transform rounded-full shadow-md 
                            ${
								isBeginning
									? "cursor-not-allowed text-[#0000005d] border border-[#00000033]"
									: "border border-[#000000CC]"
							}
                            transition-all`}
					disabled={isBeginning}
				>
					<GoChevronLeft className="w-6 h-6" />
				</button>
				<button
					ref={nextRef}
					className={` focus:outline-0 backdrop-blur-sm z-10 xl:p-3 p-2 duration-300 transform rounded-full shadow-md 
                            ${
								isEnd
									? "cursor-not-allowed text-[#0000005d] border border-[#00000033]"
									: "border border-[#000000CC]"
							}
                            transition-all`}
					disabled={isEnd}
				>
					<GoChevronRight className="w-6 h-6" />
				</button>
			</div>
		</div>
	);
};

const Items = ({ data }) => {
	return (
		<div className="pb-5">
			<div className="relative flex flex-col items-center justify-center w-full mb-1 rounded-md">
				<div className="w-[400px] rounded-md overflow-hidden h-[230px] ">
					<img
						src={data?.img}
						alt={data?.title}
						className="object-cover w-full h-full duration-300 group-hover:scale-105"
					/>
				</div>
				<div className="m-2 xl:m-4">
					<div className="flex items-center justify-start mt-2 text-xs xl:mt-0 xl:text-sm gap-x-2 xl:gap-x-4">
						<p className="bg-[#FF97001A] rounded-[5px] py-0.5 xl:py-1 px-2 border border-[#FF970080]">
							{data?.badge1}
						</p>
						<p className="bg-[#CDE53333] rounded-[5px] py-0.5 xl:py-1 px-2 border border-[#CDE533]">
							{data?.badge2}
						</p>
					</div>
					<h1 className="mt-2 text-2xl font-semibold tracking-tight xl:mt-4 line-clamp-2">
						{data?.title}
					</h1>
					<div className="flex items-center justify-start mt-2 mb-8 xl:mt-4 gap-x-2 xl:mb-14">
						<ul>
							<li className="text-[#FF9700] text-sm flex justify-center gap-x-1">
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStarHalfAlt />
							</li>
						</ul>
						<p className="text-sm">4.9 (566)</p>
					</div>
					{/* reading */}
					<div className="flex text-sm xl:text-base items-center pb-2 justify-start border-b border-[#00000033] gap-x-4">
						<p className="flex justify-center items-center gap-x-1.5">
							<FaStopwatch className="text-[#9998E1]" /> {data?.time}
						</p>
						<div className="w-px h-[16px] bg-[#00000033]" />
						<p className="flex justify-center items-center gap-x-1.5">
							<PiBookOpenTextFill className="text-[#9998E1]" /> {data?.lessons}
						</p>
					</div>
					{/* author */}
					<div className="flex items-center justify-between mt-6">
						<div className="flex items-center justify-start gap-x-1.5 xl:gap-x-2">
							<img
								src={data.authorPic}
								alt=""
								className="h-9 w-9 xl:h-[42px] object-cover xl:w-auto rounded-full border shadow-sm"
							/>
							<p className="text-base font-semibold">{data.author}</p>
						</div>
						<div>
							{data.price === "Enrolled" ? (
								<span className="bg-[#0000000D] text-[13px] flex gap-x-1 justify-start items-center p-1 border border-[#00000033]">
									<IoCheckmarkCircle className="text-[#00000099]" />
									{data.price}
								</span>
							) : (
								<span className="flex items-center justify-center text-xl font-medium xl:text-2xl">
									${data.price}
								</span>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SCard;
