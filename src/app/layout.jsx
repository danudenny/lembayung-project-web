import RootLayout from "@/components/RootLayout";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: {
		template: "blog_app",
		default: "Lembayung Project",
	},
};

export default function Layout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<RootLayout>{children}</RootLayout>
			</body>
		</html>
	);
}
