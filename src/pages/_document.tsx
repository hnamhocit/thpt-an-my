import { montserrat } from "@/fonts";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body className={montserrat.className}>
				<Main />
				<NextScript />
				<Analytics />
				<SpeedInsights />
			</body>
		</Html>
	);
}
