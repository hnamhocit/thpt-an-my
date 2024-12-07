import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useState,
} from "react";

interface InViewContextType {
	sectionName: string;
	setSectionName: Dispatch<SetStateAction<string>>;
}

export const InViewContext = createContext<InViewContextType>({
	sectionName: "",
	setSectionName: () => {},
});

const InViewProvider = ({ children }: { children: ReactNode }) => {
	const [sectionName, setSectionName] = useState("");

	return (
		<InViewContext.Provider value={{ sectionName, setSectionName }}>
			{children}
		</InViewContext.Provider>
	);
};

export default InViewProvider;
