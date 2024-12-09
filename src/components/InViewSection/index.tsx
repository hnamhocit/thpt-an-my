import { motion, useInView } from "motion/react";
import { FC, memo, ReactNode, useContext, useEffect, useRef } from "react";

import { InViewContext } from "@/contexts/InView";

interface InViewSectionProps {
	sectionName: string;
	children: ReactNode;
	name: string;
}

const InViewSection: FC<InViewSectionProps> = ({
	sectionName,
	children,
	name,
}) => {
	const { setSectionName } = useContext(InViewContext);
	const ref = useRef(null);
	const isInView = useInView(ref);

	useEffect(() => {
		if (isInView) {
			setSectionName(sectionName);
		}
	}, [setSectionName, sectionName, isInView]);

	return (
		<motion.div
			ref={ref}
			id={sectionName}
			initial={{ opacity: 0, translateY: 100 }}
			whileInView={{
				opacity: 1,
				translateY: 0,
			}}
			className="space-y-10"
		>
			<div className="heading text-center">{name}</div>
			{children}
		</motion.div>
	);
};

export default memo(InViewSection);
