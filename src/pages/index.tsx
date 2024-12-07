import clsx from "clsx";
import { JSX, ReactElement } from "react";
import { FaFacebook, FaGithub, FaMapMarkedAlt } from "react-icons/fa";
import { FaBell, FaClockRotateLeft } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { MdEmojiEvents } from "react-icons/md";

import ClassesRoomsSection from "@/components/ClassesRoomsSections";
import EventSection from "@/components/EventSection";
import Header from "@/components/Header";
import HistorySection from "@/components/HistorySection";
import InViewSection from "@/components/InViewSection";
import TeachersSection from "@/components/TeachersSection";
import Trophies from "@/components/TrophiesSection";
import InViewProvider from "@/contexts/InView";
import { lobster } from "@/fonts";

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
	{
		href: "#classes-rooms",
		name: "Sơ đồ lớp - Phòng học",
		icon: <FaMapMarkedAlt />,
		content: <ClassesRoomsSection />,
	},
	{
		href: "#trophies",
		name: "Thành tựu",
		icon: <MdEmojiEvents />,
		content: <Trophies />,
	},
];

export default function Home() {
	return (
		<InViewProvider>
			<Header pages={pages} />

			<div
				className="mb-5 relative h-[calc(100vh-64px)] bg-left bg-no-repeat bg-cover min-h-80"
				style={{
					backgroundImage: "url(/assets/images/hero.jpg)",
				}}
			>
				<div className="absolute space-y-5 text-center -translate-x-1/2 -translate-y-1/2 lobster-regular top-1/2 left-1/2 text-white">
					<div
						className={clsx(
							"text-8xl font-black tracking-wide animate__animated animate__bounceInDown",
							lobster.className
						)}
					>
						Trường THPT An Mỹ
					</div>
					<div
						className={clsx(
							"text-3xl font-bold tracking-wide animate__animated animate__bounceInDown",
							lobster.className
						)}
					>
						Thi đua dạy tốt học tốt
					</div>
				</div>
			</div>

			<div className="container p-4 space-y-10">
				{pages.map((page) => (
					<InViewSection
						key={page.href}
						sectionName={page.href.replace("#", "")}
					>
						<div className="heading text-center">{page.name}</div>
						{page.content}
					</InViewSection>
				))}

				<div className="p-4 text-center italic font-semibold rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-md flex items-center justify-center gap-3 text-white">
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
				</div>
			</div>
		</InViewProvider>
	);
}
