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
		<div className="space-y-5 text-center">
			<div
				className="mx-auto bg-center bg-no-repeat bg-cover shadow-md w-80 h-60 rounded-2xl"
				style={{
					backgroundImage: `url(${url})`,
				}}
			></div>

			<div className="text-xl font-bold uppercase line-clamp-1">
				{title}
			</div>

			<div className="text-sm text-left text-gray-300">
				{isExpanded ? content : `${content.substring(0, 200)}...`}

				<button
					className="font-semibold text-white underline"
					onClick={toggleIsExpanded}
				>
					{isExpanded ? "Thu gọn" : "Xem thêm"}
				</button>
			</div>
		</div>
	);
};

export default memo(EventCard);
