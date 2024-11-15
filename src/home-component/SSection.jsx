import { useEffect, useState } from "react";
import SCard from "./SCard";

const SSection = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("card.json")
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);

	return (
		<div
			// className="mx-auto xl:w-[1148px]"
			className="mx-auto xl:w-[1148px] relative"
		>
			<div className="mb-[60px]">
				<h4 className="text-[40px] font-bold">Our popular courses</h4>
				<p className="mt-6 text-base max-w-prose">
					By taking proactive steps to nurture mental health, we can enhance our quality of life,
					build resilience, and foster a sense of inner peace and balance
				</p>
			</div>
			<div>
				<SCard data={data} />
			</div>
		</div>
	);
};

export default SSection;
