import { FaSquareXTwitter, FaSquareFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { PiDiscordLogoFill } from "react-icons/pi";

const Footer = () => {
	return (
		<div className="bg-[#F4F4F6]">
			<div className="mx-auto pt-28 pb-36 w-[1148px] ">
				<div className="text-[#000000B2] flex justify-between items-start text-base">
					<nav className="flex flex-col justify-start gap-y-3">
						<h6 className="text-[13px] text-[#00000080] mb-5">Categories</h6>
						<a>Nutrition and diet</a>
						<a>Fitness training</a>
						<a>Mindfulness</a>
						<a>Mental health</a>
						<a>Personal growth</a>
						<a>Social well-being</a>
					</nav>
					<nav className="flex flex-col justify-start gap-y-3">
						<h6 className="text-[13px] text-[#00000080] mb-5">About</h6>
						<a>About us</a>
						<a>Our partner</a>
						<a>Investors</a>
						<a>Career</a>
					</nav>
					<nav className="flex flex-col justify-start gap-y-3">
						<h6 className="text-[13px] text-[#00000080] mb-5">Resources</h6>
						<a>FAQ</a>
						<a>Refund policies</a>
						<a>Terms and conditions</a>
						<a>Cookies</a>
						<a>Latest post</a>
					</nav>
					<nav className="flex flex-col justify-start gap-y-3">
						<h6 className="text-[13px] text-[#00000080] mb-5">Support</h6>
						<a>Get in touch</a>
						<a>Visit our forum</a>
					</nav>
				</div>
				<div
					className="border-y border-dashed border-[#00000033] py-8 mt-10"
					style={{
						borderImage:
							"repeating-linear-gradient(to right, #00000033 0, #00000033 15px, transparent 15px, transparent 20px) 1",
					}}
				>
					<div className="flex items-center justify-between">
						<p className="text-[20px] font-medium">Join our official channels</p>
						<div className="text-[#00000080] text-[26px] flex justify-end items-center gap-x-4">
							<FaSquareXTwitter />
							<RiInstagramFill />
							<FaSquareFacebook />
							<PiDiscordLogoFill />
						</div>
					</div>
				</div>
				<p className="text-[#00000080] mt-10 text-[13px]">© 2024 EduPath. All rights reserved</p>
			</div>
		</div>
	);
};

export default Footer;
