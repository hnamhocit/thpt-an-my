import clsx from "clsx";
import { FC, memo, ReactNode, useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { InViewContext } from "@/contexts/InView";

interface InViewSectionProps {
	sectionName: string;
	children: ReactNode;
}

const InViewSection: FC<InViewSectionProps> = ({ sectionName, children }) => {
	const [animated, setAnimated] = useState(false);
	const { ref, inView } = useInView({ threshold: 0.5 });
	const { setSectionName } = useContext(InViewContext);

	useEffect(() => {
		if (inView) {
			setSectionName(sectionName);
			setTimeout(() => setAnimated(true), 1000);
		}
	}, [inView, sectionName, setSectionName, animated]);

	return (
		<div
			id={sectionName}
			ref={ref}
			className={clsx("space-y-5", {
				"animate__animated animate__bounceIn": inView && !animated,
			})}
		>
			{children}
		</div>
	);
};

export default memo(InViewSection);
