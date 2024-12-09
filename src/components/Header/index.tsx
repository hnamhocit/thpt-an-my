import { motion } from "motion/react";
import Image from "next/image";

import type { Pages } from "@/pages";
import ActiveLink from "./ActiveLink";
import MobileMenu from "./MobileMenu";

const Header = ({ pages }: { pages: Pages }) => {
	return (
		<header className="sticky top-0 left-0 z-20 flex items-center justify-between w-full h-16 bg-white px-4 shadow-md">
			<motion.div
				initial={{ opacity: 0, scale: 0, translateY: "-100%" }}
				animate={{ opacity: 1, scale: 1, translateY: 0 }}
				className="flex items-center gap-3"
			>
				<Image
					src="/assets/images/logo.jpg"
					alt="App logo"
					width={48}
					height={48}
					className="rounded-full"
				/>

				<div className="hidden text-xl font-semibold md:block">
					THPT AN MỸ
				</div>
			</motion.div>

			<div className="items-center hidden h-full gap-5 md:flex">
				{pages.map((page) => (
					<ActiveLink key={page.href} {...page} />
				))}
			</div>

			<MobileMenu pages={pages} />
		</header>
	);
};

export default Header;
