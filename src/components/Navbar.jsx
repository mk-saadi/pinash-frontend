import { HiOutlineShoppingBag } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi2";

const Navbar = () => {
	return (
		<header className="flex gap-y-2.5 xl:flex-row flex-col items-center justify-between xl:w-[1148px] xl:h-[74px] mx-auto gap-x-1 xl:gap-x-8">
			<h1 className="text-3xl font-semibold">Saadi</h1>
			<nav>
				<ul className="flex text-sm xl:text-base font-medium gap-x-3 xl:gap-x-[24px]">
					<li>
						<a className="flex gap-x-1.5 items-center cursor-pointer">
							Courses <HiChevronDown className="text-lg" />
						</a>
					</li>
					<li>
						<a className="flex gap-x-1.5 items-center cursor-pointer">
							Instructors <HiChevronDown className="text-lg" />
						</a>
					</li>
					<li>
						<a className="flex gap-x-1.5 items-center">
							Blogs <HiChevronDown className="text-lg" />
						</a>
					</li>
					<li>
						<a
							href="#"
							className="cursor-pointer "
						>
							About
						</a>
					</li>
					<li>
						<a
							href="#"
							className="cursor-pointer "
						>
							Contact
						</a>
					</li>
				</ul>
			</nav>
			<div className="items-center justify-center hidden xl:flex gap-x-4">
				<button className="text-til">
					<HiOutlineShoppingBag className="text-[28px]" />
				</button>
				<button className="px-6 py-3 font-semibold text-white rounded-full bg-til">Login</button>
			</div>
		</header>
	);
};

export default Navbar;
