import clsx from "clsx";
import { Dispatch, FC, memo, ReactElement, SetStateAction } from "react";

interface ActiveLinkProps {
	href: string;
	name: string;
	icon: ReactElement;
	sectionName: string;
	setSectionName: Dispatch<SetStateAction<string>>;
}

const ActiveLink: FC<ActiveLinkProps> = ({
	sectionName,
	href,
	name,
	icon,
	setSectionName,
}) => {
	const isActive = href.replace("#", "") === sectionName;

	return (
		<a
			href={href}
			className={clsx(
				"flex hover:border-pink-500 px-2 h-full hover:text-primary items-center gap-2 transition-all animate__animated animate__bounceIn",
				{
					"text-primary border-pink-500 font-medium md:border-b-4":
						isActive,
				}
			)}
			onClick={() => setSectionName(href.replace("#", ""))}
		>
			<span className={clsx("md:hidden", isActive && "text-pink-500")}>
				{icon}
			</span>
			{name}
		</a>
	);
};

export default memo(ActiveLink);
