import { motion } from "motion/react";
import { FC, memo, ReactNode, useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { InViewContext } from "@/contexts/InView";

interface InViewSectionProps {
	sectionName: string;
	children: ReactNode;
}

const InViewSection: FC<InViewSectionProps> = ({ sectionName, children }) => {
	const { setSectionName } = useContext(InViewContext);
	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView) {
			setSectionName(sectionName);
		}
	}, [setSectionName, sectionName, inView]);

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
			{children}
		</motion.div>
	);
};

export default memo(InViewSection);
