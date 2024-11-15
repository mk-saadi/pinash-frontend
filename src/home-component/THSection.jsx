import { useEffect, useState } from "react";
import { PiQuotesFill } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const THSection = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("reviews.json")
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);

	return (
		<div>
			<div className="">
				<h4 className="text-[40px] font-semibold text-center leading-[48px] mb-[60px]">
					Learners love EduPath. See why
					<br /> they rate us 4.9 out of 5
				</h4>
				<div>
					<div>
						<Swiper
							modules={[Pagination]}
							className="select-none"
							loop={true}
							breakpoints={{
								320: {
									slidesPerView: 1,
									spaceBetween: 2,
								},
								640: {
									slidesPerView: 2,
									spaceBetween: 2,
								},
								768: {
									slidesPerView: 4,
									spaceBetween: 20,
								},
								1024: {
									slidesPerView: 5,
									spaceBetween: 20,
								},
								1280: {
									slidesPerView: 6,
									spaceBetween: 18,
								},
							}}
						>
							{data.map((da) => (
								<SwiperSlide
									key={da.id}
									className="w-[324px] bg-[#9998E133] border border-[#9998E180] rounded-xl border overflow-hidden"
								>
									<Items item={da} />
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</div>
		</div>
	);
};

const Items = ({ item }) => {
	return (
		<div
			key={item.id}
			className=""
		>
			<div className="flex items-start justify-between p-8">
				<div>
					<img
						src={item.img}
						alt=""
						className="object-cover rounded-full w-14 h-14"
					/>
					<p className="text-base font-semibold">{item.name}</p>
				</div>
				<PiQuotesFill className="text-[#9998E1] rotate-180 text-2xl" />
			</div>
			<p className="px-8 pb-8">{item.review}</p>
		</div>
	);
};

export default THSection;
