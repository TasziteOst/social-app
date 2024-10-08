"use client";

import NextTopLoader from "nextjs-toploader";
import LoadingScreen from "@/presentation/components/Screens/LoadingScreen";
import BottomSideBar from "@/presentation/components/Sidebars/BottomSideBar";
import LeftSideBar from "@/presentation/components/Sidebars/LeftSideBar";
import RightSideBar from "@/presentation/components/Sidebars/RightSideBar";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";

export default function LayoutStructure({ me, children }) {
  const pathname = usePathname();
  const hideSidebars = pathname === "/auth/signin" || pathname === "/auth/signup"; //we will implement this in a better way in the very near future (probably we'll not, but I just want to let you know that we know this isnt the best way!!)

	return (
		<>
			<NextTopLoader showSpinner={false} zIndex="9999" />
			{!hideSidebars && <LeftSideBar me={me} />}
			
			<div className="bg-transparent flex-1 lg:pl-4 max-lg:pl-0 min-h-screen">
			  <ThemeProvider defaultTheme="light" attribute="class">
			    {children}
			    {!hideSidebars && (
			    	<div className="lg:hidden min-h-[50px] max-[1089px]:visible">
			    	  <BottomSideBar me={me} />
			    	</div>
			    )}
			  </ThemeProvider>
			</div>
			{!hideSidebars && (
			  <div className="pt-4 max-lg:pt-4">
			    <RightSideBar />
			  </div>
			)}
		</>
	);
}