import clsx from "clsx";
import { FC, memo, ReactNode, useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { InViewContext } from "@/contexts/InView";

interface InViewSectionProps {
	sectionName: string;
	children: ReactNode;
}

const InViewSection: FC<InViewSectionProps> = ({ sectionName, children }) => {
	const { setSectionName } = useContext(InViewContext);
	const { ref, inView } = useInView({ triggerOnce: true });

	useEffect(() => {
		if (inView) setSectionName(sectionName);
	}, [inView, setSectionName, sectionName]);

	return (
		<div
			ref={ref}
			id={sectionName}
			className={clsx("space-y-10", {
				"animate__animated animate__backInUp": inView,
			})}
		>
			{children}
		</div>
	);
};

export default memo(InViewSection);
