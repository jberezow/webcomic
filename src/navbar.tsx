import React, { FC } from "react";
import { ComicNavbar, ComicNavBarItem, ComicNavBarMenu } from "./StyledComic";

interface NavBarItemProps {
	control: string;
}

const NavBarItem: FC<NavBarItemProps> = ({ control }) => {
	return <ComicNavBarItem>{control}</ComicNavBarItem>;
};

export const Navbar: FC = () => {
	return (
		<ComicNavbar>
			<ComicNavBarMenu>
				<NavBarItem control="First" />
				<NavBarItem control="Back" />
				<NavBarItem control="RANDOM" />
				<NavBarItem control="Forward" />
				<NavBarItem control="Game Winner" />
			</ComicNavBarMenu>
		</ComicNavbar>
	);
};
