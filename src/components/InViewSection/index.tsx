import { FC, memo, ReactNode, useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { InViewContext } from "@/contexts/InView";

interface InViewSectionProps {
	sectionName: string;
	children: ReactNode;
}

const InViewSection: FC<InViewSectionProps> = ({ sectionName, children }) => {
	const { setSectionName } = useContext(InViewContext);
	const { ref, inView } = useInView({
		threshold: 0.3,
	});

	useEffect(() => {
		if (inView) {
			setSectionName(sectionName);
			document
				.querySelector(`#${sectionName}`)
				?.classList.add("animate__animated", "animate__backInUp");
		}
	}, [inView, setSectionName, sectionName]);

	return (
		<div ref={ref} id={sectionName} className="space-y-10">
			{children}
		</div>
	);
};

export default memo(InViewSection);
