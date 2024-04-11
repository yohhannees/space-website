import type { Metadata } from "next";
import "@mantine/core/styles.css";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export const metadata: Metadata = {
  title: "Ahamenes Space Club",
  description: "Website For Ahamenes Space Club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
			<html lang="en">
				<body className="bg-black no-scrollbar overflow-y-scroll overflow-x-hidden">
					<MantineProvider>
						<div className="h-full bg-main-background-image bg-cover bg-fixed ">
							<div className="h-full bg-black bg-opacity-70">
								<div className="fixed w-full h-[80px] z-50 backdrop-blur-[2px]">
									<Navbar />
								</div>
								<div className="pt-[80px]">{children}</div>
								<div className=""><Footer/></div>
							</div>
						</div>
					</MantineProvider>
				</body>
			</html>
		);
}
