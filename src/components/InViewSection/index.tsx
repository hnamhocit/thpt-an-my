import clsx from "clsx";
import { FC, memo, ReactNode, useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { InViewContext } from "@/contexts/InView";

interface InViewSectionProps {
	sectionName: string;
	children: ReactNode;
}

const InViewSection: FC<InViewSectionProps> = ({ sectionName, children }) => {
	const { ref, inView } = useInView({ threshold: 0.5 });
	const { setSectionName } = useContext(InViewContext);

	useEffect(() => {
		if (inView) {
			setSectionName(sectionName);
		}
	}, [inView, sectionName, setSectionName]);

	return (
		<div
			id={sectionName}
			ref={ref}
			className={clsx("space-y-5", {
				"animate__animated animate__bounceIn": inView,
			})}
		>
			{children}
		</div>
	);
};

export default memo(InViewSection);
