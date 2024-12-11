import clsx from "clsx";
import { motion } from "motion/react";
import { JSX, ReactElement } from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaBell, FaClockRotateLeft } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";

import EventSection from "@/components/EventSection";
import Header from "@/components/Header";
import HistorySection from "@/components/HistorySection";
import InViewSection from "@/components/InViewSection";
import TeachersSection from "@/components/TeachersSection";
import InViewProvider from "@/contexts/InView";
import { lobsterTwo } from "@/fonts";

export type Page = {
	href: string;
	name: string;
	icon: ReactElement;
	component: () => JSX.Element;
};

export type Pages = typeof pages;

const pages = [
	{
		href: "#history",
		name: "Quá trình thành lập",
		icon: <FaClockRotateLeft />,
		content: <HistorySection />,
	},
	{
		href: "#events",
		name: "Hoạt động",
		icon: <FaBell />,
		content: <EventSection />,
	},
	{
		href: "#teachers",
		name: "Giáo viên bộ môn",
		icon: <GiTeacher />,
		content: <TeachersSection />,
	},
];

export default function Home() {
	return (
		<InViewProvider>
			<Header pages={pages} />

			<div className="mb-5 relative h-screen min-h-80">
				<div
					className="absolute inset-0 -z-20 bg-left bg-no-repeat bg-cover"
					style={{
						backgroundImage: "url(/assets/images/hero.jpg)",
					}}
				></div>

				<div className="absolute inset-0 -z-10 bg-[rgba(0,0,0,.3)] backdrop-blur-sm"></div>

				<div className="absolute space-y-5 text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-white max-w-md">
					<motion.div
						initial={{ opacity: 0, scale: 0, translateY: "-100%" }}
						animate={{ opacity: 1, scale: 1, translateY: 0 }}
						className={clsx("text-8xl", lobsterTwo.className)}
					>
						Trường Thpt An Mỹ
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0, translateY: "-100%" }}
						animate={{ opacity: 1, scale: 1, translateY: 0 }}
						className={clsx("text-3xl", lobsterTwo.className)}
					>
						Thi đua dạy tốt, học tốt
					</motion.div>
				</div>
			</div>

			<div className="container p-4 flex flex-col gap-20">
				{pages.map((page) => (
					<InViewSection
						key={page.href}
						sectionName={page.href.replace("#", "")}
						name={page.name}
					>
						{page.content}
					</InViewSection>
				))}

				<motion.div
					initial={{ opacity: 0, scale: 0 }}
					whileInView={{ opacity: 1, scale: 1 }}
					className="p-4 text-center italic font-semibold rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-md flex items-center justify-center gap-3 text-white"
				>
					<div className="font-semibold">
						Make By Nguyễn Hoàng Nam 2024
					</div>

					<a
						target="_blank"
						className="block p-2 bg-black rounded-full hover:opacity-80 transition"
						href="https://facebook.com/hnamhocit"
					>
						<FaGithub size={24} />
					</a>

					<a
						target="_blank"
						className="block p-2 bg-black rounded-full hover:opacity-80 transition"
						href="https://github.com/hnamhocit"
					>
						<FaFacebook size={24} />
					</a>
				</motion.div>
			</div>
		</InViewProvider>
	);
}
