import { AnimatePresence, motion } from "motion/react";
import { memo, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import { Pages } from "@/pages";
import ActiveLink from "../ActiveLink";

const MobileMenu = ({ pages }: { pages: Pages }) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleIsOpen = () => setIsOpen((prev) => !prev);

	return (
		<div className="relative md:hidden">
			<motion.button
				whileTap={{ scale: 0.8 }}
				onClick={toggleIsOpen}
				className="flex items-center justify-center p-2 border-2 rounded-full"
			>
				<GiHamburgerMenu />
			</motion.button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						key="dropdown"
						className="absolute right-0 flex flex-col gap-5 p-4 bg-white border shadow-xl top-full min-w-60 rounded-2xl"
						initial={{ opacity: 0, translateY: "-20%" }}
						animate={{ opacity: 1, scale: 1, translateY: 8 }}
						exit={{ opacity: 0, translateY: "-20%" }}
					>
						{pages.map((page) => (
							<ActiveLink key={page.href} {...page} />
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default memo(MobileMenu);
