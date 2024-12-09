import clsx from "clsx";
import { motion } from "motion/react";
import { FC, memo, ReactElement, useContext } from "react";

import { InViewContext } from "@/contexts/InView";

interface ActiveLinkProps {
	href: string;
	name: string;
	icon: ReactElement;
}

const ActiveLink: FC<ActiveLinkProps> = ({ href, name, icon }) => {
	const { sectionName, setSectionName } = useContext(InViewContext);
	const isActive = href.replace("#", "") === sectionName;

	function handleClick() {
		document.querySelector(href)?.scrollIntoView();
		setSectionName(href.replace("#", ""));
	}

	return (
		<motion.button
			initial={{ opacity: 0, scale: 0, translateY: "-100%" }}
			animate={{ opacity: 1, scale: 1, translateY: 0 }}
			whileTap={{ scale: 0.8 }}
			onClick={handleClick}
			className={clsx(
				"flex hover:border-pink-500 px-2 font-medium h-full hover:text-primary items-center gap-2",
				{
					"text-primary border-pink-500 font-medium md:border-b-4":
						isActive,
				}
			)}
		>
			<span className={clsx("md:hidden", isActive && "text-pink-500")}>
				{icon}
			</span>
			{name}
		</motion.button>
	);
};

export default memo(ActiveLink);
