import clsx from "clsx";
import Image from "next/image";
import { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import { InViewContext } from "@/contexts/InView";
import type { Pages } from "@/pages";
import ActiveLink from "./ActiveLink";

const Header = ({ pages }: { pages: Pages }) => {
	const [isOpen, setIsOpen] = useState(false);
	const { sectionName, setSectionName } = useContext(InViewContext);

	const toggleIsOpen = () => setIsOpen((prev) => !prev);

	return (
		<header className="sticky top-0 left-0 z-20 flex items-center justify-between w-full h-16 bg-white px-4 shadow-md">
			<div className="flex items-center gap-3 animate__animated animate__bounceIn">
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
			</div>

			<div className="items-center hidden h-full gap-5 md:flex">
				{pages.map((page) => (
					<ActiveLink
						key={page.href}
						{...page}
						sectionName={sectionName}
						setSectionName={setSectionName}
					/>
				))}
			</div>

			<div className="relative md:hidden">
				<button
					onClick={toggleIsOpen}
					className="flex items-center justify-center p-2 border-2 rounded-full"
				>
					<GiHamburgerMenu />
				</button>

				<div
					className={clsx(
						"absolute right-0 flex flex-col gap-5 p-4 bg-white border shadow-xl top-full min-w-60 rounded-2xl transition-all",
						{
							"visible opacity-100 translate-y-2": isOpen,
							"invisible opacity-0 -translate-y-2": !isOpen,
						}
					)}
				>
					{pages.map((page) => (
						<ActiveLink
							key={page.href}
							{...page}
							sectionName={sectionName}
							setSectionName={setSectionName}
						/>
					))}
				</div>
			</div>
		</header>
	);
};

export default Header;
