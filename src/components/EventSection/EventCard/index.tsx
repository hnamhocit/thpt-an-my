import { motion } from "motion/react";
import { FC, memo, useState } from "react";

type Event = {
	url: string;
	title: string;
	content: string;
};

const EventCard: FC<Event> = ({ url, title, content }) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleIsExpanded = () => setIsExpanded((prev) => !prev);

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0 }}
			whileInView={{ opacity: 1, scale: 1 }}
			className="space-y-5 text-center"
		>
			<div
				className="mx-auto bg-center bg-no-repeat bg-cover shadow-md min-h-60 rounded-2xl"
				style={{
					backgroundImage: `url(${url})`,
				}}
			></div>

			<div className="text-xl font-bold uppercase line-clamp-1">
				{title}
			</div>

			<div className="text-sm text-left text-gray-700">
				{isExpanded ? content : `${content.substring(0, 200)}...`}{" "}
				<button
					className="font-semibold underline"
					onClick={toggleIsExpanded}
				>
					{isExpanded ? "Thu gọn" : "Xem thêm"}
				</button>
			</div>
		</motion.div>
	);
};

export default memo(EventCard);
